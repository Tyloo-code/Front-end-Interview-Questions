;(function () {

  let clock = document.getElementById('clock'),
      ctx = clock.getContext('2d'),
      cWidth = ctx.canvas.width,
      cHeight = ctx.canvas.height,
      hours = [3,4,5,6,7,8,9,10,11,12,1,2],
      t = null;
    


  class Clock{
    constructor() {
      this.r = cWidth / 2;
    }

    init() {
      this.draw(); 
      t = setInterval(this.draw.bind(this),1000);
    }
    
    draw() {
      ctx.clearRect(0, 0, cWidth, cHeight);
      let { hours, minutes ,seconds} = getTime();
      ctx.save();
      this.drawPanel();
      this.drawHourNums();
      this.drawHourIndicator(hours, minutes);
      this.drawMinuteIndicator(minutes);
      this.drawSecondIndicator(seconds);
      this.drawCentralPointer();
      ctx.restore();
      
    }

    drawPanel(){
      ctx.beginPath();
      ctx.translate(this.r, this.r);
      ctx.fillStyle = '#fff';
      // ctx.strokeStyle = '#fff';
      ctx.arc(0, 0, this.r - 20, 0, 2 * Math.PI, false);
      // ctx.stroke();
      ctx.fill();
    }

    drawHourNums() {
      let radius,
          x,
          y;

      // 转换绘笔颜色
      ctx.fillStyle = '#000';
      ctx.font = '40px sans-serif';
      // 水平垂直居中
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      hours.forEach((item, index) => {
        radius = 2 * Math.PI / 12 * index;
        x = (this.r - 60) * Math.cos(radius);
        y = (this.r - 60) * Math.sin(radius);
        ctx.beginPath();
        ctx.fillText(item,x,y);
      })
    }

    drawCentralPointer() {
      ctx.beginPath();
      ctx.fillStyle = '#333';
      ctx.arc(0, 0, 13, 0, 2 * Math.PI, false);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = '#666';
      ctx.arc(0, 0, 6, 0, 2 * Math.PI, false);
      ctx.fill();
    }

    drawHourIndicator(hours, minutes) {
      let radius = 2 * Math.PI / 12 * hours,
          mRadius = 2 * Math.PI / 12 / 60 * minutes;

      ctx.save();                    //保存状态
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.rotate(radius + mRadius);
      ctx.moveTo(0, 0);  //起点坐标
      ctx.lineTo(0, -this.r / 1.8);  //终点坐标
      ctx.stroke();
      ctx.restore();                 //还原状态
    }

    drawMinuteIndicator(minutes) {
      let radius = 2 * Math.PI / 60 * minutes;

      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.rotate(radius);
      ctx.moveTo(0, 0);  //起点坐标
      ctx.lineTo(0, -this.r / 1.5);  //终点坐标
      ctx.stroke();
      ctx.restore();
    }

    drawSecondIndicator(seconds) {
      let radius = 2 * Math.PI / 60 * seconds;
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = 'orange';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.rotate(radius);
      ctx.moveTo(0, 0);  //起点坐标
      ctx.lineTo(0, -this.r / 1.2);  //终点坐标
      ctx.stroke();
      ctx.restore();
    }
  }

  function getTime() {
    let d = new Date();
    return {
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds()
    }
  }

  window.Clock = Clock;
})();