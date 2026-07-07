const topbar = document.querySelector('.topbar');
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.navlinks');

function updateTopbar(){
  if(topbar) topbar.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateTopbar);
updateTopbar();

// Menú lateral móvil real
if(menu && links){
  let backdrop = document.querySelector('.mobile-menu-backdrop');
  if(!backdrop){
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-menu-backdrop';
    document.body.appendChild(backdrop);
  }
  let closeBtn = document.querySelector('.mobile-menu-close');
  if(!closeBtn){
    closeBtn = document.createElement('button');
    closeBtn.className = 'mobile-menu-close';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label','Cerrar menú');
    closeBtn.textContent = '×';
    document.body.appendChild(closeBtn);
  }
  menu.setAttribute('aria-label','Abrir menú');
  menu.setAttribute('aria-expanded','false');

  const openMenu = () => {
    links.classList.add('open');
    backdrop.classList.add('open');
    closeBtn.classList.add('open');
    document.body.classList.add('menu-open');
    menu.setAttribute('aria-expanded','true');
  };
  const closeMenu = () => {
    links.classList.remove('open');
    backdrop.classList.remove('open');
    closeBtn.classList.remove('open');
    document.body.classList.remove('menu-open');
    menu.setAttribute('aria-expanded','false');
  };
  const toggleMenu = () => links.classList.contains('open') ? closeMenu() : openMenu();
  menu.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
}

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal,.card,.species-card,.photo').forEach(el=>io.observe(el));
