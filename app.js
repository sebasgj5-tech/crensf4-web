
const topbar=document.querySelector('.topbar');
const onScroll=()=>{ if(topbar){ topbar.classList.toggle('scrolled',window.scrollY>40); }};
window.addEventListener('scroll',onScroll);onScroll();
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.14});
document.querySelectorAll('.reveal,.species-card,.media-box,.card,.process,.time,.wide-feature').forEach(el=>io.observe(el));


// Menú móvil
const menuBtn=document.querySelector('.menu');
const navlinks=document.querySelector('.navlinks');
if(menuBtn && navlinks){
  menuBtn.setAttribute('aria-label','Abrir menú');
  menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('open');
    document.body.classList.toggle('menu-open', navlinks.classList.contains('open'));
  });
  navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    navlinks.classList.remove('open');
    document.body.classList.remove('menu-open');
  }));
}
