"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractEntity {
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
}
class Entity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, Name: ${this.name}, `;
    }
}
class AnotherEntity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info`;
    }
}
const entity1 = new Entity(AbstractEntity.generateNextId(), "Sardina");
//The left side controls what you are allowed to access through the variable.
//The right side determines what object actually gets created.
const entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "Sardina");
console.log(entity1.getEntityInfo());
console.log(entity2.getEntityInfo());
//# sourceMappingURL=polymorphism-and-method-override.js.map