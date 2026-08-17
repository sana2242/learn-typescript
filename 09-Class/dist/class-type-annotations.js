"use strict";
// CLASS TYPE ANNOTATIONS
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, price ${this.price}`;
    }
}
const product1 = new Product(1, "San", 23);
console.log(product1.getProductInfo());
//# sourceMappingURL=class-type-annotations.js.map