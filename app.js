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

if(location.pathname.endsWith('/logistica.html') || location.pathname.endsWith('logistica.html')){
  // PORTADA: red de carreteras / conectividad, para comunicar coordinación logística
  // sin sugerir que Crens F4 tenga flota propia.
  const heroTitle=[...document.querySelectorAll('h1')].find(el=>el.textContent.includes('Logística coordinada'));
  const hero=heroTitle?.closest('section') || document.querySelector('.page-hero,.hero');
  const heroImg=hero?.querySelector('img');
  const heroText=[...hero?.querySelectorAll('p')||[]].find(el=>el.textContent.trim().length>20);

  if(heroImg){
    heroImg.src='https://imagenes.cope.es/files/og_thumbnail/uploads/2024/07/22/669e51a99c0e0.jpeg';
    heroImg.alt='Red de carreteras y transporte junto a una zona industrial';
    heroImg.style.objectPosition='center 48%';
  }
  if(heroTitle) heroTitle.textContent='Logística coordinada, entregas eficientes.';
  if(heroText) heroText.textContent='Coordinamos cada expedición con empresas transportistas para adaptar las entregas a las necesidades de nuestros clientes.';

  // BLOQUE DISTRIBUCIÓN: entrega de pienso a granel en silos de explotación.
  const featureEyebrow=[...document.querySelectorAll('.eyebrow,span,p')].find(el=>el.textContent.trim().toUpperCase().includes('DISTRIBUCIÓN COORDINADA'));
  const feature=featureEyebrow?.closest('.wide-feature') || featureEyebrow?.closest('section') || document.querySelector('.section-red .wide-feature');
  const featurePhoto=feature?.querySelector('.photo');
  const featureTitle=feature?.querySelector('h2');
  const featureCopy=[...feature?.querySelectorAll('p')||[]].find(el=>el.textContent.includes('Coordinamos'));

  if(featurePhoto){
    featurePhoto.style.backgroundImage="url('https://img.feedstrategy.com/files/base/wattglobalmedia/all/image/2019/08/fs.Walinga-remote-control.png?auto=format%2Ccompress&h=900&q=85&w=1600')";
    featurePhoto.style.backgroundPosition='center';
    featurePhoto.style.backgroundSize='cover';
  }
  if(featureTitle) featureTitle.textContent='Del pedido a la explotación.';
  if(featureCopy) featureCopy.textContent='Coordinamos las cargas y expediciones con empresas transportistas para adaptar cada entrega a las necesidades del cliente y de la explotación.';

  // Eliminar cualquier etiqueta provisional que quede en la página.
  [...document.querySelectorAll('body *')].forEach(el=>{
    if(el.children.length===0 && el.textContent.trim().toUpperCase()==='FOTO PROVISIONAL') el.remove();
  });
}
