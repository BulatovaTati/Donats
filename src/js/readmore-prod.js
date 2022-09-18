const showButton = document.querySelector('.program__button');
const hiddenText = document.querySelector('.program__text--visible');

showButton.addEventListener('click', () => {
  if (hiddenText.classList.contains('is-open')) {
    showButton.textContent = 'Read more';
  } else {
    showButton.textContent = 'Less';
  }

  hiddenText.classList.toggle('is-open');
});
