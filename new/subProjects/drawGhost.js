var stevesCanvas = document.getElementById("myCanvas");
var ctx = stevesCanvas.getContext("2d");


var onresize = function() {
    stevesCanvas.width = document.body.clientWidth;
    stevesCanvas.height = document.body.clientHeight;
 }


 window.addEventListener("resize", onresize);

 onresize();
//var hi = "hellio";
window["hi"] = "howdy";
console.log(window["hi"]);
console.log(hi);

var draw1 = [];
draw1[0] = ["f", "beginPath"];
draw1[1] = ["f", "moveTo", 200, 200];
draw1[2] = ["f", "lineTo", 200, 150];
draw1[3] = ["f", "arc", 225, 150, 25, Math.PI, 2 * Math.PI];
draw1[4] = ["f", "lineTo", 250, 200];
draw1[5] = ["f", "closePath"];
draw1[6] = ["p", "fillStyle", "#0000FF"];
draw1[7] = ["p", "strokeStyle", "#000000"];
draw1[8] = ["p", "lineWidth", 3];
draw1[9] = ["f", "stroke"];
draw1[10] = ["f", "fill"];

var cnt = 1;



var drawSystem = function(drawArr, x, y) {
    var propertyType;
    var propertyName;
    for (var ii = 0; ii < drawArr.length; ii++) {
        propertyType = arguments[0][ii][0];
        // console.log(propertyType);
        propertyName = arguments[0][ii][1];
        // console.log(propertyName);
        if (propertyType === "p") {
            ctx[propertyName] = arguments[0][ii][2];
        }


        if (propertyType === "f") {
            var params = [];
            for (var jj = 2; jj < arguments[0][ii].length; jj++) {
                params[jj - 2] = arguments[0][ii][jj];
            }
            // console.log(params);
            // console.log(params.length);

            if (propertyName === "arc" || propertyName === "moveTo" || propertyName === "lineTo") {
                params[0] += x;
                params[1] += y;
            }


            if (params.length === 0) {
                ctx[propertyName]();  
            } else {
                ctx[propertyName].apply(ctx, params);
            }
            
        }

        // console.log(cnt);
        cnt += 1;

    }
}

drawSystem(draw1);




var xx = 0
var dirxx = 1;
function myLoop() {      
    setTimeout(function() {
  
      xx += 5 * dirxx;
      if (xx > 185) {zz = 185;dirxx *= -1;}
      if (xx < -185) {xx = -185;dirxx *= -1;}
  
      

      ctx.clearRect(0, 0, stevesCanvas.width, stevesCanvas.height)
      drawSystem(draw1, xx, 0);
      
      myLoop();                     
    }, 20)
  }
  
  myLoop(); 


