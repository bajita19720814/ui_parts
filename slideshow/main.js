'use strict'; {
    const main = document.getElementById('main');
    const pause = document.getElementById('pause');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const thumb = document.getElementById('thumb');
    let mainIndex = 0;
    let isPlaying = false;
    let timeoutId;
    const images = [
        "img/nagoyajou.png",
        "img/himejijou.png",
        "img/kanazawajou.png",
        "img/maruokajou.png",
        "img/matsuejou.png",
        "img/oosakajou.png",
        "img/syurijou.png",
        "img/takedajou.png"
    ];
    const names = [
        "名古屋城",
        "姫路城",
        "金沢城",
        "丸岡城",
        "松江城",
        "大阪城",
        "首里城",
        "竹田城",
    ];
    const thumbnails = [];
    images.forEach((image, index) => {
        const img = document.createElement('img');
        const text = document.createElement('p');
        const li = document.createElement('li');
        img.src = image;
        text.textContent = names[index];
        li.appendChild(img);
        li.appendChild(text);
        if (index === mainIndex) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            thumbnails[mainIndex].classList.remove('current');
            mainIndex = index;
            main.src = image;
            li.classList.add('current');
        });
        thumbnails.push(li);
        thumb.appendChild(li);
    });
    prev.addEventListener('click', () => {
        thumbnails[mainIndex].classList.remove('current');
        mainIndex--;
        if (mainIndex < 0) {
            mainIndex = images.length - 1;
        }
        main.src = images[mainIndex];
        thumbnails[mainIndex].classList.add('current');
    });
    next.addEventListener('click', () => {
        thumbnails[mainIndex].classList.remove('current');
        mainIndex++;
        if (mainIndex > images.length - 1) {
            mainIndex = 0;
        }
        main.src = images[mainIndex];
        thumbnails[mainIndex].classList.add('current');
    });
    function playSlideshow() {
        timeoutId = setTimeout(() => {
            next.click();
            playSlideshow();
        }, 1000);
    }
    pause.addEventListener('click', () => {
        if (isPlaying) {
            clearTimeout(timeoutId);
            isPlaying = false;
            pause.textContent = "Play";
        } else {
            playSlideshow();
            isPlaying = true;
            pause.textContent = "Pause";
        }

    });
}