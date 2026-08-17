abstract class AbstractEntity{
    private static nextId: number = 1

    protected constructor(public id: number, protected name:string){}
    static generateNextId(): number{
        return this.nextId++;
    }

    abstract getEntityInfo(): string;

}

class Entity extends AbstractEntity{
    constructor(id: number, name: string){
        super(id, name);
    }

    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, `
    }
}

class AnotherEntity extends AbstractEntity{
    constructor(id: number, name: string){
        super(id, name);
    }

    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info`
    }
}

const entity1: AbstractEntity = new Entity(
    AbstractEntity.generateNextId(),
    "Sardina"
)

//The left side controls what you are allowed to access through the variable.

//The right side determines what object actually gets created.

const entity2: AbstractEntity = new AnotherEntity(
    AbstractEntity.generateNextId(),
    "Sardina"
)


console.log(entity1.getEntityInfo())
console.log(entity2.getEntityInfo())