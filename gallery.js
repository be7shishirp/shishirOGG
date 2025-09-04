// gallery.js — populates gallery and lightbox
const galleryGrid = document.getElementById('galleryGrid');
const images = ['images/photo1.svg','images/photo2.svg','images/photo3.svg','images/photo4.svg','images/photo5.svg'];
images.forEach(src=>{
  const img = document.createElement('img');
  img.src = src; img.alt = 'photo';
  img.addEventListener('click', ()=>openLightbox(src));
  galleryGrid.appendChild(img);
});
function openLightbox(src){
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  img.src = src; lb.style.display='flex';
}
function closeLightbox(){ document.getElementById('lightbox').style.display='none'; }
