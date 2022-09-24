// (() => {
//   const menuBtns = document.querySelectorAll('[data-menu-button]');
//   // button <==
//   const navLinks = document.querySelector('[data-menu]');
//   //меню <====
//   const listOfLink = document.querySelector('.header__list');
//   // list <====

//   menuBtns.forEach(el => el.addEventListener('click', onClickMenu));
//   function onClickMenu(e) {
//     document.body.classList.toggle('is-menu-shown');
//     e.currentTarget.classList.toggle('is-open');

//     if (e.target.nodeName === 'BUTTON') {
//       console.log('e.currentTarget: ', e.currentTarget);
//       // в карент button через раз попадає
//       console.log('Target: ', e.target);
//       // в таргет  svg
//       e.target.classList.toggle('is-open');
//       // Якщо написати  e.currentTarget тоді меню не закривається не знімаються класи
//     }
//   }
// })();

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
