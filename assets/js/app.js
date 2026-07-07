const topbar=document.querySelector('.topbar');
const menu=document.querySelector('.menu-toggle');
const links=document.querySelector('.navlinks');
window.addEventListener('scroll',()=>{topbar?.classList.toggle('scrolled',window.scrollY>40)});
menu?.addEventListener('click',()=>{
  const open=links?.classList.toggle('open');
  menu.classList.toggle('active',!!open);
  menu.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.classList.toggle('menu-open',!!open);
});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  links.classList.remove('open');
  menu?.classList.remove('active');
  menu?.setAttribute('aria-expanded','false');
  document.body.classList.remove('menu-open');
}));
window.addEventListener('keydown',(e)=>{
  if(e.key==='Escape'){
    links?.classList.remove('open');
    menu?.classList.remove('active');
    menu?.setAttribute('aria-expanded','false');
    document.body.classList.remove('menu-open');
  }
});
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal,.card,.species-card,.photo').forEach(el=>io.observe(el));
