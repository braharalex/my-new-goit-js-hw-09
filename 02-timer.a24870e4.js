!function(){var t={daysEl:document.querySelector("[data-days]"),hoursEl:document.querySelector("[data-hours]"),minutesEl:document.querySelector("[data-minutes]"),secondsEl:document.querySelector("[data-seconds]"),startBtn:document.querySelector("[data-start]")},e=new Date(2024,2,24,13,12,12),n={intervalId:null,start:function(){this.intervalId=setInterval((function(){var n=new Date,r=function(t){var e=1e3,n=60*e,r=60*n,a=24*r,s=o(Math.floor(t/a)),u=o(Math.floor(t%a/r)),d=o(Math.floor(t%a%r/n)),l=o(Math.floor(t%a%r%n/e));return{days:s,hours:u,minutes:d,seconds:l}}(e-n);!function(e,n,o,r){t.daysEl.textContent=e,t.hoursEl.textContent=n,t.minutesEl.textContent=o,t.secondsEl.textContent=r}(r.days,r.hours,r.minutes,r.seconds)}),1e3)},stop:function(){clearInterval(this.intervalId)}};function o(t){return String(t).padStart(2,"0")}t.startBtn.addEventListener("click",n.start.bind(n))}();
//# sourceMappingURL=02-timer.a24870e4.js.map