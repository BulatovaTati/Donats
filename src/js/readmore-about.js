const showButton = document.querySelector('.about-us__button');
const hiddenText = document.querySelector('.about-us__text--visible');

showButton.addEventListener('click', () => {
  if (hiddenText.classList.contains('is-open')) {
    showButton.textContent = 'Read more';
  } else {
    showButton.textContent = 'Less';
  }

  hiddenText.classList.toggle('is-open');
});
