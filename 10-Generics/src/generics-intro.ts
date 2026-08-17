function returnType<T>(val: T): T{
    return val;
}

const numValue: number = returnType<number>(100)
const stringValue: string = returnType<string>("Hey")
const booleanValue: boolean = returnType<boolean>(false)
const arrValue: number[] = returnType<number[]>([1, 2, 3, 4, 5])


console.log(`Number Value: ${numValue}`);
console.log(`String Value: ${stringValue}`);
console.log(`Boolean Value: ${booleanValue}`);
console.log(`Array Value: ${arrValue}`);