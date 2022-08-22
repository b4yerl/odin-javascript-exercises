const repeatString = function(string, n) {
    if (n < 0) {
        return 'ERROR';
    }
    let concatString = '';
    for (let i = 0; i < n; i++) {
        concatString = concatString + string;
    }
    return concatString;
};

// Do not edit below this line
module.exports = repeatString;
