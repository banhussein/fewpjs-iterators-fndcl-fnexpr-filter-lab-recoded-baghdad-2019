// Code your solution here
let arrayToLowerCase = []

function findMatching(drivers, string) {
    let even = drivers.filter(s => {
        return s.toLowerCase() == string.toLowerCase();
    });

    return even
}


function fuzzyMatch(drivers, string) {
    let even = drivers.filter(s => {
        return s.search(string);
    });

    return even
}


function matchName(drivers, string) {
    let even = drivers.filter(s => {
        return s.name == string;
    });

    return even
}