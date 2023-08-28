const button = document.querySelector('#open-btn');

button.addEventListener('click', () => {
  const content = document.querySelector('.note__content');
  if (content.dataset.open === 'true') {
    content.dataset.open = 'false';
    content.style.maxHeight = '';
    content.style.paddingTop = '0';
    button.textContent = 'Open';
  } else {
    content.dataset.open = 'true';
    content.style.maxHeight = `${content.scrollHeight + 10}px`;
    content.style.paddingTop = '10px';
    button.textContent = 'Close';
  }
});
