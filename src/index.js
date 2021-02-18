module.exports = function toReadable(number) {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const h = ["hundred"];
    let res = [];

    if (number <= 9) res.push(numbers[number]);
    else if (number >= 10 && number <= 19) res.push(teens[number - 10]);
    else if (number / 10 < 10 && number % 10 === 0)
        res.push(tens[number / 10 - 1]);
    else if (number / 100 < 10 && number >= 100) {
        const numberOfHundreds = Math.floor(number / 100);

        res.push(numbers[numberOfHundreds]);
        res.push(h);
        const tens = number % 100;
        if (tens > 0) {
            let readableTens = findtens(tens);
            res.push(readableTens);
        }
    } else {
        numberArr = String(number).split("");
        res.push(tens[numberArr[0] - 1]);
        res.push(numbers[numberArr[1]]);
    }

    function findtens(number) {
        let res = [];
        if (number <= 9) res = numbers[number];
        else if (number >= 10 && number <= 19) res = teens[number - 10];
        else if (number / 10 < 10 && number % 10 === 0)
            res = tens[number / 10 - 1];
        else {
            numberArr = String(number).split("");
            res.push(tens[numberArr[0] - 1]);
            res.push(numbers[numberArr[1]]);
            res = res.join(" ");
        }
        return res;
    }
    res = res.join(" ");
    return res;
};
