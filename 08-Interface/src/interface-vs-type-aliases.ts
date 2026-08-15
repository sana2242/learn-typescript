interface PersonExInterface {
    name:string;
    age:number;
}

type PersonExType = {
    name:string;
    age:number;
}


interface AnimalExInterface {
    type:string;
}

interface Dog extends AnimalExInterface{
    bark(): void;
}

class Labrador implements Dog{
    type: string = "dog";
    bark(){
        console.log("woof!")
    }
}


type AnimalExType = {
    type: string;
}

type Monkey = AnimalExType & {
    bark() : void;
}

const labrador: Monkey = {
    type: "monkey",
    bark(){
        console.log("Woof")
    }
}


interface Car {
    brand: String;
}

interface Car{
    model: string;
}

const MyCar: Car = {
    brand: "Toyota",
    model: "Camry"
}