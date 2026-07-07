
const header=document.querySelector('.topbar');
window.addEventListener('scroll',()=>{ if(window.scrollY>20) header?.classList.add('solid'); else header?.classList.remove('solid'); });
document.querySelector('.menu')?.addEventListener('click',()=>{document.querySelector('.navlinks')?.classList.toggle('open');document.body.classList.toggle('menu-open')});
const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal,.species-card,.media-card,.visual-band,.card,.process div,.time').forEach(el=>obs.observe(el));
document.querySelectorAll('[data-video-open]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.video-modal')?.classList.add('open');document.querySelector('.video-frame').innerHTML='<iframe src="https://www.youtube.com/embed/LBx_27n2cQU?autoplay=1" title="Crens F4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';}));
document.querySelectorAll('[data-video-close],.video-modal').forEach(el=>el.addEventListener('click',(e)=>{if(e.target===el||e.target.hasAttribute('data-video-close')){document.querySelector('.video-modal')?.classList.remove('open');document.querySelector('.video-frame').innerHTML='';}}));
