"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractItem {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return AbstractItem.nextId++;
    }
}
class Item extends AbstractItem {
    // constructor(id: number, name:string){
    //     super(id, name)
    // }
    getItemInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
const item1 = new Item(AbstractItem.generateNextId(), "Sardina");
const item2 = new Item(AbstractItem.generateNextId(), "San");
console.log(item1.getItemInfo());
console.log(item2.getItemInfo());
//# sourceMappingURL=abstract-classes-and-members.js.map