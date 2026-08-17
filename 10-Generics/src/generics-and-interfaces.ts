interface Book{
    itemType: string;
    title: string;
    isbn: number;
}

interface Game{
    itemType: string;
    title: string;
    style: string;
    price: number;
}

class Collection<T>{
    public data: T[] = [];

    add(item: T): void{
        this.data.push(item);
    }
}


let item1= new Collection<Book>();

item1.add({itemType: "Book", title: "Atomic Habits", isbn: 12121})
console.log(item1);


let item2 = new Collection<Game>();
item2.add({itemType: "Game", title: "Uncharted", style: "Action", price: 150 })
console.log(item2)