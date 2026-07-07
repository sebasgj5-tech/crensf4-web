
const topbar=document.querySelector('.topbar');
const onScroll=()=>{ if(topbar){ topbar.classList.toggle('scrolled',window.scrollY>40); }};
window.addEventListener('scroll',onScroll);onScroll();

const menuBtn=document.querySelector('.menu');
const navlinks=document.querySelector('.navlinks');
if(menuBtn && navlinks){
  menuBtn.addEventListener('click',()=>{
    const open=navlinks.classList.toggle('open');
    document.body.classList.toggle('menu-open',open);
    menuBtn.textContent=open?'×':'☰';
    menuBtn.setAttribute('aria-expanded',open?'true':'false');
  });
  navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    navlinks.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuBtn.textContent='☰';
    menuBtn.setAttribute('aria-expanded','false');
  }));
}

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal,.species-card,.media-box,.card,.process,.time,.wide-feature,.asset-card,.checkitem').forEach(el=>io.observe(el));

function fallbackFor(src, alt){
  const txt=((src||'')+' '+(alt||'')).toLowerCase();
  if(txt.includes('truck')||txt.includes('camion')||txt.includes('log')) return 'assets/fallback-truck.svg';
  if(txt.includes('lab')||txt.includes('calidad')||txt.includes('analysis')) return 'assets/fallback-lab.svg';
  if(txt.includes('feed')||txt.includes('pienso')||txt.includes('pellet')) return 'assets/fallback-feed.svg';
  if(txt.includes('factory')||txt.includes('fabrica')||txt.includes('silo')||txt.includes('industrial')) return 'assets/fallback-factory.svg';
  if(txt.includes('chicken')||txt.includes('pig')||txt.includes('cow')||txt.includes('sheep')||txt.includes('goat')||txt.includes('horse')) return 'assets/fallback-animal.svg';
  return 'assets/fallback-default.svg';
}
document.querySelectorAll('img').forEach(img=>{
  img.loading = img.loading || 'lazy';
  img.decoding = 'async';
  img.addEventListener('error',()=>{
    if(img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied='1';
    img.src=fallbackFor(img.getAttribute('src'), img.getAttribute('alt'));
  });
});
