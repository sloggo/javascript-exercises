const sumAll = function(one, two) {
    let total = 0;
    let start = 0;
    let end = 0;

    if(one < two){
        start = one;
        end = two;
    } else{
        start = two;
        end = one;
    }

    if ((Number.isInteger(start) && start >= 0) && (Number.isInteger(end) && end >= 0)){
        for(i = start; i <= end; i++){
            total += i
        }
    
        return total
    } else{
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
