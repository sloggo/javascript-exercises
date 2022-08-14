const reverseString = function(string) {
    const stringLetters = string.split('')
    let stringReversed = '';

    for(i = 1; i <= string.length; i++) {
        stringReversed += stringLetters[string.length - i]
    }
    
    console.log(stringReversed)
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
