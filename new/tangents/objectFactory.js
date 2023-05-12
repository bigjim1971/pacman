// var positionComponent = function() {
//     var component = {
//         name: "position",
//         x: 3,
//         y: 0,
//     };
//     return component;
// }

// console.log(positionComponent);

// var pos1 = positionComponent();
// var pos2 = positionComponent();
// var pos3 = positionComponent();

// console.log(pos1);
// console.log(pos2);
// console.log(pos3);

// pos3.y = 5;
// pos2.y = 7;
// pos1.y = 3;


var positionComponent1 = function() {
    var component = {
        name: "position",
        x: 3,
        y: 0,
        move: function() {
            this.x += 1;
            this.y += 1;
        }
    };
    return component;
}

var positionComponent2 = function(name, x, y) {
    var component = {
        name: name,
        x: x,
        y: y,
    };
    return component;
}



var pos1 = positionComponent1();
pos1.x = 7;
pos1.y = 3;

var pos2 = positionComponent2("position", 3, 0);

console.log(pos1);
console.log(pos2);



var components = []
var numberOfComponents = 100;
var init = function() {
    for (var ii = 0; ii < numberOfComponents; ii++) {
        components[ii] = positionComponent1();
    }
}
var moveComponents = function() {
    for (var ii = 0; ii < numberOfComponents; ii++) {
        components[ii].move();
    }    
}
init();
var myLoop = function() {
    setTimeout(function() {
        moveComponents();
        myLoop();
    }, 1000);
};
myLoop();
console.log(components)