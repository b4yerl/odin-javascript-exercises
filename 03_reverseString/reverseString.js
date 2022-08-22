const reverseString = function(string) {
    if (typeof string != 'string') {
        return 'ERROR';
    }

    const reverse = [];
    for (let i = 0; i < string.length; i++) {
        reverse.unshift(string[i]);
    }
    return reverse.join('');

};

// Do not edit below this line
module.exports = reverseString;
