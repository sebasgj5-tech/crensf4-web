
const bar=document.getElementById('topbar');
const onScroll=()=>bar&&bar.classList.toggle('solid',window.scrollY>40);
window.addEventListener('scroll',onScroll);onScroll();
const modal=document.getElementById('videoModal');
const frame=document.getElementById('videoFrame');
function openVideo(){ if(!modal||!frame)return; frame.innerHTML='<iframe src="https://www.youtube.com/embed/LBx_27n2cQU?autoplay=1&rel=0" title="Crens F4 · Vídeo corporativo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; modal.classList.add('open'); document.body.style.overflow='hidden'; }
function closeVideo(){ if(!modal||!frame)return; modal.classList.remove('open'); frame.innerHTML=''; document.body.style.overflow=''; }
document.querySelectorAll('[data-video-open]').forEach(btn=>btn.addEventListener('click',openVideo));
document.querySelectorAll('[data-video-close]').forEach(btn=>btn.addEventListener('click',closeVideo));
if(modal) modal.addEventListener('click',e=>{ if(e.target===modal) closeVideo(); });
window.addEventListener('keydown',e=>{ if(e.key==='Escape') closeVideo(); });
(function(){
  const items=[...document.querySelectorAll('.page-card,.species-block,.step,.detail-list article,.placeholder-photo,.video-feature,.timeline .time')];
  items.forEach((el,i)=>{el.classList.add('reveal-on-scroll','reveal-delay-'+((i%4)+1));});
  if(!('IntersectionObserver' in window)){items.forEach(el=>el.classList.add('visible'));return;}
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  items.forEach(el=>io.observe(el));
})();
