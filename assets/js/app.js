
const topbar=document.querySelector('.topbar'); const menu=document.querySelector('.menu-toggle'); const links=document.querySelector('.navlinks');
window.addEventListener('scroll',()=>{topbar.classList.toggle('scrolled',window.scrollY>40)});
menu?.addEventListener('click',()=>links.classList.toggle('open'));
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal,.card,.species-card,.photo').forEach(el=>io.observe(el));
