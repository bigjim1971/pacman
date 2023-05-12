var positionComponent = {
    name: "position",
    x: 3,
    y: 0,
};
console.log(positionComponent);

var pos1 = positionComponent;
var pos2 = pos1;
var pos3 = pos2;

console.log(pos1);
console.log(pos2);
console.log(pos3);

pos3.y = 5;