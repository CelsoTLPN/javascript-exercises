const removeFromArray = function(arr, ...remove) {
    let newArr = arr.filter(item => !remove.includes(item));
    return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
