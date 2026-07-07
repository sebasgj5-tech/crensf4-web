
const header=document.querySelector('.topbar');
const onScroll=()=>{if(header) header.classList.toggle('scrolled', window.scrollY>40)};window.addEventListener('scroll',onScroll);onScroll();
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal,.card,.species-card,.process,.media-box,.time,.wide-feature').forEach(el=>io.observe(el));
