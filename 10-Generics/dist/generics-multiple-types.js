"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100));
console.log(returnTypeEx("Elzero"));
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("Elzero"));
function testType(val) {
    return `Value is ${val} and type is ${typeof val}`;
}
console.log(testType(100));
console.log(testType("Hey there!"));
function multipleTypes(valueOne, valueTwo) {
    return `The first value is ${valueOne} and the second value is ${valueTwo}`;
}
console.log(multipleTypes("Sam", 100));
console.log(multipleTypes("Sam", true));
//# sourceMappingURL=generics-multiple-types.js.map