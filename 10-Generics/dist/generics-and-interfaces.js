"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection {
    data = [];
    add(item) {
        this.data.push(item);
    }
}
let item1 = new Collection();
item1.add({ itemType: "Book", title: "Atomic Habits", isbn: 12121 });
console.log(item1);
let item2 = new Collection();
item2.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(item2);
//# sourceMappingURL=generics-and-interfaces.js.map