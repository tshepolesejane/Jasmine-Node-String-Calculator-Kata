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
        numbers = numbers.replace("\n", ',')
        var numbersArray = numbers.split(',');

        for(i = 0; i < numbersArray.length; i++){
            sum += parseInt(numbersArray[i]);
        }
        return sum;
    }

}