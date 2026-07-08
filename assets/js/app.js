const topbar = document.querySelector('.topbar');
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.navlinks');

window.addEventListener('scroll', () => {
  topbar?.classList.toggle('scrolled', window.scrollY > 40);
});

function closeMenu(){
  links?.classList.remove('open');
  document.body.classList.remove('menu-open');
}

function openMenu(){
  links?.classList.add('open');
  document.body.classList.add('menu-open');
}

function toggleMenu(){
  if(links?.classList.contains('open')) closeMenu();
  else openMenu();
}

if(links && !links.querySelector('.mobile-panel-head')){
  const head = document.createElement('div');
  head.className = 'mobile-panel-head';
  head.innerHTML = '<strong>CRENS F4</strong><button class="mobile-close" aria-label="Cerrar menú">×</button>';
  links.prepend(head);

  const contact = document.createElement('div');
  contact.className = 'mobile-panel-contact';
  contact.innerHTML = `
    <a href="tel:+34954861454">📞 954 861 454</a>
    <a href="https://wa.me/34681053238" target="_blank" rel="noopener">💬 WhatsApp · 681 053 238</a>
    <a href="mailto:crensf4@crensf4.com">✉ crensf4@crensf4.com</a>
  `;
  links.append(contact);
}

menu?.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

document.querySelector('.mobile-close')?.addEventListener('click', closeMenu);

document.addEventListener('click', (e) => {
  if(document.body.classList.contains('menu-open') && links && menu){
    if(!links.contains(e.target) && !menu.contains(e.target)){
      closeMenu();
    }
  }
});

document.querySelectorAll('.navlinks a').forEach(a => {
  a.addEventListener('click', closeMenu);
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:.12});

document.querySelectorAll('.reveal,.card,.species-card,.photo').forEach(el => io.observe(el));
