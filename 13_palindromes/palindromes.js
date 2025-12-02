const palindromes = function (str) {
    const alphanumerical = '0123456789abcdefghijklmnopqrstuvwxyz';
    const cleanedStr = str
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    const reversedStr = cleanedStr.split('').reverse().join('');

    return reversedStr === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
