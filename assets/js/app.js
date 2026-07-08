
const topbar = document.querySelector('.topbar');
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.navlinks');

window.addEventListener('scroll', () => {
  if (topbar) topbar.classList.toggle('scrolled', window.scrollY > 40);
});

let backdrop = document.querySelector('.mobile-backdrop');
if (!backdrop) {
  backdrop = document.createElement('div');
  backdrop.className = 'mobile-backdrop';
  document.body.appendChild(backdrop);
}

function closeMenu(){
  links?.classList.remove('open');
  document.body.classList.remove('menu-open');
  if (menu) {
    menu.textContent = '☰';
    menu.setAttribute('aria-label','Abrir menú');
  }
}

function openMenu(){
  links?.classList.add('open');
  document.body.classList.add('menu-open');
  if (menu) {
    menu.textContent = '×';
    menu.setAttribute('aria-label','Cerrar menú');
  }
}

menu?.addEventListener('click', () => {
  if (links?.classList.contains('open')) closeMenu();
  else openMenu();
});

backdrop?.addEventListener('click', closeMenu);

links?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 980) closeMenu();
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 980) closeMenu();
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal,.card,.species-card,.photo').forEach(el => io.observe(el));
