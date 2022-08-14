const caesar = function(string, shift) {
    const stringLetters = string.split('');
    let encodedString = '';

    for(letter of stringLetters){


        if((letter === '!') || (letter === '.') || (letter === ',') || (letter === '?') || (letter === ' ')){
            encodedString += letter
        } else{
            let capitalLetter = false;
            

            if(letter.toUpperCase() === letter){
                capitalLetter = true
                //console.log(letter+' is a capital')
                //console.log('capitalLetter = '+capitalLetter)
            } 

            let lowerLetter = letter.toLowerCase()
            
            let uniLowerLetter = lowerLetter.charCodeAt(0)

            let encodeuniLowerLetter;

            if(shift < 0){
                let newShift = 26 - (Math.abs(shift));

                encodeuniLowerLetter = ((((uniLowerLetter + (newShift)) - 97) % 26) +97)
            } else{
                encodeuniLowerLetter = ((((uniLowerLetter + (shift)) - 97) % 26) +97)
            }

            uniLowerLetter = String.fromCharCode(encodeuniLowerLetter);
            //console.log(uniLowerLetter)

            if(capitalLetter === true){
                //console.log(uniLowerLetter.toUpperCase())
                encodedString += uniLowerLetter.toUpperCase();
            } else{
                encodedString += uniLowerLetter
            }


        }
    }

    return encodedString;
};

// Do not edit below this line
module.exports = caesar;
