"use strict";
// VOID & NEVER
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    console.log(`Hello, ${name}`);
}
function noReturnValue() {
    //This function doesn't return a value
}
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        //This function never exists 
    }
}
//# sourceMappingURL=void-and-never.js.map