const str = "ggggggguuujjsjjjjjlllllpppppwpppdddkkkffffapds";
//Результат: g7u3j2s1j5l5p4w1p3d3k3f4a1p1d1s1

function transform_string(string) {
    counter = 0;
    current_char = str[0];
    result_string = "";
    for (let i of str) {
        if (i == current_char) counter++;
        else {
            result_string += current_char;
            result_string += counter;
            current_char = i;
            counter = 1;
        }
    }
    result_string += current_char;
    result_string += counter;
    return result_string;
}

console.log(transform_string(str));
