const topbar=document.querySelector('.topbar');
const onScroll=()=>{ if(topbar){ topbar.classList.toggle('scrolled',window.scrollY>40); }};
window.addEventListener('scroll',onScroll);onScroll();

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.14});
document.querySelectorAll('.reveal,.species-card,.media-box,.card,.process,.time,.wide-feature').forEach(el=>io.observe(el));

const menuBtn=document.querySelector('.menu');
const navlinks=document.querySelector('.navlinks');
const piensosItem=document.querySelector('.nav-item');
const piensosLink=piensosItem?.querySelector('a');

function closeMenu(){
  navlinks?.classList.remove('open');
  document.body.classList.remove('menu-open');
  piensosItem?.classList.remove('open');
}

if(menuBtn && navlinks){
  menuBtn.setAttribute('aria-label','Abrir menú');

  menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('open');
    document.body.classList.toggle('menu-open',navlinks.classList.contains('open'));
  });

  piensosLink?.addEventListener('click',(e)=>{
    if(window.innerWidth<=1000){
      e.preventDefault();
      e.stopPropagation();
      piensosItem.classList.toggle('open');
    }
  });

  navlinks.addEventListener('click',(e)=>{
    const link=e.target.closest('a');
    if(!link) return;
    if(window.innerWidth<=1000 && link===piensosLink) return;
    closeMenu();
  });
}
