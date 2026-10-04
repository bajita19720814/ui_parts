'use strict';
{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    let startTime;
    let timeoutId;
    let lapTime = 0;

    function countUp() {
        const t = new Date(Date.now() - startTime + lapTime);
        timer.textContent = `${String(t.getMinutes()).padStart(2, '0')} : ${String(t.getSeconds()).padStart(2, '0')} : ${String(t.getMilliseconds()).padStart(3, '0')}`;
        timeoutId = setTimeout(() => {
            countUp();
        }, 10);
    }

    start.addEventListener('click', () => {
        if (start.classList.contains('disabled')) {
            return;
        }
        startTime = Date.now();
        countUp();
        start.classList.add('disabled');
        stop.classList.remove('disabled');
        reset.classList.add('disabled');
        
    });
    stop.addEventListener('click', () => {
        if (stop.classList.contains('disabled')) {
            return;
        }
        clearTimeout(timeoutId);
        lapTime += Date.now() - startTime;
        start.classList.remove('disabled');
        stop.classList.add('disabled');
        reset.classList.remove('disabled');
        
    });
    reset.addEventListener('click', () => {
        if (reset.classList.contains('disabled')) {
            return;
        }
        lapTime = 0;
        timer.textContent = "00 : 00 : 000";
        reset.classList.add('disabled');
        
    });
}