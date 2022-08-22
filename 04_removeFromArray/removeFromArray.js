const removeFromArray = function(fullArray) {
    let index = 0;
    for (let i = 1; i < arguments.length; i++) {
        if (fullArray.includes(arguments[i])){
        index = fullArray.indexOf(arguments[i])
        fullArray.splice(index, 1);
        }
    }
    return fullArray;
};

// Do not edit below this line
module.exports = removeFromArray;
