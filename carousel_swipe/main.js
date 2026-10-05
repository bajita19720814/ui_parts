'use strict';
{
    const ul = document.querySelector('ul');
    const btns = document.querySelectorAll('.btn > button');
    const slides = ul.children;
    let imgIndex = 1;
    let startX = 0;
    let startY = 0;
    
    function renewImg(slideWidth) {
        ul.style.transform = `translateX(${slideWidth * imgIndex}px)`;
    }
    window.addEventListener('load', () => {
        const slideWidth = slides[0].getBoundingClientRect().width * -1;
        renewImg(slideWidth);
    });

    ul.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    ul.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const diffX = endX - startX;
        const diffY = endY - startY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 50) {
                btns[imgIndex - 1].classList.remove('current');
                imgIndex--;
                const slideWidth = slides[0].getBoundingClientRect().width * -1;
                ul.style.transition = 'transform 0.5s';
                renewImg(slideWidth);
                if (imgIndex === 0) {
                    imgIndex = 3;
                    btns[imgIndex -1].classList.add('current');
                    setTimeout(() => {
                        ul.style.transition = 'transform 0s';
                        renewImg(slideWidth);
                        
                    }, 500);
                }
                btns[imgIndex -1].classList.add('current');
            } else if (diffX < -50) {
                btns[imgIndex - 1].classList.remove('current');
                imgIndex++;
                const slideWidth = slides[0].getBoundingClientRect().width * -1;
                ul.style.transition = 'transform 0.5s';
                renewImg(slideWidth);
                if (imgIndex === 4) {
                    imgIndex = 1;
                    btns[imgIndex -1].classList.add('current');
                    setTimeout(() => {
                        ul.style.transition = 'transform 0s';
                        renewImg(slideWidth);
                    }, 500);
                }
                btns[imgIndex -1].classList.add('current');
            }
        } 
    });
   
    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            imgIndex = index + 1;
            const slideWidth = slides[0].getBoundingClientRect().width * -1;
            btns.forEach(btn => {
                btn.classList.remove('current');
            });
            ul.style.transition = 'transform 0.5s';
            renewImg(slideWidth);
            btn.classList.add('current');
        });
    });
}