const removeFromArray = function(arr, ...args) {
    // My initial approach of using splice does not work (creating a loop and splicing it individually). 
    // this is because, when you remove an element from the array using splice, the indices of the remaining elements shift. This can cause the loop to skip elements because the for loop continues with the next index, which now points to the element after the one that should be checked next.

    // Had to look at solution :(
    return arr.filter((element) => !args.includes(element));
    // the above line filters and creates a new array that does not include any elements present in the 'args' array.
};

// Do not edit below this line
module.exports = removeFromArray;
