function cast2_numarray(i_array) {
    var number_array = [];
    for (let i = 0; i < i_array.length; i++) {
        number_array.push(parseFloat(i_array[i]));
    }
    return number_array;
}

function read_array() {
    let current_string = prompt();
    return cast2_numarray(current_string.split(" "));
}

function smooth_array(num_array) {
    let smoothed_array = [];
    smoothed_array.push(num_array[0]);
    for (let i = 1; i < num_array.length - 1; i++) {
        smoothed_array.push(parseFloat((num_array[i] + num_array[i - 1] + num_array[i + 1]) / 3));
    }
    smoothed_array.push(num_array[num_array.length - 1]);
    return smoothed_array;

}

let b = read_array();
console.log(b);
let result = smooth_array(b);
console.log(result);
