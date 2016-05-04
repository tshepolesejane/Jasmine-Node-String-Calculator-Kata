exports.add = function (numbers) {
    if(numbers=== '')
        return 0;
    var total = Sum(numbers)
    return total
};

function Sum(numbers) {
    var sum = 0;
    if(numbers.indexOf(',') < 1){
        return parseInt(numbers)
    }else {
        numbers = numbers.replace("\n", ',');
        var stringNumbersArray = numbers.split(',');

        var intNumbersArray = stringNumbersArray.map(Number);

        sum =intNumbersArray.reduce(getTotal)
        return sum;
    }

}

function getTotal(total, number) {
    number = ignoreNumbersLargerThan1000(number);
    return total + throwErrorForNegativeNumbers(number);
}

function throwErrorForNegativeNumbers(num) {
    if(num <0 )
        throw new Error('Negatives are not allowed')
    return num
}

function ignoreNumbersLargerThan1000(num) {
    if(num >100)
        return 0
    return num
}