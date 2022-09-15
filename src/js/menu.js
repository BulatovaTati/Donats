(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('is-menu-shown');
  });
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelectorAll('[data-open-modal__window]'),
//     closeModalBtn: document.querySelector('[data-close-modal__window]'),
//     modal: document.querySelector('[data-modal__window]'),
//   };
//   let isShown = false;

//   refs.openModalBtn.forEach(el => el.addEventListener('click', toggleModal));
//   refs.closeModalBtn.addEventListener('click', toggleModal);
//   refs.modal.addEventListener('click', onBackdropClick);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     document.body.classList.toggle('js-modal-is-hidden');
//     isShown
//       ? document.body.removeEventListener('keydown', onKeyDown)
//       : document.body.addEventListener('keydown', onKeyDown);
//     isShown = !isShown;
//   }

//   function onBackdropClick(event) {
//     if (event.target != event.currentTarget) {
//       return;
//     }
//     toggleModal();
//   }

//   function onKeyDown(event) {
//     event.code === 'Escape' ? toggleModal() : none;
//   }
// })();
