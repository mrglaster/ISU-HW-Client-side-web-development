function is_object(our_object){
    if(typeof(our_object)=='object' && !Array.isArray(our_object) && our_object!=null && our_object!=NaN && our_object!=undefined) return true;
    return false;
}

let a = {
    test:"Yes"
};

let b = [];
let c = NaN;
let d = null;
let f = "lol";
let g = 42;

console.log(is_object(a));
console.log(is_object(b));
console.log(is_object(c));
console.log(is_object(d));
console.log(is_object(f));
console.log(is_object(g));