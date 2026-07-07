
const topbar=document.querySelector('.topbar');
const onScroll=()=>{ if(topbar){ topbar.classList.toggle('scrolled',window.scrollY>40); }};
window.addEventListener('scroll',onScroll);onScroll();
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.14});
document.querySelectorAll('.reveal,.species-card,.media-box,.card,.process,.time,.wide-feature').forEach(el=>io.observe(el));
