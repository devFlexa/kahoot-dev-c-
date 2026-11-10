import test from 'node:test';
import assert from 'node:assert/strict';
import { BANK } from '../js/questions.js';
import { selectQuestions, shuffleChoices } from '../js/quiz.js';

test('o banco preserva 90 questões com quatro respostas válidas', () => {
  assert.equal(BANK.length, 90);
  for (const question of BANK) {
    assert.equal(question.choices.length, 4);
    assert.ok(question.correct >= 0 && question.correct < 4);
  }
});

test('embaralhar alternativas mantém a resposta correta', () => {
  const question = BANK[0];
  const shuffled = shuffleChoices(question, () => 0);
  assert.equal(shuffled.choices[shuffled.correct], question.choices[question.correct]);
  assert.notStrictEqual(shuffled.choices, question.choices);
});

test('dez questões de todos os níveis mantêm a distribuição equilibrada', () => {
  const selected = selectQuestions(BANK, 'all', '10', () => 0);
  assert.equal(selected.length, 10);
  assert.deepEqual(
    ['Iniciante', 'Intermediário', 'Orientação a Objetos']
      .map(level => selected.filter(question => question.level === level).length),
    [4, 3, 3],
  );
});

test('escolher sempre a alternativa mais longa não entrega o gabarito', () => {
  const measures = [text => text.length, text => text.trim().split(/\s+/).length];
  const levels = ['Iniciante', 'Intermediário', 'Orientação a Objetos'];
  for (const level of levels) {
    const questions = BANK.filter(question => question.level === level);
    for (const measure of measures) {
      const expectedHits = questions.reduce((sum, question) => {
        const lengths = question.choices.map(measure);
        const longest = Math.max(...lengths);
        const tied = lengths.filter(length => length === longest).length;
        return sum + (lengths[question.correct] === longest ? 1 / tied : 0);
      }, 0);
      const accuracy = expectedHits / questions.length;
      assert.ok(accuracy >= 0.18 && accuracy <= 0.32, `${level}: ${accuracy}`);
    }
  }
});
