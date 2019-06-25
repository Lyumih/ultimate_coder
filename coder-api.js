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

/** КОМБИНАТОРИКА */
// перестановка
function permutation(arr) {
    if (arr.length > 1) {
        var beg = arr[0];
        var arr1 = permutation(arr.slice(1));
        var arr2 = [];
        var l = arr1[0].length;
        for (var i = 0; i < arr1.length; i++)
            for (var j = 0; j <= l; j++)
                arr2.push(arr1[i].slice(0, j).concat(beg, arr1[i].slice(j)));
        return arr2;
    } else return [arr];
}

//Треугольник Паскаля
function pascalTriangl(n) {
    var result = [];
    result[0] = [1];
    result[1] = [1, 1];
    for (var row = 2; row < n; row++) {
        result[row] = [1];
        for (var col = 1; col <= row - 1; col++) {
            result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
            result[row].push(1);
        }
    }
    return result;
}