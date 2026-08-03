//NULLABLE TYPES


let username: string | null = "San";
let ageEx: number | null = null;

console.log(ageEx);

function  greetUser(username: string| null){
    if(username == null){
        console.log("Hello, Guest!")
    }else{
        console.log(`Hello ${username}`)
    }
}

greetUser("San")
greetUser(null)