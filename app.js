
const topbar=document.querySelector('.topbar');
const menu=document.querySelector('.menu-toggle');
const links=document.querySelector('.navlinks');
function closeMenu(){
  links?.classList.remove('open');
  document.body.classList.remove('menu-open');
  if(menu) menu.textContent='☰';
}
function openMenu(){
  links?.classList.add('open');
  document.body.classList.add('menu-open');
  if(menu) menu.textContent='×';
}
window.addEventListener('scroll',()=>{topbar?.classList.toggle('scrolled',window.scrollY>40)});
menu?.addEventListener('click',(e)=>{
  e.stopPropagation();
  links?.classList.contains('open') ? closeMenu() : openMenu();
});
document.addEventListener('click',(e)=>{
  if(!document.body.classList.contains('menu-open')) return;
  if(!links?.contains(e.target) && !menu?.contains(e.target)) closeMenu();
});
document.addEventListener('keydown',(e)=>{if(e.key==='Escape') closeMenu();});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal,.card,.species-card,.photo').forEach(el=>io.observe(el));
