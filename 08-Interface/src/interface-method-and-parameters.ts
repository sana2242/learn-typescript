//INTERFACE METHOD AND PARAMETERS

interface PersonExTwo{
    name: string,
    age: number,
    greet(message: string): void;
}

const Sarah: PersonExTwo = {
    name: "Sarah",
    age: 30,
    greet(message: string){
        console.log(`${this.name} says: ${message}`)
    }
}

Sarah.greet("Hello")