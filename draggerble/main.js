'use strict'; 
{
    
    // div.ondragstart = function() {
        //     return false;
        // };
        // div.onmousedown = function(e) {
            //     div.style.position = 'absolute';
            //     div.style.zIndex = 1000;
            
            //     // let shiftX = e.clientX - div.getBoundingClientRect().left;
            //     document.body.append(div);
            //     div.style.left = e.pageX - div.offsetWidth + 'px';
            //     div.style.top = e.pageY - div.offsetHeight + 'px';
            //     function onMouseMove(event) {
                //         div.style.left = event.pageX - div.offsetWidth + 'px';
                //         div.style.top = event.pageY - div.offsetHeight + 'px';
                //     }
                //     document.addEventListener('mousemove', onMouseMove);
                //    div.onmouseup = function() {
                    //     document.removeEventListener('mousemove', onMouseMove);
                    //     div.onmouseup = null;
                    //    };
                    // };
    const div = document.querySelector('div');
    let dragging = false;

    function startDrag(x, y) {
        dragging = true;
        div.style.position = 'absolute';
        div.style.zIndex = 1000;
        document.body.append(div);
        div.style.left = x - div.offsetWidth + 'px';
        div.style.top = y - div.offsetHeight + 'px';
    }

    function moveDrag(x, y) {
        div.style.left = x - div.offsetWidth + 'px';
        div.style.top = y - div.offsetHeight + 'px';
    }
    function preventScroll(e) {
        if(dragging) {
            e.preventDefault();
        }
    }

    // PC用
    div.addEventListener('mousedown', (e) => {
        startDrag(e.pageX, e.pageY);

        function onMouseMove(ev) {
            moveDrag(ev.pageX, ev.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);
        div.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });

    // スマホ用
    div.addEventListener('touchstart', (e) => {
        const t = e.touches[0];
        startDrag(t.pageX, t.pageY);

        function onTouchMove(ev) {
            const t2 = ev.touches[0];
            moveDrag(t2.pageX, t2.pageY);
        }

        document.addEventListener('touchmove', onTouchMove);
        div.addEventListener('touchend', () => {
            document.removeEventListener('touchmove', onTouchMove);
        }, { once: true });
    });
        // ページスクロールを止める（ドラッグ中のみ）
    document.addEventListener('touchmove', preventScroll, { passive: false });
}