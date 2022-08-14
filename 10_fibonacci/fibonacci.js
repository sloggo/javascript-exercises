const fibonacci = function(reps) {
    let a = 0
    let b = 1

    for(i=2;i<=reps;i++){
        let calc = a + b;

        a = b;
        b = calc;
        
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
