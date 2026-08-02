"use strict";
//OPTIONAL AND DEFAULT PARAMETERS
Object.defineProperty(exports, "__esModule", { value: true });
//Optional Parameters
function greetOptional(name, age) {
    if (age != undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}
greetOptional("Alice");
greetOptional("Bob", 30);
function greetDefault(name, age = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetDefault("Alice");
greetDefault("Bob", 30);
//# sourceMappingURL=optional-and-default-parameters.js.map