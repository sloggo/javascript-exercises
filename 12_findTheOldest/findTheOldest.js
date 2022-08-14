const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestName = '';

    for(person of people){
        if (!(person.yearOfDeath)){
            let d = new Date();
            person.age = (d.getFullYear()) - (person.yearOfBirth)
        } else{
            person.age = (person.yearOfDeath) - (person.yearOfBirth)
        }
    }

    for(person of people){
        if(person.age > oldestAge){
            oldestAge = person.age;
            oldestName = person.name;
        }
        console.log(person.name + ", "  + person.age)
    }

    return people.find(person => person.name === oldestName)

};

// Do not edit below this line
module.exports = findTheOldest;
