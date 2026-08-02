// VOID & NEVER

function greet(name: string): void{
    console.log(`Hello, ${name}`);
}

function noReturnValue(): void{
    //This function doesn't return a value
}

function throwError(message: string) : never{
    throw new Error(message);
}

function infiniteLoop(): never{
    while(true){
        //This function never exists 
    }
}