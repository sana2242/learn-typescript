"use strict";
//NULLABLE TYPES
Object.defineProperty(exports, "__esModule", { value: true });
let username = "San";
let ageEx = null;
console.log(ageEx);
function greetUser(username) {
    if (username == null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log(`Hello ${username}`);
    }
}
greetUser("San");
greetUser(null);
//# sourceMappingURL=nullable-types.js.map