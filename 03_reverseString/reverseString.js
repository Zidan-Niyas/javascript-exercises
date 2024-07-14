const reverseString = function(string) {
    const split = string.split("");
    let newStr = '';
    for(let i=split.length-1; i>=0; i--) {
        newStr = newStr + split[i];
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
