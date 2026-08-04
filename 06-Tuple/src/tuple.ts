//TUPLES

let article: readonly[number, string, boolean] = [11, "Adam", true];

article = [12, "Second Name", false];


console.log(article);


//Deconstructing tuple into individual variables

const [id, title, published] = article;

console.log(id);
console.log(title);
console.log(published);