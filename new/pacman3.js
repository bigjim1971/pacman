var stevesCanvas = document.getElementById("myCanvas");
var ctx = stevesCanvas.getContext("2d");





var onresize = function() {
    stevesCanvas.width = document.body.clientWidth;
    stevesCanvas.height = document.body.clientHeight;
 }


 window.addEventListener("resize", onresize);

 onresize();


 var doWhat = function(whatStrokeFill) {
    if (whatStrokeFill === "stroke") {ctx.stroke();}
    if (whatStrokeFill === "fill") {ctx.fill();}
    if (whatStrokeFill === "strokeFill") {ctx.stroke(); ctx.fill();}
    if (whatStrokeFill === "fillStroke") {ctx.fill(); ctx.stroke();}
}

var myTriangle = function(x, y, whatStrokeFill) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 200, y);
    ctx.lineTo(x + 200, y + 200);
    ctx.closePath();
    doWhat(whatStrokeFill);
}

var myCircle = function(x, y, whatStrokeFill) {
    ctx.moveTo(x, y);
    ctx.beginPath();
    ctx.arc(x + 100, y + 100, 100, 0, 2 * Math.PI);
    ctx.closePath();
    doWhat(whatStrokeFill);
}

var theOtherStuff = function() {

    ctx.fillStyle = "#FF0000";
    ctx.strokeStyle = "#00FFFF";
    ctx.lineWidth = 30;

    myTriangle(200, 200, "strokeFill");
    myTriangle(600, 200, "fillStroke");
    myTriangle(1000, 200, "fill");
    myTriangle(1400, 200, "stroke");
    myCircle(200, 600, "strokeFill");
    myCircle(600, 600, "fillStroke");
    myCircle(1400, 600, "stroke");
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