(() => {
  const menuBtns = document.querySelectorAll('[data-menu-button]');
  // button <==
  const navLinks = document.querySelector('[data-menu]');
  //меню <====
  const listOfLink = document.querySelector('.header__list');
  // list <====

  menuBtns.forEach(el => el.addEventListener('click', onClickMenu));
  function onClickMenu(e) {
    document.body.classList.toggle('is-menu-shown');

    if (e.target.nodeName === 'BUTTON') {
      console.log('e.currentTarget: ', e.currentTarget);
      // в карент button через раз попадає
      console.log('Target: ', e.target);
      // в таргет  svg
      e.target.classList.toggle('is-open');
      // Якщо написати  e.currentTarget тоді меню не закривається не знімаються класи
    }
  }
})();
