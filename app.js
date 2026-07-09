const topbar = document.querySelector('.topbar');

const onScroll = () => {
  if (topbar) topbar.classList.toggle('scrolled', window.scrollY > 40);
};

window.addEventListener('scroll', onScroll);
onScroll();

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document
  .querySelectorAll('.reveal,.species-card,.media-box,.card,.process,.time,.wide-feature')
  .forEach((el) => io.observe(el));

// Menú móvil final
const menuBtn = document.querySelector('.menu');
const navlinks = document.querySelector('.navlinks');
const piensosItem = Array.from(document.querySelectorAll('.navlinks .nav-item'))
  .find((item) => item.querySelector('.dropdown'));
const piensosLink = piensosItem?.querySelector(':scope > a');

function closeMenu() {
  navlinks?.classList.remove('open');
  document.body.classList.remove('menu-open');
  piensosItem?.classList.remove('open');
}

if (menuBtn && navlinks) {
  menuBtn.setAttribute('aria-label', 'Abrir menú');
  menuBtn.setAttribute('type', 'button');

  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = navlinks.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    if (!isOpen) piensosItem?.classList.remove('open');
  });

  if (piensosLink && piensosItem) {
    piensosLink.addEventListener('click', (event) => {
      if (window.innerWidth <= 1000) {
        event.preventDefault();
        event.stopPropagation();
        piensosItem.classList.toggle('open');
      }
    });
  }

  navlinks.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;

    // En móvil, el enlace principal "Piensos" no navega: solo despliega.
    if (window.innerWidth <= 1000 && link === piensosLink) return;

    closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!document.body.classList.contains('menu-open')) return;
    if (navlinks.contains(event.target) || menuBtn.contains(event.target)) return;
    closeMenu();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}
