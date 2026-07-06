
const topbar=document.getElementById('topbar');
window.addEventListener('scroll',()=>{ if(window.scrollY>40){topbar?.classList.add('solid')}else{topbar?.classList.remove('solid')}});
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal,.feed-card,.video-slot').forEach(el=>obs.observe(el));
const modal=document.getElementById('videoModal'); const frame=document.getElementById('videoFrame');
document.querySelectorAll('[data-video]').forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.video; frame.innerHTML=`<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`; modal.classList.add('open')}));
document.querySelectorAll('[data-video-close]').forEach(btn=>btn.addEventListener('click',()=>{modal.classList.remove('open'); frame.innerHTML=''}));
modal?.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open'); frame.innerHTML=''}});
