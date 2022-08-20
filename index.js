// Code your solution in this file!

const returnFirstTwoDrivers =function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => drivers.slice(2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) {
    return function(fare) {
        return fare * integer;
    }
}


function fareDoubler (fare){
    return (fare*2);
}
function fareTripler (fare) {
    return (fare*3);
}

const driversArray = [returnFirstTwoDrivers,returnLastTwoDrivers] 

// function selectDifferentDrivers (drivers,returnFirstTwoDrivers) {
//     return (drivers.slice(0,2));


// }

// function selectDifferentDriversLast (drivers,returnLastTwoDrivers) {
//     return (drivers.slice(2))
// }

function fetchSpecifiedDrivers(drivers,func){
    return func(drivers)
}
function selectDifferentDrivers(driversArray,funct){
    return funct(driversArray)
}