const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    if(num < 0) {
        return "OOPS";
    }
    else if(num == 0) {
        return 0;
    }
    else if(num == 1) {
        return a;
    }
    else if(num == 2) {
        return b;
    }
    else {
        for(i=3; i<=num; i++) {
            let current = a + b; // temp = 2
            a = b;  // a = 3
            b = current; // b = 2 + 3 = 5
        }
        return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;
