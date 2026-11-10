const DATABASE_URL = 'https://temp-e-humid-default-rtdb.firebaseio.com';
const LEVEL_KEYS = Object.freeze({
  all: 'todas',
  Iniciante: 'basico',
  Intermediário: 'intermediario',
  'Orientação a Objetos': 'poo',
});

export function rankingMode(level, total) {
  const key = LEVEL_KEYS[level];
  if (!key || !Number.isInteger(total) || total < 1 || total > 90) {
    throw new Error('Configuração de ranking inválida.');
  }
  return `${key}_${total}`;
}

export function normalizeTopTen(snapshot) {
  const entries = Object.entries(snapshot ?? {})
    .filter(([, value]) =>
      value &&
      typeof value.name === 'string' &&
      Number.isInteger(value.score) &&
      Number.isInteger(value.hits) &&
      Number.isInteger(value.total),
    )
    .sort((a, b) =>
      b[1].score - a[1].score ||
      (a[1].createdAt ?? 0) - (b[1].createdAt ?? 0),
    )
    .slice(0, 10);

  let previousScore;
  let place = 0;
  return entries.map(([id, value], index) => {
    if (value.score !== previousScore) place = index + 1;
    previousScore = value.score;
    return { id, place, ...value };
  });
}

export function positionFromHigherScores(snapshot, score) {
  const higher = Object.values(snapshot ?? {})
    .filter(value => value && Number.isInteger(value.score) && value.score > score);
  return higher.length + 1;
}

export function createRankingClient(fetchImpl = globalThis.fetch) {
  async function request(url, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetchImpl(url, { ...options, signal: controller.signal });
      if (!response.ok) throw new Error(`Firebase respondeu ${response.status}`);
      return await response.json();
    } finally {
      clearTimeout(timeout);
    }
  }

  function urlFor(mode, parameters = {}) {
    if (!/^(todas|basico|intermediario|poo)_(10|20|30|60|90)$/.test(mode)) {
      throw new Error('Modo de ranking inválido.');
    }
    const url = new URL(`${DATABASE_URL}/codequest_rankings/${mode}.json`);
    for (const [key, value] of Object.entries(parameters)) {
      url.searchParams.set(key, String(value));
    }
    return url;
  }

  return {
    async topTen(mode) {
      const data = await request(urlFor(mode, { orderBy: JSON.stringify('score'), limitToLast: 10 }));
      return normalizeTopTen(data);
    },
    async submit(mode, { name, score, hits, total }) {
      const payload = { name, score, hits, total, createdAt: Date.now() };
      const response = await request(urlFor(mode), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (typeof response?.name !== 'string') throw new Error('Resposta inválida do Firebase.');
      return response.name;
    },
    async position(mode, score) {
      // startAt é inclusivo; +1 exclui resultados empatados e dá a mesma posição aos empates.
      const data = await request(urlFor(mode, { orderBy: JSON.stringify('score'), startAt: score + 1 }));
      return positionFromHigherScores(data, score);
    },
  };
}
