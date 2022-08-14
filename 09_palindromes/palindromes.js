const palindromes = function (string) {
    const stringArray = (string.toLowerCase()).split('');
    const stringArrayFilt = stringArray.filter(data => data != ('!'||'.'||','))
    console.log(stringArrayFilt)

    let stringForward = '';
    let stringBackward = '';

    for(i=0;i<stringArrayFilt.length;i++){
        stringForward += stringArrayFilt[i]
        stringBackward += stringArrayFilt[(stringArrayFilt.length -1) - i]
    }

    console.log(stringForward)
    console.log(stringBackward)

    if (stringForward === stringBackward){
        return true
    } else{
        return false
    }
    
};

// Do not edit below this line
module.exports = palindromes;
