const findTheOldest = function(people) {
    function getAge(birth, death){
        if(!death){
            death = new Date().getFullYear();
        }
        return death - birth;
    }

    return people
    .reduce((oldestAge, currAge) => {
        const oldestPerson = getAge(oldestAge.yearOfBirth, oldestAge.yearOfDeath);
        const currPerson = getAge(currAge.yearOfBirth, currAge.yearOfDeath);

        return oldestPerson > currPerson ? oldestAge : currAge;
    })
    
};

// Do not edit below this line
module.exports = findTheOldest;
