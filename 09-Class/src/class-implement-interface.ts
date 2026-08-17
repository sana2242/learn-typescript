interface Product{
    getProductInfo(): string;
}

class ProductImplementInterface implements Product{
    private static nextId: number = 1;

    constructor(private id: number, private name: string){}

    static generateNextId(): number{
        return ProductImplementInterface.nextId++;
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`
    }

}

const product1 = new ProductImplementInterface(
    ProductImplementInterface.generateNextId(), 
    "San"
);

const product2 = new ProductImplementInterface(
    ProductImplementInterface.generateNextId(), 
    "San"
);


console.log(product1.getProductInfo())
console.log(product2.getProductInfo())