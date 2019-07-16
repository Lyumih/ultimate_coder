describe('sumNumbersByIndex', function () {
    it("Сумма index(0, 2) знака числа 2512 равна строке 3", function () {
        assert.equal(sumNumbersByIndex(2512, 0, 2), 3)
    })

    it("Сумма index(0, 0) числа 2512 равна строке 3", function () {
        assert.equal(sumNumbersByIndex(2512, 0, 0), 4)
    })

    it("Сумма за пределами индекса (0, 4) числа 2512 возвращает NaN", function () {
        assert(isNaN(sumNumbersByIndex(2512, 0, 4), 'sumNumbersByIndex(2512, 0, 4) не NaN'))
    })

    it("Сумма из отрицательного индекса (1, -2) числа(2152) берёт значение с конца равна 6", function () {
        assert.equal(sumNumbersByIndex(2512, 1, -2), 6)
    })

})


/*
describe('pow', function () {
    it("Сумма 1 и 3 знака числа 2512 равна строке 4",
        assert.equal('4', 4, '4'))

    describe("возводит x в степень n", function () {


        function makeTest(x) {
            var expected = x * x * x;
            it("При возведении " + x + " в степень 3 результат: " + expected, function () {
                assert.equal(pow(x, 3), expected)
            })
        }

        for (x = 1; x <= 5; x++) {
            makeTest(x)
        }
    })


    it("При возведении в отрицательную степень результат NaN", function () {
        assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
    })

    it("При возведении в дробную степень результат NaN", function () {
        assert(isNaN(pow(2, 1.5)), "pow(2, -1) не NaN")
    })

    describe("Любое число, кроме нуля, в степени 0 равно 1", function () {
        function makeTest(x) {
            it("при возведении " + x + " в степень 0 результат: 1", function () {
                assert.equal(pow(x, 1), 1);
            })
        }

        for (var x = -5; x <= 5; x += 2) {
            makeTest(x)
        }
    })

    it("ноль в нулевой степени даёт NaN", function () {
        assert(isNaN(pow(0, 0), "0 в степени 0 не Nan"))
    })

})
*/