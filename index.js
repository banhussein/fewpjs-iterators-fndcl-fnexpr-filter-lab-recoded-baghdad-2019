let arrayToLowerCase = []

function findMatching(drivers, string) {
    let even = drivers.filter(n => {
        return n.toLowerCase() == string.toLowerCase();
    });

    return even
}


function fuzzyMatch(drivers, string) {
    let even = drivers.filter(n => {
        return n.search(string);
    });

    return even
}


function matchName(drivers, string) {
    let even = drivers.filter(n => {
        return n.name == string;
    });

    return even
}