export function shuffleChoices(question, random = Math.random) {
  const order = question.choices.map((_, index) => index);
  for (let index = order.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(random() * (index + 1));
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }
  return {
    ...question,
    choices: order.map(index => question.choices[index]),
    correct: order.indexOf(question.correct),
  };
}

export function selectQuestions(bank, level, quantity, random = Math.random) {
  let selected = bank.filter(question => level === 'all' || question.level === level);
  if (quantity !== 'all') {
    const take = Math.min(Number(quantity), selected.length);
    if (level === 'all') {
      const levels = ['Iniciante', 'Intermediário', 'Orientação a Objetos'];
      const base = Math.floor(take / levels.length);
      const remainder = take % levels.length;
      selected = levels.flatMap((name, index) =>
        selected.filter(question => question.level === name)
          .slice(0, base + (index < remainder ? 1 : 0)),
      );
    } else {
      selected = selected.slice(0, take);
    }
  }
  return selected.map(question => shuffleChoices(question, random));
}
