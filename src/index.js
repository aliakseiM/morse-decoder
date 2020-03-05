const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrBin = [];
    for (let i = 0; i < expr.length;i+=10) {
        arrBin.push(expr.slice(i, i+10));
    }
    let arrMorse = [];
    for (let i = 0; i < arrBin.length; i++) {
        let symbol = "";
        for (let j = 0; j < 10; j += 2) {
            if (arrBin[i][j]==="*") {
                symbol += " ";
                break;
            } else if (arrBin[i][j]==="1") {
                switch (arrBin[i][j+1]) {
                    case "0": symbol += ".";
                    break;
                    case "1": symbol += "-";
                    break;
                }
            }
        }
        arrMorse.push(symbol);
    }
    let result = "";
    for (let i = 0; i < arrMorse.length; i++) {
        if (arrMorse[i]===" ") {
            result += " ";
        } else {
            result += MORSE_TABLE[arrMorse[i]];
        }
    }
    return result;
}

module.exports = {
    decode
}