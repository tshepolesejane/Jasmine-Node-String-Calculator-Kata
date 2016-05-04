exports.add = function (numbers) {
    if(numbers.length <= 0)
        return 0;
    return convert_to_int(numbers);
}
function convert_to_int(numbers) {
    var array_string_numbers = numbers.split(/[//;\n,]/);

    var array_int_numbers = array_string_numbers.map(Number);
    check_negative_number(array_int_numbers);
    return array_int_numbers.reduce(calculate_sum);
}
function calculate_sum(total, number) {
    return total + number;
}

function check_negative_number(int_array_numbers) {
    var negative_numbers = new Array();
    for(var i =0; i < int_array_numbers.length; i++){
        if(int_array_numbers[i] < 0)
            negative_numbers.push(int_array_numbers[i]);
    }
    if(negative_numbers.length > 0)
        throw new Error(construct_error_message(negative_numbers));
}
function construct_error_message(negative_numbers) {
    return 'Negatives are not allowed: '+negative_numbers.join(', ');

}
