"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyClassPublic {
    name;
    constructor(name) {
        this.name = name;
    }
}
const instancePublic = new MyClassPublic("Sardina");
console.log(instancePublic.name);
class MyClassPrivate {
    secret;
    constructor(secret) {
        this.secret = secret;
    }
    revealSecret() {
        console.log(this.secret);
    }
}
const instancePrivate = new MyClassPrivate("Here is a secret");
console.log(instancePrivate.revealSecret());
class Parent {
    familyName;
    constructor(name) {
        this.familyName = name;
    }
}
class Child extends Parent {
    introduceFamily() {
        console.log(`Our family is ${this.familyName}`);
    }
}
const parentEx = new Parent("Smith");
const childEx = new Child("Johnson");
childEx.introduceFamily();
//# sourceMappingURL=class-access-modifiers.js.map