//TYPE ANNOTATIONS WITH FUNCTIONS

//fucntion to calculate the area of a rectangle

function calculateRectangleArea(lengthRectangle: number, widthRectangle: number): number {
    return lengthRectangle * widthRectangle;
}

//calling the function with vlaid arguments

const lengthRectangle = 5;
const widthRectangle = 3;

const area = calculateRectangleArea(lengthRectangle, widthRectangle);
console.log(`The area of the rectangle is: ${area}`)