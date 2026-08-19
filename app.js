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

// Ajustes específicos de la página de Logística.
// Crens F4 coordina las expediciones con empresas transportistas colaboradoras;
// estos textos e imágenes evitan dar a entender que existe una flota propia.
if(location.pathname.endsWith('/logistica.html') || location.pathname.endsWith('logistica.html')){
  const hero=document.querySelector('.page-hero');
  const heroImg=hero?.querySelector(':scope > img');
  const heroTitle=hero?.querySelector('h1');
  const heroCopy=hero?.querySelector('.hero-copy');

  if(heroImg){
    heroImg.src='https://img.feedstrategy.com/files/base/wattglobalmedia/all/image/2019/08/fs.Walinga-remote-control.png?auto=format%2Ccompress&h=900&q=85&w=1800';
    heroImg.alt='Camión de pienso a granel realizando una entrega en silos de una explotación ganadera';
    heroImg.onerror=null;
  }
  if(heroTitle) heroTitle.textContent='Logística coordinada, entregas eficientes.';
  if(heroCopy) heroCopy.textContent='Coordinamos cada expedición con empresas transportistas para adaptar las entregas a las necesidades de nuestros clientes.';

  const feature=document.querySelector('.section-red .wide-feature');
  const featurePhoto=feature?.querySelector('.photo');
  const featureEyebrow=feature?.querySelector('.eyebrow');
  const featureTitle=feature?.querySelector('h2');
  const featureCopy=feature?.querySelector('.lead');

  if(featurePhoto){
    featurePhoto.style.backgroundImage="url('https://storageatlasengagepdcus.blob.core.windows.net/atlas/all-media/alliedcoopadams/feed/features/feed-services.jpg')";
  }
  if(featureEyebrow) featureEyebrow.textContent='Distribución coordinada';
  if(featureTitle) featureTitle.textContent='Del pedido a la explotación.';
  if(featureCopy) featureCopy.textContent='Coordinamos las cargas y expediciones con empresas transportistas para adaptar cada entrega a las necesidades del cliente y de la explotación.';
}
