const products = [
  {id:'rodillo-bomag',name:'Rodillo compactador',brand:'Bomag',category:'compactacion',use:'Bases y superficies',description:'Para compactar superficies más extensas de suelo o base granular en trabajos de obra civil.',source:'https://www.instagram.com/seringco/p/DZ_Oza7ADf8/',image:'./assets/rodillo-bomag.webp',alt:'Rodillo compactador Bomag amarillo de doble tambor'},
  {id:'vibropison-bt80',name:'Vibropisón BT80',brand:'Bomag',category:'compactacion',use:'Zanjas y espacios estrechos',description:'Apisonador vibratorio útil donde un equipo de mayor tamaño no puede maniobrar.',source:'https://www.instagram.com/seringco/p/DZ_O47mAbgU/',image:'./assets/vibropison-bomag-bt80.webp',alt:'Vibropisón Bomag BT80 amarillo completo'},
  {id:'plancha',name:'Placa compactadora HZR 90',brand:'Modelo HZR 90 · marca por confirmar',category:'compactacion',use:'Veredas y rellenos',description:'Alternativa para compactación de superficies acotadas y preparación de bases.',source:'https://www.instagram.com/seringco/p/DWgt-XKACrd/',image:'./assets/placa-hzr90.webp',alt:'Placa compactadora amarilla HZR 90 con manillar y motor'},
  {id:'generador-inmesol',name:'Generadores Inmesol',brand:'Inmesol · potencia según modelo',category:'energia',use:'Energía de obra',description:'Soluciones de generación para faenas y equipos eléctricos. La potencia se define según tu carga.',source:'https://www.instagram.com/seringco/p/DVwf__vjgVY/',image:'./assets/generadores-inmesol.webp',alt:'Grupo de cuatro generadores Inmesol de distintos tamaños'},
  {id:'generador-portatil',name:'Generador portátil',brand:'Emaresa · Genpack-D',category:'energia',use:'Trabajo temporal',description:'Para llevar suministro eléctrico a herramientas y puntos de trabajo sin red disponible.',source:'https://www.instagram.com/seringco/p/DWgt4c_gAGO/',image:'./assets/generador-emaresa.webp',alt:'Generador portátil Emaresa Genpack-D con estructura amarilla'},
  {id:'tableros',name:'Tableros eléctricos',brand:'Equipos para faena y minería',category:'energia',use:'Distribución eléctrica',description:'Distribución y conexión de energía para instalaciones temporales de obra.',source:'https://www.instagram.com/seringco/p/DWB_61EgJyn/',image:'./assets/tableros-electricos.webp',alt:'Tableros eléctricos portátiles con gabinetes y marcos amarillos'},
  {id:'torre-led',name:'Torre de iluminación LED',brand:'Generac · Wacker Neuson en publicación',category:'iluminacion',use:'Faenas nocturnas',description:'Iluminación móvil para frentes de trabajo, accesos y jornadas extendidas.',source:'https://www.instagram.com/seringco/p/DVwhAiVDjL3/',image:'./assets/torre-generac.webp',alt:'Torre de iluminación LED Generac amarilla con cuatro focos'},
  {id:'andamios',name:'Andamios estándar',brand:'Seger · sistema modular',category:'altura',use:'Acceso en altura',description:'Estructuras de acceso para construcción, mantención y trabajos en fachada.',source:'https://www.instagram.com/seringco/p/DVwZlcQDgEa/',image:'./assets/andamio-seger.webp',alt:'Andamio modular Seger completo con plataformas y diagonales'},
  {id:'ruedas-andamio',name:'Ruedas para andamios',brand:'Accesorios de andamio',category:'altura',use:'Movilidad del sistema',description:'Complementos para configurar andamios móviles según las condiciones de trabajo.',source:'https://www.instagram.com/seringco/p/DVwZezijtWG/',image:'./assets/ruedas-andamio.webp',alt:'Tres ruedas industriales para andamio con vástagos metálicos'},
  {id:'alzaprimas',name:'Alzaprimas certificadas',brand:'Apoyo temporal',category:'altura',use:'Apoyo temporal',description:'Puntales ajustables para soporte temporal en losas y elementos de construcción.',source:'https://www.instagram.com/seringco/p/DVwZaxyjshd/',image:'./assets/alzaprimas.webp',alt:'Tres alzaprimas metálicas ajustables completas'},
  {id:'betonera',name:'Betonera',brand:'Lemaco · consultar capacidad',category:'herramientas',use:'Mezcla de hormigón',description:'Para preparar mezclas en trabajos de albañilería y hormigón a escala de obra.',source:'https://www.instagram.com/seringco/p/DVwcHm4judW/',image:'./assets/betonera-lemaco.webp',alt:'Betonera Lemaco amarilla con tambor y ruedas'},
  {id:'rotomartillo',name:'Rotomartillo',brand:'Hilti · consultar modelo',category:'herramientas',use:'Perforación',description:'Herramienta para perforar superficies de hormigón y mampostería.',source:'https://www.instagram.com/seringco/p/DVtF8ZFAKE_/',image:'./assets/rotomartillo-hilti.webp',alt:'Rotomartillo Hilti rojo con empuñadura lateral'},
  {id:'demoledor',name:'Martillo demoledor',brand:'Hilti · consultar modelo',category:'herramientas',use:'Demolición puntual',description:'Equipo de percusión para retirar pavimentos y elementos de hormigón.',source:'https://www.instagram.com/seringco/p/DVtDGaKgH-4/',image:'./assets/demoledor-hilti.webp',alt:'Martillo demoledor Hilti rojo con cincel largo'},
  {id:'cortadora',name:'Cortadora de concreto',brand:'Makita · consultar modelo',category:'herramientas',use:'Cortes en obra',description:'Cortes controlados en materiales de construcción según disco y aplicación.',source:'https://www.instagram.com/seringco/p/DVtDGaKgH-4/',image:'./assets/cortadora-makita.webp',alt:'Cortadora de concreto Makita azul con disco circular'},
  {id:'miniexcavadora',name:'Miniexcavadora',brand:'Wacker Neuson · consultar modelo',category:'herramientas',use:'Movimiento de tierra',description:'Movimiento y excavación en frentes de obra donde importa la maniobrabilidad.',source:'https://www.instagram.com/seringco/p/DVtFvJeAKFa/',image:'./assets/miniexcavadora-wacker.webp',alt:'Miniexcavadora Wacker Neuson amarilla con cabina y orugas'},
];

