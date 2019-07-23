// сумма 2 чисел по их индексу в строке
function sumNumbersByIndex(item, first, second) {
  let letters = (item + "").split("");
  if (first > letters.length || second > letters.length) return NaN;
  if (first < 0) {
    first += letters.length;
  }
  if (second < 0) {
    second += letters.length;
  }
  return Number(letters[first]) + Number(letters[second]);
}

// кратность числа
function crat(item, power) {
  return item % power === 0;
}

//факториал числа
function factorial(n) {
  var result = 1;
  while (n) {
    result *= n--;
  }
  return result;
}

function repeatPower(number, maxPower) {
  let result = [];
  for (let step = 1; step <= maxPower; step++) {
    result.push(Math.pow(number, step));
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

//вернёт новый массив с уникальными значениями в массиве https://medium.com/@stasonmars/%D0%BA%D0%B0%D0%BA-%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D1%83-%D0%B2-javascript-%D0%BF%D1%80%D0%B8-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8-sort-d492c97ccfdf
function unique(arr) {
  return Array.from(new Set(arr));
}

// компоратор для функции сортировки по возрастанию. Для убывания можно использовать reverse()
function sortByNumber(a, b) {
  return a - b;
}

// функция возвращает зеркальную строку
function mirror(left) {
  let right = ("" + left).split("");
  return right.reverse().join("");
}
