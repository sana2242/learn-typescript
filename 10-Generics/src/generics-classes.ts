class User<T = string> {
    constructor(public value: T){}

    show(msg: T): void{
        console.log(`${msg} - ${this.value}`)
    }
}

let userOne = new User<string>("Elzero")
console.log(userOne.value)
userOne.show("Here's the first Message")

let userTwo = new User<string | number>(100)

console.log(userTwo.value)
userTwo.show("Here's the second Message")