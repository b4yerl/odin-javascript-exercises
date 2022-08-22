const sumAll = function(i, j) {
    if (i < 0 || j < 0 || typeof i != 'number' || typeof j != 'number') {
        return 'ERROR';
    }

    let sum = 0;
    if (i <= j){ 
        do {
            sum += i;
            i++;
        } while (i <= j);
    }
    else {
        do {
            sum += j;
            j++;
        } while (j <= i);
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
