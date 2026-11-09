
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
let previouslyFocusedElement = null;

document.querySelectorAll('.reason, .date-ticket').forEach((card) => {
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
});

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  hearts(12);
}

function showNote(message) {
  previouslyFocusedElement = document.activeElement;
  modalText.textContent = message;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  modal.querySelector('.close').focus();
}

function closeModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  previouslyFocusedElement?.focus();
}

function closeOutside(event) {
  if (event.target === modal) closeModal();
}

function toggleLetter() {
  const letter = document.getElementById('bigLetter');
  letter.classList.toggle('show');

  if (letter.classList.contains('show')) {
    letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
    hearts(15);
  }
}

function celebrate() {
  document.getElementById('cake').textContent = '🎂✨';
  document.getElementById('cakeMessage').textContent = 'May all your beautiful wishes come true, Shiva! ♡';
  hearts(40);
}

function finalSurprise() {
  document.getElementById('finalMessage').innerHTML = 'I love you so much! ♡<br>Happy Birthday, Shiva! 🎀';
  hearts(45);
}

function hearts(count) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.setAttribute('aria-hidden', 'true');
    heart.textContent = ['♡', '💗', '✧', '🌸'][Math.floor(Math.random() * 4)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${15 + Math.random() * 20}px`;
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;
    document.body.appendChild(heart);
    window.setTimeout(() => heart.remove(), 6500);
  }
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('show')) closeModal();

  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.reason, .date-ticket')) {
    event.preventDefault();
    event.target.click();
  }
});
