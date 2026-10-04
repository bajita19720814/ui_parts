'use strict'; 
{
    const menu = document.getElementById('mobile_menu');
    const overlap = document.getElementById('overlap');
    const close = document.getElementById('close');
    const lists = document.querySelectorAll('#mobile_nav > li');

    menu.addEventListener('click', () => {
        overlap.classList.remove('disabled');
        menu.classList.add('disabled');
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
            lists[i].classList.remove('hidden');
                }, 500 * i);
        }
    });
    close.addEventListener('click', () => {
        overlap.classList.add('disabled');
        menu.classList.remove('disabled');
        lists.forEach(list => {
            list.classList.add('hidden');
        });
    });
}