'use strict'; 
{
    const btn = document.getElementById('btn');
    const mask = document.getElementById('mask');
    const modal = document.getElementById('modal');
    const close = document.getElementById('close');
    btn.addEventListener('click', () => {
        modal.classList.remove('disabled');
        mask.classList.remove('hidden');
    });
    close.addEventListener('click', () => {
        modal.classList.add('disabled');
        mask.classList.add('hidden');
    });
    mask.addEventListener('click', () => {
        close.click();
    });

}