const categories = {
  compactacion:{label:'Compactación'},
  energia:{label:'Energía'},
  iluminacion:{label:'Iluminación'},
  altura:{label:'Altura y soporte'},
  herramientas:{label:'Herramientas'}
};

const grid = document.getElementById('equipment-grid');
const resultCount = document.getElementById('result-count');
const countEls = document.querySelectorAll('[data-count]');
const selectedList = document.getElementById('selected-list');
const drawer = document.getElementById('quote-drawer');
const drawerBackdrop = document.getElementById('drawer-backdrop');
const instaModal = document.getElementById('insta-modal');
const instaBackdrop = document.getElementById('insta-backdrop');
const sendWhatsapp = document.getElementById('send-whatsapp');
let currentFilter = 'todos';
let selected = [];
let lastFocus = null;

try { const saved = JSON.parse(localStorage.getItem('seringco-quote') || '[]'); selected = Array.isArray(saved) ? saved.filter(id => products.some(p => p.id === id)) : []; } catch { selected = []; }

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, {threshold:0.08,rootMargin:'0px 0px -18px 0px'}) : null;
function observeReveals(root=document){root.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver ? revealObserver.observe(el) : el.classList.add('visible'));}

function renderProducts(){
  const visible = currentFilter === 'todos' ? products : products.filter(p => p.category === currentFilter);
  grid.innerHTML = visible.map(p => { const c=categories[p.category]; const isSelected=selected.includes(p.id); return `<article class="equipment-card reveal"><div class="equipment-image"><img src="${p.image}" alt="${p.alt}" loading="lazy" width="1200" height="1200"><span class="equipment-label">${c.label}</span></div><div class="equipment-body"><h3>${p.name}</h3><div class="equipment-brand">${p.brand}</div><p>${p.description}</p><div class="equipment-footer"><span class="equipment-use">${p.use}</span><button type="button" class="add-button ${isSelected?'selected':''}" data-product="${p.id}" aria-label="${isSelected?'Quitar':'Agregar'} ${p.name} ${isSelected?'de':'a'} la cotización" aria-pressed="${isSelected}">${isSelected?'Agregado':'Agregar'} <span aria-hidden="true">${isSelected?'✓':'+'}</span></button></div></div></article>`; }).join('');
  resultCount.textContent = `${visible.length} ${visible.length === 1 ? 'EQUIPO' : 'EQUIPOS'}`;
  observeReveals(grid);
}
function setFilter(filter){
  currentFilter = filter;
  document.querySelectorAll('.filter').forEach(btn => { const active=btn.dataset.filter===filter; btn.classList.toggle('active',active); btn.setAttribute('aria-pressed',String(active)); });
  renderProducts();
}
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click',() => setFilter(btn.dataset.filter)));
document.querySelectorAll('[data-job]').forEach(btn => btn.addEventListener('click',() => { setFilter(btn.dataset.job); document.getElementById('equipos').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}); }));
grid.addEventListener('click',e => { const btn=e.target.closest('[data-product]'); if (!btn) return; const id=btn.dataset.product; selected=selected.includes(id)?selected.filter(item=>item!==id):[...selected,id]; saveSelection(); renderProducts(); renderSelection(); });
function saveSelection(){try{localStorage.setItem('seringco-quote',JSON.stringify(selected));}catch{}}
function renderSelection(){
  countEls.forEach(el => {el.textContent=selected.length;});
  if (!selected.length){selectedList.innerHTML='<div class="selected-empty">Aún no agregas equipos. Explora el catálogo y selecciona los que necesitas.</div>';}
  else {selectedList.innerHTML=selected.map(id=>{const p=products.find(item=>item.id===id);return `<div class="selected-item"><div><strong>${p.name}</strong><small>${p.brand}</small></div><button type="button" data-remove="${id}" aria-label="Quitar ${p.name}">×</button></div>`}).join('');}
  updateWhatsapp();
}
selectedList.addEventListener('click',e=>{const btn=e.target.closest('[data-remove]');if(!btn)return;selected=selected.filter(id=>id!==btn.dataset.remove);saveSelection();renderSelection();renderProducts();});

