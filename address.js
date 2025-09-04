// address.js — map links open specific coordinates (replace with correct coords)
const mapLinks = document.querySelectorAll('.map-link');
mapLinks.forEach((a, i)=>{
  // placeholder coordinates for example; replace with real ones if desired
  const coords = ['27.700769,85.300140','28.1084,83.3268','27.7000,83.4500'];
  a.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(coords[i] || coords[0]);
});
