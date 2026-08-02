"use strict";
// FUNCTION REST PARAMETER
Object.defineProperty(exports, "__esModule", { value: true });
function addAll(...nums) {
    let result = 0;
    for (const num of nums) {
        result += num;
    }
    return result;
}
// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 170.5
//# sourceMappingURL=function-rest-parameter.js.map