//TYPE ANNOTATIONS WITH ARRAYS

let fruits: string [] = ["apple", "banana", "cherry"];

for (let i = 0; i< fruits.length; i++){
    console.log(`Fruit: ${fruits[i]?.toUpperCase()}`)
}