"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductStaticMembers {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return this.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
const product1Static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "San");
const product2Static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
console.log(product1Static.getProductInfo());
console.log(product2Static.getProductInfo());
//# sourceMappingURL=class-static-members.js.map