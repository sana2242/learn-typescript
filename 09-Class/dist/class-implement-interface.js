"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductImplementInterface {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductImplementInterface.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
const product1 = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "San");
const product2 = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "San");
console.log(product1.getProductInfo());
console.log(product2.getProductInfo());
//# sourceMappingURL=class-implement-interface.js.map