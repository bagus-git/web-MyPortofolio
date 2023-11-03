function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

function scrollToContact() {
  const contactElement = document.querySelector('#contact');
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: 'smooth' });
  }
}
