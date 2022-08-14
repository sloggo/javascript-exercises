const removeFromArray = function(array) {
    const args = [...arguments]; // finds list of numbers to remove
    let finishedArray = [];

    for(const arrayItem of array){
        if (!(args.includes(arrayItem))){ // if the element is not in the remove list
            finishedArray.push(arrayItem) // add it to the new array
        }
    }

    return finishedArray
};

// Do not edit below this line
module.exports = removeFromArray;
