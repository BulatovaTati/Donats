const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
const navLinks = document.querySelector('.header__list');
const navLinksMenu = document.querySelector('#menu__container');

menuBtnRef.addEventListener('click', onMenuHandleClick);

function onMenuHandleClick() {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
  document.body.classList.toggle('is-menu-shown');

  if (navLinks) {
    navLinks.addEventListener('click', onMenuLinkClick);
  }

  if (navLinksMenu) {
    navLinksMenu.addEventListener('click', onMenuMobilLinckClick);
    function onMenuMobilLinckClick() {
      onMenuHandleClick();
    }
  }
}

function onMenuLinkClick(e) {
  e.preventDefault();

  const attrib = e.target.getAttribute('data-route');
  const gotoBlock = document.getElementById(attrib);

  const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

  window.scrollTo({
    top: gotoBlockValue,
    behavior: 'smooth',
  });
}

// function OnDec() {
//   const navLinksMenu = document.querySelector('#menu__container');

//   if (navLinksMenu) {
//     navLinksMenu.addEventListener('click', onMenuLinkClick);
//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);
//   }
// }
