import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createRankingClient,
  normalizeTopTen,
  positionFromHigherScores,
  rankingMode,
} from '../js/ranking.js';

test('Top 10 ordena pontos e dá a mesma posição aos empatados', () => {
  const entries = normalizeTopTen({
    a: { name: 'Ana', score: 700, hits: 7, total: 10, createdAt: 2 },
    b: { name: 'Bia', score: 900, hits: 9, total: 10, createdAt: 1 },
    c: { name: 'Caio', score: 700, hits: 7, total: 10, createdAt: 3 },
  });
  assert.deepEqual(entries.map(entry => [entry.name, entry.place]), [
    ['Bia', 1], ['Ana', 2], ['Caio', 2],
  ]);
});

test('posição conta todos os resultados maiores, além do Top 10', () => {
  const higher = Object.fromEntries(
    Array.from({ length: 12 }, (_, index) => [
      String(index), { score: 900, name: 'Aluno ' + index },
    ]),
  );
  higher.tie = { score: 800, name: 'Empatado' };
  assert.equal(positionFromHigherScores(higher, 800), 13);
});

test('cliente consulta e grava no modo correto do Firebase', async () => {
  const calls = [];
  const client = createRankingClient(async (url, options) => {
    calls.push({ url: new URL(url), options });
    return {
      ok: true,
      async json() {
        return options.method === 'POST'
          ? { name: 'entrada123' }
          : { a: { name: 'Ana', score: 900, hits: 9, total: 10, createdAt: 1 } };
      },
    };
  });
  const mode = rankingMode('Iniciante', 10);
  assert.equal(mode, 'basico_10');
  assert.equal((await client.topTen(mode))[0].place, 1);
  assert.equal(await client.submit(mode, { name: 'Bia', score: 800, hits: 8, total: 10 }), 'entrada123');
  assert.equal(await client.position(mode, 800), 2);
  assert.equal(calls[0].url.searchParams.get('limitToLast'), '10');
  assert.equal(calls[2].url.searchParams.get('startAt'), '801');
  assert.equal(JSON.parse(calls[1].options.body).score, 800);
});
