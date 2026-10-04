'use strict';
{
    const Images = document.querySelectorAll('section img');
    let Index = 0;
    function change() {
        setTimeout(() => {
            Images[Index].classList.remove('current');
            Index++; 
            if(Index === 3) {
                Index = 0;
            }
            Images[Index].classList.add('current');
            change();
        }, 5000);
    }
    change();
}