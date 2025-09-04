// family.js — interactive family cards
document.querySelectorAll('.family-tree .member').forEach(m=>{
  m.addEventListener('click', ()=>{
    const detail = document.getElementById('memberDetail');
    const name = m.dataset.name || 'Person';
    const meta = m.querySelector('.meta')?.innerHTML || '';
    detail.innerHTML = '<h3>'+name+'</h3><div>'+meta+'</div><p class="desc">Click again to toggle.</p>';
    detail.animate([{opacity:0, transform:'translateY(10px)'},{opacity:1, transform:'translateY(0)'}],{duration:320,fill:'forwards'});
  });
});
