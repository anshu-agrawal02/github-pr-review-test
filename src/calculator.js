function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a / b;
}
// Testing Redis cache with a new commit
// Testing duplicate finding prevention - step 1

module.exports = {
    add,
    subtract,
    multiply
};