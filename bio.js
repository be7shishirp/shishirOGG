// bio.js — live age counter and summary
(function(){
  // Start moment provided by user: AD 2004-10-23 23:17 local time
  const start = new Date('2004-10-23T23:17:00');
  const liveAgeEl = document.getElementById('liveAge');
  const liveSummaryEl = document.getElementById('liveSummary');

  function update(){
    const now = new Date();
    let diff = Math.floor((now - start)/1000); // seconds
    const seconds = diff % 60; diff = Math.floor(diff/60);
    const minutes = diff % 60; diff = Math.floor(diff/60);
    const hours = diff % 24; diff = Math.floor(diff/24);
    const days = diff % 30; // rough
    let months = Math.floor((now.getFullYear()-start.getFullYear())*12 + (now.getMonth()-start.getMonth()));
    let years = Math.floor(months/12);
    months = months % 12;

    liveAgeEl.textContent = years + ' years, ' + months + ' months, ' + days + ' days, ' + hours + ' hrs, ' + minutes + ' mins, ' + seconds + ' secs';
    const totalMinutes = Math.floor((now - start)/60000);
    const totalHours = Math.floor((now - start)/3600000);
    const totalDays = Math.floor((now - start)/86400000);
    const totalSeconds = Math.floor((now - start)/1000);
    liveSummaryEl.innerHTML = 'Total: ' + totalDays + ' days · ' + totalHours + ' hours · ' + totalMinutes + ' minutes · ' + totalSeconds + ' seconds';
  }
  update();
  setInterval(update,1000);
})();
