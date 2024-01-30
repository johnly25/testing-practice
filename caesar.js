const caesarCipher = function (string, shift) {
    shift = shift % 26;
    let results = '';
    for(let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        let shiftedChar = shiftCode(char,shift);
        results += shiftedChar;
    }
    return results;
}

const shiftCode = function (char, shift) {
    let char2 = char.toUpperCase();
    let ascii = char2.charCodeAt(0);
    if(ascii < 'A'.charCodeAt() ||  ascii >'Z'.charCodeAt()) {
        return char2;
    }
    let shifted = ascii + shift;
    if(shifted > 'Z'.charCodeAt()) {
        shifted = shifted - 26;
    }
    let charShifted = String.fromCharCode(shifted);
    console.log(char == char.toUpperCase());
    if(char != char.toUpperCase()) {
       charShifted = charShifted.toLowerCase();
    }
    return charShifted;
}

export default caesarCipher;