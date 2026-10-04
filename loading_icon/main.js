'use strict';
(() => {
    
    class Icon {
        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = this.canvas.getContext('2d');
            this.width = canvas.width;
            this.height = canvas.height;
            this.r = 60;
            this.angle = 0;
        }
        draw() {
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            this.ctx.fillRect(0, 0, this.width, this.height); 
            this.ctx.save();
            this.ctx.translate(this.width / 2, this.height / 2);
            this.ctx.rotate(Math.PI / 180 * this.angle);
            this.ctx.beginPath();
            this.ctx.moveTo(0, -this.r - 5)
            this.ctx.lineTo(0, -this.r + 5);
            this.ctx.strokeStyle = 'orange';
            this.ctx.lineWidth = 10;
            this.ctx.stroke();
            this.ctx.restore();
        }
        update() {
            this.angle += 3;
        }
        run() {
            this.update();
            this.draw();
            setTimeout(() => {
                this.run();
            }, 25);
        }
    }
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
        return;
    }
    const icon = new Icon(canvas);
    icon.run();
})();