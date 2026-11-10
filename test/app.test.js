import test from 'node:test';
import assert from 'node:assert/strict';

test('ao concluir o quiz, a tela mostra a posição mesmo fora do Top 10', async () => {
  class Element {
    constructor(id = '') {
      this.id = id;
      this.children = [];
      this.listeners = new Map();
      this.attributes = new Map();
      this.style = { setProperty() {} };
      const classes = new Set(id === 'home' ? ['active'] : []);
      this.classList = {
        add: name => classes.add(name),
        remove: name => classes.delete(name),
        contains: name => classes.has(name),
        toggle: (name, force) => {
          if (force ?? !classes.has(name)) classes.add(name);
          else classes.delete(name);
        },
      };
    }
    addEventListener(type, callback) { this.listeners.set(type, callback); }
    setAttribute(name, value) { this.attributes.set(name, value); }
    getAttribute(name) { return this.attributes.get(name); }
    replaceChildren() { this.children = []; }
    append(...children) { this.children.push(...children); }
    click() { this.listeners.get('click')?.(); }
    focus() {}
    setCustomValidity() {}
    reportValidity() {}
  }

  const elements = new Map();
  const get = id => {
    if (!elements.has(id)) elements.set(id, new Element(id));
    return elements.get(id);
  };
  get('name').value = 'Aluno';
  get('quantity').value = '10';
  globalThis.document = {
    getElementById: get,
    querySelectorAll(selector) {
      return selector === '.screen' ? [get('home'), get('game'), get('result')] : [];
    },
    querySelector: () => get('progress'),
    createElement: () => new Element(),
    addEventListener() {},
  };
  globalThis.window = { scrollTo() {} };
  globalThis.fetch = async (url, options = {}) => {
    const request = new URL(url);
    let data;
    if (options.method === 'POST') data = { name: 'entrada-aluno' };
    else if (request.searchParams.has('startAt')) {
      const higherScore = Number(request.searchParams.get('startAt')) + 99;
      data = Object.fromEntries(
        Array.from({ length: 12 }, (_, index) => [String(index), { score: higherScore }]),
      );
    } else {
      data = { outro: { name: 'Outro', score: 900, hits: 9, total: 10, createdAt: 1 } };
    }
    return { ok: true, json: async () => data };
  };

  try {
    await import('../js/app.js');
    get('start').click();
    for (let index = 0; index < 10; index++) {
      get('answers').children[0].click();
      get('next').click();
    }
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(get('my-rank-place').textContent, '13º lugar');
    assert.equal(get('result').classList.contains('active'), true);
  } finally {
    delete globalThis.document;
    delete globalThis.window;
    delete globalThis.fetch;
  }
});
