// Программа - простой калькулятор. На ввод подаюьтся 2 числа и оператор. 

var operators = ['+', '-', '*', '/', '%'];

function readnumber(numpos) {
    var curnumber = prompt("Введите число номер " + numpos);
    curnumber = parseFloat(curnumber);
    if (isNaN(curnumber)) {
        alert("Это не число!");
        return readnumber(numpos);
    }
    return curnumber;
}

function is_operator(value) {
    for (var i = 0; i < 5; i++) {
        if (value == operators[i]) return true;
    }
    return false;
}

function read_operator() {
    var operator = prompt("Введите оператор");
    if (is_operator(operator)) {
        return operator;
    }
    alert("Не оператор!");
    return read_operator();
}

function start() {
    var a = readnumber("1");
    var b = readnumber("2");
    var oper = read_operator();
    var result = eval(a + oper + b);
    alert(result);
}

start();
