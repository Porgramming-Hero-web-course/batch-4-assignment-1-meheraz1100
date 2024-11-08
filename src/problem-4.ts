type Circle = {
    shape: 'circle';
    radius: number;
};

type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
    if (shape.shape === 'circle') {
        return Math.PI * Math.pow(shape.radius, 2);
    } else if (shape.shape === 'rectangle') {
        return shape.width * shape.height; 
    }
    throw new Error("Unknown shape"); 
}

// Sample Input 1
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); 

// Sample Input 2:
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
console.log(rectangleArea);