function updateWhatsapp(){
  const names=selected.map(id=>products.find(p=>p.id===id)?.name).filter(Boolean);
  const name=document.getElementById('quote-name').value.trim();
  const place=document.getElementById('quote-place').value.trim();
  const date=document.getElementById('quote-date').value;
  const duration=document.getElementById('quote-duration').value;
  const notes=document.getElementById('quote-notes').value.trim();
  const lines=['Hola SERINGCO, quisiera cotizar un arriendo de maquinaria.'];
  if (names.length){lines.push('','Equipos:');names.forEach((item,i)=>lines.push(`${i+1}. ${item}`));}
  else lines.push('','Necesito orientación para elegir el equipo adecuado.');
  if(name)lines.push(`Nombre: ${name}`);
  if(place)lines.push(`Ubicación de la obra: ${place}`);
  if(date)lines.push(`Fecha estimada: ${date}`);
  if(duration)lines.push(`Plazo estimado: ${duration}`);
  if(notes)lines.push(`Trabajo o detalles: ${notes}`);
  lines.push('','¿Me pueden indicar disponibilidad y condiciones?');
  sendWhatsapp.href=`https://wa.me/56982791453?text=${encodeURIComponent(lines.join('\n'))}`;
}
document.querySelectorAll('#quote-name,#quote-place,#quote-date,#quote-duration,#quote-notes').forEach(input=>input.addEventListener('input',updateWhatsapp));

function openQuote(){if(instaModal.classList.contains('open'))closeInsta(false);lastFocus=document.activeElement;drawerBackdrop.hidden=false;requestAnimationFrame(()=>drawerBackdrop.classList.add('show'));drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';document.getElementById('close-quote').focus();}
function closeQuote(){drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');drawerBackdrop.classList.remove('show');document.body.style.overflow='';setTimeout(()=>{drawerBackdrop.hidden=true;},260);lastFocus?.focus?.();}
document.querySelectorAll('[data-open-quote]').forEach(btn=>btn.addEventListener('click',openQuote));
document.getElementById('close-quote').addEventListener('click',closeQuote);
drawerBackdrop.addEventListener('click',closeQuote);

const menuToggle=document.getElementById('menu-toggle');
const mobileNav=document.getElementById('mobile-nav');
menuToggle.addEventListener('click',()=>{const open=mobileNav.hidden;mobileNav.hidden=!open;menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
mobileNav.querySelectorAll('a,button').forEach(el=>el.addEventListener('click',()=>{mobileNav.hidden=true;menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menú');}));


const modalKey='seringco-instagram-dismissed';
function showInsta(){if(instaModal.classList.contains('open'))return;if(drawer.classList.contains('open')){setTimeout(showInsta,10000);return;}let dismissed=0;try{dismissed=Number(localStorage.getItem(modalKey)||0)}catch{}if(Date.now()-dismissed<7*24*60*60*1000)return;lastFocus=document.activeElement;instaBackdrop.hidden=false;requestAnimationFrame(()=>instaBackdrop.classList.add('show'));instaModal.classList.add('open');instaModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';document.getElementById('close-insta').focus();}
function closeInsta(save=true){instaModal.classList.remove('open');instaModal.setAttribute('aria-hidden','true');instaBackdrop.classList.remove('show');document.body.style.overflow='';setTimeout(()=>{instaBackdrop.hidden=true;},260);if(save){try{localStorage.setItem(modalKey,String(Date.now()))}catch{}}lastFocus?.focus?.();}
document.getElementById('close-insta').addEventListener('click',()=>closeInsta());
document.getElementById('insta-later').addEventListener('click',()=>closeInsta());
instaBackdrop.addEventListener('click',()=>closeInsta());
instaModal.querySelector('a').addEventListener('click',()=>closeInsta());
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(drawer.classList.contains('open'))closeQuote();else if(instaModal.classList.contains('open'))closeInsta();else if(!mobileNav.hidden){mobileNav.hidden=true;menuToggle.setAttribute('aria-expanded','false');}}});
setTimeout(showInsta,16000);

document.getElementById('year').textContent=new Date().getFullYear();
renderProducts();renderSelection();observeReveals();
