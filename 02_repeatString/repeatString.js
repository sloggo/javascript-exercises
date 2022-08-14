const repeatString = function(string, repeats) {
    if(repeats >= 0){
        let outputString = '';
        for (i=0; i < repeats; i++){
            outputString += string
        }
        return outputString
    } else{
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
