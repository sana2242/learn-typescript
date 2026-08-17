class MyClassPublic{
    public name: string;

    constructor(name: string){
        this.name = name;
    }
}

const instancePublic = new MyClassPublic("Sardina");
console.log(instancePublic.name);


class MyClassPrivate{
    private secret: string;

    constructor(secret: string){
        this.secret = secret;
    }

    revealSecret(){
        console.log(this.secret);
    }
}

const instancePrivate = new MyClassPrivate("Here is a secret");
console.log(instancePrivate.revealSecret());


class Parent{
    protected familyName: string;

    constructor(name: string){
        this.familyName = name;
    }
}

class Child extends Parent{
    introduceFamily(){
        console.log(`Our family is ${this.familyName}`);

    }
}

const parentEx = new Parent("Smith");
const childEx = new Child("Johnson");

childEx.introduceFamily();