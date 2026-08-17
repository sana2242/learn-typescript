class ProductStaticMembers{
    private static nextId: number = 1;
    constructor(private id: number, private name:string){}

    static generateNextId(): number{
        return this.nextId++;
    }

    getProductInfo(): string{
        return `ID: ${this.id}, Name: ${this.name}`
    }
}

const product1Static = new ProductStaticMembers(
    ProductStaticMembers.generateNextId(), "San"
);

const product2Static = new ProductStaticMembers(
    ProductStaticMembers.generateNextId(), "Gadget"
);

console.log(product1Static.getProductInfo())
console.log(product2Static.getProductInfo())