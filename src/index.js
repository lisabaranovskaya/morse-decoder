const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let result = [];
    for (let e of expr.match(/.{1,10}/g)) {
        if (e === "**********") {
            result.push(" ");
        } else {
            let word = [];
            let words = parseInt(e).toString().match(/.{1,2}/g);
            for (let a of words) {
                if (a === '10') word.push('.');
                if (a === '11') word.push('-');
            }
            result.push(MORSE_TABLE[word.join('')]);
        }
    }
    return result.join('');
}

module.exports = {
    decode
}