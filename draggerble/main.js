'use strict'; 
{
    const div = document.querySelector('div');

    div.ondragstart = function() {
        return false;
    };
    div.onmousedown = function(e) {
        div.style.position = 'absolute';
        div.style.zIndex = 1000;
        
        // let shiftX = e.clientX - div.getBoundingClientRect().left;
        document.body.append(div);
        div.style.left = e.pageX - div.offsetWidth + 'px';
        div.style.top = e.pageY - div.offsetHeight + 'px';
        function onMouseMove(event) {
            div.style.left = event.pageX - div.offsetWidth + 'px';
            div.style.top = event.pageY - div.offsetHeight + 'px';
        }
        document.addEventListener('mousemove', onMouseMove);
       div.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        div.onmouseup = null;
       };
    };
}