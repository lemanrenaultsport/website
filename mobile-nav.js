(function () {
  var button = document.querySelector('.nav-burger');
  var menu = document.querySelector('.nav-links');

  if (!button || !menu) return;

  function closeMenu() {
    menu.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  }

  button.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });
})();
