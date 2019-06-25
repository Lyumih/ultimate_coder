function sumNumbersByIndex(item, first, second) {
    let letters = (item + '').split('')
    return Number(letters[first]) + Number(letters[second])
}

function crat(item, power) {
    return item % power === 0
}

function factorial(n) {
    var result = 1;
    while (n) {
        result *= n--;
    }
    return result;
}