const assert = require('node:assert/strict');
const test = require('node:test');

class Element extends EventTarget {
  constructor() {
    super();
    this.attributes = new Map();
    this.classList = {
      active: false,
      toggle: () => (this.classList.active = !this.classList.active),
      remove: () => (this.classList.active = false),
    };
  }

  setAttribute(name, value) {
    this.attributes.set(name, value);
  }

  getAttribute(name) {
    return this.attributes.get(name);
  }
}

test('the mobile navigation opens and closes accessibly', () => {
  const button = new Element();
  const menu = new Element();
  const link = new Element();
  const document = new EventTarget();
  document.querySelector = (selector) => selector === '.nav-burger' ? button : menu;
  document.querySelectorAll = () => [link];
  global.document = document;

  require('../mobile-nav.js');
  button.dispatchEvent(new Event('click'));

  assert.equal(menu.classList.active, true);
  assert.equal(button.getAttribute('aria-expanded'), 'true');

  link.dispatchEvent(new Event('click'));
  assert.equal(menu.classList.active, false);
  assert.equal(button.getAttribute('aria-expanded'), 'false');

  button.dispatchEvent(new Event('click'));
  const escape = new Event('keydown');
  Object.defineProperty(escape, 'key', { value: 'Escape' });
  document.dispatchEvent(escape);
  assert.equal(menu.classList.active, false);

  delete global.document;
});
