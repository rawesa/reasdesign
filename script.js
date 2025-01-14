const toggle = document.getElementById('dark-mode-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

/* Gece Modu Stili */
document.body.classList.add('dark-mode');
