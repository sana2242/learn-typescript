//ENUMS

enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

const today: Days = Days.Tuesday;
console.log(`Today is ${Days[today]}`);