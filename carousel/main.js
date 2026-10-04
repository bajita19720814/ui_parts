'use strict';
{
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const ul = document.querySelector('ul');
    const btns = document.querySelectorAll('.btn > button');
    const slides = ul.children;
    let imgIndex = 1;
    
    function renewImg(slideWidth) {
        ul.style.transform = `translateX(${slideWidth * imgIndex}px)`;
    }
    window.addEventListener('load', () => {
        const slideWidth = slides[0].getBoundingClientRect().width * -1;
        renewImg(slideWidth);
    });
    next.addEventListener('click', () => {
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
    });
    prev.addEventListener('click', () => {
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