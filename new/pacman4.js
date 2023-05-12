var stevesCanvas = document.getElementById("myCanvas");
var ctx = stevesCanvas.getContext("2d");





var onresize = function() {
    stevesCanvas.width = document.body.clientWidth;
    stevesCanvas.height = document.body.clientHeight;
 }


 window.addEventListener("resize", onresize);

 onresize();




var myShape = function(x, y, whatStrokeFill, strokeStyle, fillStyle, lineWidth, whichShape, width, height, radius) {

    var doWhat = function(whatStrokeFill) {
        if (whatStrokeFill === "stroke") {ctx.stroke();}
        if (whatStrokeFill === "fill") {ctx.fill();}
        if (whatStrokeFill === "strokeFill") {ctx.stroke(); ctx.fill();}
        if (whatStrokeFill === "fillStroke") {ctx.fill(); ctx.stroke();}
    }

    var myTriangle = function(x, y, whatStrokeFill, width, height) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x + width, y + height);
        ctx.closePath();
        doWhat(whatStrokeFill);
    }

    var myCircle = function(x, y, whatStrokeFill, radius) {
        ctx.moveTo(x, y);
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
        ctx.closePath();
        doWhat(whatStrokeFill);
    }

    var shape = {
      x: x,
      y: y,
      offsetX: 0,
      offsetY: 0,
      whatStrokeFill: whatStrokeFill,
      strokeStyle: strokeStyle, 
      fillStyle: fillStyle,
      lineWidth: lineWidth,
      whichShape: whichShape,
      width: width,
      height: height,
      radius: radius,
      render: function() {
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth; 
        if (this.whichShape === "triangle") {
          myTriangle(this.x + this.offsetX, this.y + this.offsetY, this.whatStrokeFill, this.width, this.height);
        }
         
        if (this.whichShape === "circle") {
          myCircle(this.x + this.offsetX, this.y + this.offsetY, this.whatStrokeFill, this.radius);
        }
      },
    };
    return shape;
  }

var myShapes = [];
myShapes[0] = myShape(200, 200, "strokeFill", "#00FFFF", "#FF0000", 30, "triangle", 200, 200, 100);
myShapes[1] = myShape(600, 200, "fillStroke", "#0000FF", "#FF00FF", 50, "triangle", 200, 100, 100);
myShapes[2] = myShape(1000, 200, "fill", "#80FFFF", "#FFff00", 10, "circle", 200, 200, 150);
myShapes[3] = myShape(1400, 200, "stroke", "#80FF8F", "#FFff00", 5, "triangle", 200, 200, 100);
myShapes[4] = myShape(200, 600, "strokeFill", "#00FFFF", "#FF0000", 30, "circle", 200, 200, 50);
myShapes[5] = myShape(600, 600, "fillStroke", "#008FFF", "#FF0080", 2, "triangle", 300, 200, 100);
myShapes[6] = myShape(1400, 600, "stroke", "#00FFFF", "#FF8000", 4, "circle", 100, 400, 200);
console.log(myShapes);
var theOtherStuff = function(xx, yy) {
  var x;
    for (var ii = 0; ii < myShapes.length; ii++) {
      myShapes[ii].offsetX = xx;
      myShapes[ii].offsetY = yy;
      myShapes[ii].render();
    }
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
}




var xx = 0
var dirxx = 1;
var yy = 0
var diryy = 1;
var zz = 0;
var dirzz = 1;
function myLoop() {      
    setTimeout(function() {
  
      xx += 5 * dirxx;
      if (xx > 185) {xx = 185;dirxx *= -1;}
      if (xx < -185) {xx = -185;dirxx *= -1;}
  
      yy += 3 * diryy;
      if (yy > 185) {yy = 185;diryy *= -1;}
      if (yy < -185) {yy = -185;diryy *= -1;}
  
      zz += 0.1 * dirzz;
      if (zz > 0.4) {zz = 0.4;dirzz *= -1;}
      if (zz < 0) {zz = 0;dirzz *= -1;}

      ctx.clearRect(0, 0, stevesCanvas.width, stevesCanvas.height)
      theOtherStuff(-xx/2, -yy/2);
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