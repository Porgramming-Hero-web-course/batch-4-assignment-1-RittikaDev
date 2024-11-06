//  Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
type Circle = {
  shape: string;
  radius: number;
};

type Rectangle = {
  shape: string;
  width: number;
  height: number;
};

type CircleAndRectangle = Circle | Rectangle;

function calculateShapeArea(object: CircleAndRectangle): number {
  if ("radius" in object)
    return parseFloat((Math.PI * object.radius ** 2).toFixed(2));
  else return object.width * object.height;
}

// console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
//  console.log(
//   calculateShapeArea({
//     shape: "rectangle",
//     width: 4,
//     height: 6,
//   })
// );
