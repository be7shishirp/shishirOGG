// script.js — shared interactions
document.getElementById('year').innerText = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('light');
});

// small one-word changer
const words = ['Curious','Creative','Persistent','Kind','Explorer'];
let i=0;
setInterval(()=>{
  const el = document.getElementById('oneWord');
  i=(i+1)%words.length;
  el.animate([{opacity:0, transform:'translateY(6px)'},{opacity:1, transform:'translateY(0)'}],{duration:420,fill:'forwards'});
  el.textContent = words[i];
},2500);

// create sample flowing projects
const projects = ['Audit Dashboard','Tally Automation','Excel Reports','Personal Blog','Community Help'];
const pf = document.getElementById('projectsFlow');
projects.forEach(p=>{
  const d = document.createElement('div'); d.className='pitem'; d.textContent = p;
  pf.appendChild(d);
});
