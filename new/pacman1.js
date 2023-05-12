var stevesCanvas = document.getElementById("myCanvas");
var ctx = stevesCanvas.getContext("2d");



console.log("Hello World");
console.log(document);
console.log(console);
console.log(window);
console.log(stevesCanvas);
console.log(ctx);



var onresize = function() {
    stevesCanvas.width = document.body.clientWidth;
    stevesCanvas.height = document.body.clientHeight;
 }


 window.addEventListener("resize", onresize);

 onresize();

var myTriangle = function(x, y, whatStrokeFill) {

}

var theOtherStuff = function() {

    ctx.fillStyle = "#FF0000";
    ctx.strokeStyle = "#00FFFF";
    ctx.lineWidth = 30;

    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(400, 200);
    ctx.lineTo(400, 400);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(600, 200);
    ctx.lineTo(800, 200);
    ctx.lineTo(800, 400);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1000, 200);
    ctx.lineTo(1200, 200);
    ctx.lineTo(1200, 400);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(1400, 200);
    ctx.lineTo(1600, 200);
    ctx.lineTo(1600, 400);
    ctx.closePath();
    ctx.stroke();

    ctx.moveTo(200, 600);
    ctx.beginPath();
    ctx.arc(300, 700, 100, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.moveTo(600, 600);
    ctx.beginPath();
    ctx.arc(700, 700, 100, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.moveTo(1400, 600);
    ctx.beginPath();
    ctx.arc(1500, 700, 100, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
}



var man = function(forwardX, mouthWidth, direction) {
    ctx.moveTo(1000, 600);
    ctx.beginPath();
    if (direction === "right") {
        ctx.arc(1100 - forwardX, 700, 100, (0 + mouthWidth) * Math.PI, (2 - mouthWidth) * Math.PI);
        ctx.lineTo(1060 - forwardX, 700);
    }
    
    if (direction === "left") {
      ctx.arc(1100 - forwardX, 700, 100, (1 + mouthWidth) * Math.PI, (3 - mouthWidth) * Math.PI);
      ctx.lineTo(1140 - forwardX, 700);
  }
    ctx.closePath();
    ctx.fillStyle = "#FFFF00";
    ctx.fill();
    ctx.fillStyle = "#FF0000";
}




var xx = 0
var dirxx = 1;
var zz = 0;
var dirzz = 1;
function myLoop() {      
    setTimeout(function() {
  
      xx += 5 * dirxx;
      if (xx > 185) {zz = 185;dirxx *= -1;}
      if (xx < -185) {xx = -185;dirxx *= -1;}
  
      zz += 0.1 * dirzz;
      if (zz > 0.4) {zz = 0.4;dirzz *= -1;}
      if (zz < 0) {zz = 0;dirzz *= -1;}

      ctx.clearRect(0, 0, stevesCanvas.width, stevesCanvas.height)
      theOtherStuff();
      if (dirxx === -1) {
        man(xx, zz, "right");
      }
      if (dirxx === 1) {
        man(xx, zz, "left");
      }
      
      myLoop();                     
    }, 20)
  }
  
  myLoop(); 