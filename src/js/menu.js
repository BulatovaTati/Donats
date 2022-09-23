const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
const navLinks = document.querySelector('.header__list');
const navLinksMenu = document.querySelector('#menu__container');

menuBtnRef.addEventListener('click', onMenuHandleClick);

function onMenuHandleClick() {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);
  document.body.classList.toggle('is-menu-shown');

  if (navLinks) {
    navLinks.addEventListener('click', onMenuLinkClick);
  }
  if (navLinksMenu) {
    navLinksMenu.addEventListener('click', onMenuHandleClick);
  }
}

function onMenuLinkClick(e) {
  e.preventDefault();

  const nodeName =
    e.target && e.target.nodeName && e.target.nodeName.toLowerCase();
  console.log(nodeName);
  if (nodeName !== 'a') {
    menuBtnRef.classList.toggle('is-open');
    document.body.classList.toggle('is-menu-shown');

    return;
  }
  const getAttribute = e.target.getAttribute('data-route');
  const getElemId = document.getElementById(getAttribute);

  const scrollToId = getElemId.getBoundingClientRect().top + scrollY;

  window.scrollTo({
    top: scrollToId,
    behavior: 'smooth',
  });
}
