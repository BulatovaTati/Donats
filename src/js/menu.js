(() => {
  const menuBtns = document.querySelectorAll('[data-menu-button]');
  const menuBtn = document.querySelector('[data-menu-button]');
  // button <==
  const menu = document.querySelector('[data-menu]');
  menuBtns.forEach(el => el.addEventListener('click', toggleMenu));

  function toggleMenu() {
    document.body.classList.toggle('is-menu-shown');
    this.classList.toggle('is-open');
    menu.classList.toggle('is-close');
  }

  menu.addEventListener('click', e => {
    if (e.target.nodeName !== 'A') return;
    if (e.target.nodeName === 'A') {
      document.body.classList.remove('is-menu-shown');
      menuBtn.classList.remove('is-open');
      menu.classList.add('is-close');
    }
  });
})();
