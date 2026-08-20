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
    if(window.innerWidth<=1000){e.preventDefault();e.stopPropagation();piensosItem.classList.toggle('open');}
  });
  navlinks.addEventListener('click',(e)=>{
    const link=e.target.closest('a');
    if(!link) return;
    if(window.innerWidth<=1000 && link===piensosLink) return;
    closeMenu();
  });
}

if(location.pathname.endsWith('/logistica.html') || location.pathname.endsWith('logistica.html')){
  const heroTitle=[...document.querySelectorAll('h1')].find(el=>el.textContent.includes('Logística coordinada'));
  const hero=heroTitle?.closest('section') || document.querySelector('.page-hero,.hero');
  const heroImg=hero?.querySelector('img');
  const heroText=[...hero?.querySelectorAll('p')||[]].find(el=>el.textContent.trim().length>20);
  if(heroImg){heroImg.src='https://imagenes.cope.es/files/og_thumbnail/uploads/2024/07/22/669e51a99c0e0.jpeg';heroImg.alt='Red de carreteras y transporte junto a una zona industrial';heroImg.style.objectPosition='center 48%';}
  if(heroTitle) heroTitle.textContent='Logística coordinada, entregas eficientes.';
  if(heroText) heroText.textContent='Coordinamos cada expedición con empresas transportistas para adaptar las entregas a las necesidades de nuestros clientes.';
  const featureEyebrow=[...document.querySelectorAll('.eyebrow,span,p')].find(el=>el.textContent.trim().toUpperCase().includes('DISTRIBUCIÓN COORDINADA'));
  const feature=featureEyebrow?.closest('.wide-feature') || featureEyebrow?.closest('section') || document.querySelector('.section-red .wide-feature');
  const featurePhoto=feature?.querySelector('.photo');
  const featureTitle=feature?.querySelector('h2');
  const featureCopy=[...feature?.querySelectorAll('p')||[]].find(el=>el.textContent.includes('Coordinamos'));
  if(featurePhoto){featurePhoto.style.backgroundImage="url('https://img.feedstrategy.com/files/base/wattglobalmedia/all/image/2019/08/fs.Walinga-remote-control.png?auto=format%2Ccompress&h=900&q=85&w=1600')";featurePhoto.style.backgroundPosition='center';featurePhoto.style.backgroundSize='cover';}
  if(featureTitle) featureTitle.textContent='Del pedido a la explotación.';
  if(featureCopy) featureCopy.textContent='Cada expedición se planifica desde fábrica para garantizar una entrega eficiente, coordinada y adaptada al ritmo de cada explotación.';
  [...document.querySelectorAll('body *')].forEach(el=>{if(el.children.length===0 && el.textContent.trim().toUpperCase()==='FOTO PROVISIONAL') el.remove();});
}

if(location.pathname.endsWith('/fabrica.html') || location.pathname.endsWith('fabrica.html')){
  // Limpiar cualquier rastro de maqueta/provisional.
  [...document.querySelectorAll('body *')].forEach(el=>{
    const t=el.textContent.trim().toUpperCase();
    if(el.children.length===0 && (t==='FOTO PROVISIONAL' || t==='VÍDEO PROVISIONAL' || t==='VIDEO PROVISIONAL')) el.remove();
  });

  // Presentación del recorrido.
  const recorrido=[...document.querySelectorAll('.eyebrow,span,p')].find(el=>el.textContent.trim().toUpperCase()==='RECORRIDO');
  const intro=recorrido?.closest('section') || recorrido?.parentElement?.parentElement;
  const introTitle=[...intro?.querySelectorAll('h2,h1')||[]].find(el=>el.textContent.includes('Una visita visual'));
  if(introTitle) introTitle.textContent='Conoce nuestra fábrica por dentro.';
  [...intro?.querySelectorAll('p')||[]].forEach(p=>{
    if(p.textContent.includes('Cada bloque queda listo')) p.textContent='Un recorrido por las áreas clave donde recibimos materias primas, fabricamos, controlamos y preparamos cada expedición.';
  });

  // Textos más profesionales para las seis áreas.
  const copy={
    'Vista aérea':'Instalaciones y zonas exteriores de Crens F4.',
    'Silos':'Recepción y almacenamiento de materias primas.',
    'Producción':'Molienda, dosificación, mezcla y granulación.',
    'Laboratorio':'Control de materias primas y producto terminado.',
    'Ensacado':'Preparación y acondicionamiento de producto ensacado.',
    'Expedición':'Carga y salida de pedidos desde fábrica.'
  };
  document.querySelectorAll('h2,h3').forEach(h=>{
    const key=Object.keys(copy).find(k=>h.textContent.trim()===k);
    if(!key) return;
    const card=h.closest('.media-box,.card,article,div');
    if(!card) return;
    const p=[...card.querySelectorAll('p')].find(x=>x.textContent.trim());
    if(p) p.textContent=copy[key];
  });

  // CTA final específico de la página de fábrica.
  const ctaTitle=[...document.querySelectorAll('h2,h3')].find(el=>el.textContent.includes('¿Necesitas asesoramiento'));
  if(ctaTitle){
    ctaTitle.textContent='¿Quieres hablar con nuestro equipo?';
    const cta=ctaTitle.closest('section,div');
    const p=[...cta?.querySelectorAll('p')||[]].find(el=>el.textContent.includes('Contacta con Crens F4'));
    if(p) p.textContent='Estamos a tu disposición para consultas sobre fabricación, gamas de pienso, formatos y expediciones.';
  }
}
