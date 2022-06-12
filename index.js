// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, drivers2){
    return drivers.filter(
        function (driver){
            return driver.toLowerCase() === drivers2.toLowerCase()
        }
    )
}

function fuzzyMatch(drivers, drivers2) {
    return drivers.filter(
        function (driver){
            return driver.toLowerCase().substring(0, drivers2.length)=== drivers2.toLowerCase()
        }
    )
}

function matchName(drivers, driver2){
    return drivers.filter(
        function (driver){
            return driver.name === driver2
        }
    )
}