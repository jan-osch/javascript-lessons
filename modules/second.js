const firstFile = require('./first');

// EXAMPLE 1
// console.log(learning); // error

// EXAMPLE 2
firstFile();

const makeDots = (number) => {
    let i = 0;
    let result = '';
    while (i < number) {
        i++;
        result+= '.';
    }
    return result
};

const myPoem = `
when we first met we were really broke
you got back into code & it was no joke
Your career took off & they flew us to cool places
met many people, lots of smiling faces
O’Reilly book deal, is this really real?
`;

class Programmer {
    constructor(languages) {
        this.languages = languages;
    }

    code() {
        for (const lang of this.languages) {
            console.log(`I code in ${lang}`)
        }
    }
}

module.exports = {
    makeDots,
    myPoem,
    Programmer
};


