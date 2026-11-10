import { BANK } from './questions.js';
import { createRankingClient, rankingMode } from './ranking.js';
import { selectQuestions } from './quiz.js';

const $ = id => document.getElementById(id);
const rankingClient = createRankingClient();
const settings = { level: 'all', quantity: 'all' };
const rankRequests = { home: 0, result: 0, position: 0 };
let game = null;
let lastResult = null;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(element => {
    element.classList.toggle('active', element.id === id);
  });
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
}

function selectedTotal() {
  const available = settings.level === 'all'
    ? BANK.length
    : BANK.filter(question => question.level === settings.level).length;
  return settings.quantity === 'all'
    ? available
    : Math.min(Number(settings.quantity), available);
}

function renderRanking(kind, entries, ownEntryId) {
  const list = $(kind + '-rank-list');
  list.replaceChildren();
  if (entries.length === 0) {
    $(kind + '-rank-status').textContent = 'Ainda não há resultados neste desafio.';
    return;
  }
  $(kind + '-rank-status').textContent = '';
  for (const entry of entries) {
    const row = document.createElement('div');
    row.className = 'ranking-row' + (entry.id === ownEntryId ? ' mine' : '');
    const place = document.createElement('span');
    place.className = 'ranking-place';
    place.textContent = entry.place + 'º';
    const name = document.createElement('span');
    name.className = 'ranking-name';
    name.textContent = entry.name;
    const score = document.createElement('strong');
    score.className = 'ranking-score';
    score.textContent = entry.score.toLocaleString('pt-BR') + ' pts';
    const hits = document.createElement('span');
    hits.className = 'ranking-hits';
    hits.textContent = entry.hits + '/' + entry.total + ' acertos';
    row.append(place, name, score, hits);
    list.append(row);
  }
}

async function loadRanking(kind, mode, level, ownEntryId = '') {
  const request = ++rankRequests[kind];
  const label = level === 'all' ? 'Todas' : level;
  const total = Number(mode.slice(mode.lastIndexOf('_') + 1));
  $(kind + '-rank-title').textContent = `Ranking • ${label} • ${total} questões`;
  $(kind + '-rank-status').textContent = 'Carregando ranking...';
  $(kind + '-rank-list').replaceChildren();
  try {
    const entries = await rankingClient.topTen(mode);
    if (request === rankRequests[kind]) renderRanking(kind, entries, ownEntryId);
  } catch {
    if (request === rankRequests[kind]) {
      $(kind + '-rank-status').textContent = 'Ranking indisponível no momento. Tente atualizar mais tarde.';
    }
  }
}

async function loadPosition(result) {
  const request = ++rankRequests.position;
  $('my-rank-place').textContent = 'Calculando...';
  $('my-rank-detail').textContent = '';
  try {
    const place = await rankingClient.position(result.rankMode, result.score);
    if (request !== rankRequests.position || result !== lastResult) return;
    result.rankPosition = place;
    $('my-rank-place').textContent = place + 'º lugar';
    $('my-rank-detail').textContent = `${result.score.toLocaleString('pt-BR')} pontos • ${result.hits}/${result.questions.length} acertos`;
  } catch {
    if (request !== rankRequests.position || result !== lastResult) return;
    $('my-rank-place').textContent = 'Indisponível';
    $('my-rank-detail').textContent = 'O resultado foi salvo, mas não foi possível consultar a posição.';
  }
}

function refreshHomeRanking() {
  void loadRanking('home', rankingMode(settings.level, selectedTotal()), settings.level);
}

function refreshResultRanking() {
  if (!lastResult) return;
  void loadRanking('result', lastResult.rankMode, lastResult.rankLevel, lastResult.rankEntryId);
  if (lastResult.rankEntryId) void loadPosition(lastResult);
}

async function publishRanking(result) {
  $('result-rank-status').textContent = 'Enviando seu resultado ao ranking...';
  $('result-rank-list').replaceChildren();
  $('my-rank-place').textContent = 'Aguardando envio...';
  $('my-rank-detail').textContent = '';
  try {
    result.rankEntryId = await rankingClient.submit(result.rankMode, {
      name: result.participant,
      score: result.score,
      hits: result.hits,
      total: result.questions.length,
    });
    await Promise.all([
      loadRanking('result', result.rankMode, result.rankLevel, result.rankEntryId),
      loadPosition(result),
    ]);
  } catch {
    if (result !== lastResult) return;
    $('result-rank-status').textContent = 'Não foi possível salvar no ranking. Seu resultado continua disponível nesta página.';
    $('my-rank-place').textContent = 'Indisponível';
    $('my-rank-detail').textContent = 'O resultado não foi enviado ao ranking.';
  }
}

function setLevel(level) {
  settings.level = level;
  document.querySelectorAll('[data-level]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.level === level));
  });
  refreshHomeRanking();
}

