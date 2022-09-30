function read_array(){
    let current_string = prompt();
    return current_string.split(" ");
}


function get_obj_fromkb(){
    let arr_1 = read_array();
    let arr_2 = read_array();
    let result = {};
    if (arr_1.length == arr_2.length){
        for(let i=0; i<arr_1.length; i++){
            result[arr_1[i]] = arr_2[i];
        }
    }
    return result;
}

function transform_obj(our_object){
    let result_matrix = [];
    for (const i of Object.keys(our_object)){
        let current_array = [];
        current_array.push(i);
        current_array.push(our_object[i]);
        result_matrix.push(current_array);
    }
    return result_matrix;
}

// Keyboard input
let object_1 = get_obj_fromkb();
console.log(transform_obj(object_1));