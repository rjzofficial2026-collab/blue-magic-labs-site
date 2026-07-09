(function () {
  var header = document.querySelector('header.site');
  var toggle = header && header.querySelector('.nav-toggle');
  var nav = header && header.querySelector('nav.main');

  if (!header || !toggle || !nav) return;

  function isOpen() {
    return header.classList.contains('menu-open');
  }

  function openMenu() {
    header.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.classList.add('nav-scroll-lock');
  }

  function closeMenu(returnFocus) {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('nav-scroll-lock');
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', function () {
    if (isOpen()) {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  Array.prototype.forEach.call(nav.querySelectorAll('a'), function (link) {
    link.addEventListener('click', function () {
      closeMenu(false);
    });
  });

  document.addEventListener('click', function (event) {
    if (!isOpen()) return;
    if (header.contains(event.target)) return;
    closeMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      closeMenu(true);
    }
  });
})();