document.querySelectorAll('[data-level]').forEach(button => {
  button.addEventListener('click', () => setLevel(button.dataset.level));
});
$('quantity').addEventListener('change', event => {
  settings.quantity = event.target.value;
  refreshHomeRanking();
});
$('name').addEventListener('input', () => $('name').setCustomValidity(''));
document.querySelectorAll('[data-rank-refresh]').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.rankRefresh === 'home') refreshHomeRanking();
    else refreshResultRanking();
  });
});
$('start').addEventListener('click', startGame);
$('next').addEventListener('click', nextQuestion);
$('again').addEventListener('click', () => {
  showScreen('home');
  refreshHomeRanking();
  $('start').focus();
});
$('toggle-review').addEventListener('click', () => {
  const expanded = $('toggle-review').getAttribute('aria-expanded') === 'true';
  $('toggle-review').setAttribute('aria-expanded', String(!expanded));
  $('review').classList.toggle('hidden', expanded);
  $('toggle-review').textContent = expanded ? 'VER GABARITO' : 'OCULTAR GABARITO';
});
$('download').addEventListener('click', saveResult);
document.addEventListener('keydown', event => {
  if (!$('game').classList.contains('active') || !game) return;
  if (event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;
  if (game.answered && event.key === 'Enter') {
    event.preventDefault();
    nextQuestion();
  } else if (!game.answered && ['1', '2', '3', '4'].includes(event.key)) {
    event.preventDefault();
    answer(Number(event.key) - 1);
  }
});
refreshHomeRanking();

function startGame() {
  const nameInput = $('name');
  const participant = nameInput.value.trim().slice(0, 40);
  if (!participant) {
    nameInput.setCustomValidity('Informe seu nome para participar do ranking.');
    nameInput.reportValidity();
    nameInput.focus();
    return;
  }

  settings.quantity = $('quantity').value;
  const questions = selectQuestions(BANK, settings.level, settings.quantity);
  game = {
    questions,
    index: 0,
    answered: false,
    finished: false,
    score: 0,
    hits: 0,
    streak: 0,
    bestStreak: 0,
    history: [],
    participant,
    rankLevel: settings.level,
    rankMode: rankingMode(settings.level, questions.length),
  };
  $('player-label').textContent = `Vai com tudo, ${participant}!`;
  $('review').classList.add('hidden');
  $('toggle-review').setAttribute('aria-expanded', 'false');
  $('toggle-review').textContent = 'VER GABARITO';
  showScreen('game');
  renderQuestion();
}
function renderQuestion() {
  if (!game) return;
  game.answered = false;
  const question = game.questions[game.index];
  const total = game.questions.length;
  const step = game.index + 1;
  $('chapter').textContent = `${question.level} • Rodada ${step}`;
  $('score').textContent = game.score.toLocaleString('pt-BR');
  $('hits').textContent = game.hits;
  $('step').textContent = `${step}/${total}`;
  $('qtype').textContent = `QUESTÃO ${String(step).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  $('progress-fill').style.width = `${game.index / total * 100}%`;
  document.querySelector('.progress').setAttribute('aria-valuenow', String(Math.round(game.index / total * 100)));
  $('question').textContent = question.question;
  $('codewrap').classList.toggle('hidden', !question.code);
  $('snippet').textContent = question.code || '';
  $('feedback').classList.remove('show');
  $('next').classList.add('hidden');

  const answers = $('answers');
  answers.replaceChildren();
  question.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'answer';
    button.type = 'button';
    button.setAttribute('aria-label', `Alternativa ${index + 1}: ${choice}`);
    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.textContent = String.fromCharCode(65 + index);
    letter.setAttribute('aria-hidden', 'true');
    const label = document.createElement('span');
    label.textContent = choice;
    button.append(letter, label);
    button.addEventListener('click', () => answer(index));
    answers.append(button);
  });
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function answer(selected) {
  if (!game || game.answered) return;
  game.answered = true;
  const question = game.questions[game.index];
  const isCorrect = selected === question.correct;
  const earned = isCorrect ? 100 : 0;
  if (isCorrect) {
    game.hits++;
    game.streak++;
    game.bestStreak = Math.max(game.bestStreak, game.streak);
    game.score += earned;
  } else {
    game.streak = 0;
  }
  game.history.push({ q: question, selected, earned, isCorrect });
  $('score').textContent = game.score.toLocaleString('pt-BR');
  $('hits').textContent = game.hits;
  [...$('answers').children].forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) button.classList.add('correct');
    else if (index === selected) button.classList.add('incorrect');
    else button.classList.add('dimmed');
  });
  const feedbackTitle = $('feedback-title');
  feedbackTitle.className = 'feedbacktop ' + (isCorrect ? 'good' : 'bad');
  feedbackTitle.textContent = isCorrect ? `CORRETO! +${earned} PONTOS` : 'AINDA NÃO FOI DESSA VEZ';
  $('feedback-desc').textContent = question.explanation;
  $('feedback').classList.add('show');
  $('next').classList.remove('hidden');
  $('next').innerHTML = game.index + 1 === game.questions.length
    ? 'VER RESULTADO <span class="arrow" aria-hidden="true">→</span>'
    : 'PRÓXIMA QUESTÃO <span class="arrow" aria-hidden="true">→</span>';
  $('next').focus({ preventScroll: true });
}

function nextQuestion() {
  if (!game || !game.answered || game.finished) return;
  if (game.index + 1 >= game.questions.length) finishGame();
  else {
    game.index++;
    renderQuestion();
  }
}
function finishGame() {
  if (game.finished) return;
  game.finished = true;
  const total = game.questions.length;
  const percentage = Math.round(game.hits / total * 100);
  lastResult = { ...game, percentage };
  $('progress-fill').style.width = '100%';
  $('medal').textContent = percentage >= 90 ? 'S' : percentage >= 70 ? 'A' : percentage >= 50 ? 'B' : 'C';
  $('result-title').textContent = percentage >= 90 ? 'Código dominado!'
    : percentage >= 70 ? 'Mandou muito bem!'
      : percentage >= 50 ? 'Boa evolução!' : 'Continue praticando!';
  const message = percentage >= 70
    ? 'Seu resultado mostra um bom domínio dos conceitos.'
    : 'Reveja as explicações e tente novamente para melhorar sua pontuação.';
  $('result-subtitle').textContent = `${game.participant}, você concluiu ${total} questões. ${message}`;
  $('end-points').textContent = game.score.toLocaleString('pt-BR');
  $('end-hits').textContent = `${game.hits}/${total}`;
  $('end-percent').textContent = percentage + '%';
  $('end-streak').textContent = game.bestStreak;
  renderCategoryStats();
  renderReview();
  showScreen('result');
  void publishRanking(lastResult);
  if (percentage >= 70) makeConfetti();
}

function renderCategoryStats() {
  const container = $('category-stats');
  container.replaceChildren();
  for (const level of ['Iniciante', 'Intermediário', 'Orientação a Objetos']) {
    const answers = game.history.filter(item => item.q.level === level);
    if (answers.length === 0) continue;
    const hits = answers.filter(item => item.isCorrect).length;
    const card = document.createElement('div');
    card.className = 'levelbox';
    card.innerHTML = `<span>${escapeHTML(level)}</span><b>${hits} / ${answers.length} acertos</b><div class="mini-bar"><div style="width:${hits / answers.length * 100}%"></div></div>`;
    container.append(card);
  }
}

function renderReview() {
  const container = $('review-list');
  container.replaceChildren();
  game.history.forEach((item, index) => {
    const element = document.createElement('div');
    element.className = 'review-item';
    element.innerHTML = `<div class="review-q">${index + 1}. ${escapeHTML(item.q.question)}</div><p class="${item.isCorrect ? 'ok' : 'no'}">Sua resposta: ${escapeHTML(item.q.choices[item.selected])}</p><p class="ok">Resposta correta: ${escapeHTML(item.q.choices[item.q.correct])}</p><p class="why">${escapeHTML(item.q.explanation)}</p>`;
    container.append(element);
  });
}

function saveResult() {
  if (!lastResult) return;
  const result = lastResult;
  const lines = [
    'CODEQUEST C# — RESULTADO',
    `Participante: ${result.participant}`,
    `Data: ${new Date().toLocaleDateString('pt-BR')}`,
    `Questões: ${result.questions.length}`,
    `Acertos: ${result.hits}`,
    `Aproveitamento: ${result.percentage}%`,
    `Pontuação: ${result.score}`,
    `Posição no ranking: ${result.rankPosition ? result.rankPosition + 'º' : 'Indisponível'}`,
    `Maior sequência: ${result.bestStreak}`,
    '',
    'GABARITO COMENTADO',
  ];
  result.history.forEach((item, index) => {
    lines.push(
      '',
      `${index + 1}. ${item.q.question}`,
      `Escolhida: ${item.q.choices[item.selected]}`,
      `Correta: ${item.q.choices[item.q.correct]}`,
      `Explicação: ${item.q.explanation}`,
    );
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'resultado_codequest_csharp.txt';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function makeConfetti() {
  const container = $('confetti');
  container.replaceChildren();
  const colors = ['#4fdddf', '#ffa62b', '#4bddaf', '#c89af2', '#ffffff'];
  for (let index = 0; index < 65; index++) {
    const piece = document.createElement('span');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty('--drift', Math.random() * 220 - 110 + 'px');
    piece.style.animationDelay = Math.random() * .8 + 's';
    piece.style.animationDuration = 2 + Math.random() * 1.6 + 's';
    container.append(piece);
  }
  setTimeout(() => container.replaceChildren(), 4200);
}
