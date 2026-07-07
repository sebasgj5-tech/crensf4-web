const topbar=document.querySelector('.topbar');
const menu=document.querySelector('.menu-toggle');
const links=document.querySelector('.navlinks');
const closeMenu=()=>{
  if(!menu||!links) return;
  links.classList.remove('open');
  document.body.classList.remove('menu-open');
  menu.setAttribute('aria-expanded','false');
  menu.textContent='☰';
};
const openMenu=()=>{
  if(!menu||!links) return;
  links.classList.add('open');
  document.body.classList.add('menu-open');
  menu.setAttribute('aria-expanded','true');
  menu.textContent='×';
};
window.addEventListener('scroll',()=>{ if(topbar){ topbar.classList.toggle('scrolled',window.scrollY>40); }});
if(menu&&links){
  menu.setAttribute('aria-label','Abrir menú');
  menu.setAttribute('aria-expanded','false');
  menu.addEventListener('click',(ev)=>{ev.stopPropagation(); links.classList.contains('open') ? closeMenu() : openMenu();});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
  document.addEventListener('click',(ev)=>{ if(links.classList.contains('open') && !links.contains(ev.target) && ev.target!==menu){ closeMenu(); }});
  document.addEventListener('keydown',(ev)=>{ if(ev.key==='Escape') closeMenu(); });
}
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal,.card,.species-card,.photo').forEach(el=>io.observe(el));
