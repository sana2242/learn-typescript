//INTERSECTION TYPE

type FirstType = {
    name:string;
    age:number;
};

type SecondType = {
    address: string;
    phone:string;
}

type combinedType = FirstType & SecondType;

const person : combinedType = {
    name: "San",
    age: 21,
    address: "san34@gmail.com",
    phone: "78372327"
}