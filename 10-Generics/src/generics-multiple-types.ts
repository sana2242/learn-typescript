function returnTypeEx<T>(val: T): T{
    return val;
}

console.log(returnTypeEx<number>(100)); 
console.log(returnTypeEx<string>("Elzero"));


const returnTypeArrowSyntax = <T>(val: T): T=> val;


console.log(returnTypeArrowSyntax<number>(100)); 
console.log(returnTypeArrowSyntax<string>("Elzero"));

function testType<T>(val: T): string{
    return `Value is ${val} and type is ${typeof val}`
}

console.log(testType<number>(100))

console.log(testType<string>("Hey there!"))

function multipleTypes<T, S>(valueOne: T, valueTwo: S ): string{
    return `The first value is ${valueOne} and the second value is ${valueTwo}`
}

console.log(multipleTypes<string, number>("Sam", 100));
console.log(multipleTypes<string, boolean>("Sam", true));