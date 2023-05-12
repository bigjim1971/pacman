var canvas = document.getElementById("canvas-1");
var ctx = canvas.getContext("2d");

console.log(ctx);

var onresize = function() {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
 }


 window.addEventListener("resize", onresize);

 onresize();

var drawLine = function(arrPoint1, arrPoint2) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFDD";
    
    ctx.beginPath();
    ctx.moveTo(arrPoint1[0],arrPoint1[1]);
    ctx.lineTo(arrPoint2[0],arrPoint2[1]);
    ctx.stroke();
    ctx.closePath();

    ctx.moveTo(0,0);
}

drawLine([100, 100], [100, 700]);
drawLine([300, 100], [300, 700]);
drawLine([500, 100], [500, 700]);
drawLine([700, 100], [700, 700]);

drawLine([100, 100], [700, 100]);
drawLine([100, 300], [700, 300]);
drawLine([100, 500], [700, 500]);
drawLine([100, 700], [700, 700]);

var grid = function(arrStartPoint, arrUnitRect, arrLines) {
    var x = (arrStartPoint[0] + (arrUnitRect[0] * (arrLines[0] - 0)));
    var y = (arrStartPoint[1] + (arrUnitRect[1] * (arrLines[1] - 0)));
    for (var ii = arrStartPoint[0]; ii <= x; ii += arrUnitRect[0]) {
        drawLine([ii, arrStartPoint[1]], [ii, y]);
    }
    
    for (var jj = arrStartPoint[1]; jj <= y; jj += arrUnitRect[1]) {
        drawLine([arrStartPoint[0], jj], [x, jj]);
    }
}

grid([800, 100], [10, 10], [60, 60]);
grid([100, 750], [30, 30], [20, 5]);
grid([800, 750], [15, 30], [40, 5]);