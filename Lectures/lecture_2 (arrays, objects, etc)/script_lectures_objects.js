// Лекция 2: Объекты
// А-ля "Словари" в Python


//Пример инициализации
const obj = {
    name: 'joe',
    age: '42'
};

//Как получить значения
console.log(obj.age);
console.log(obj['name']);

//Добавление новых свойств
obj.city='NY';
console.log(obj.city);
obj['Birhtdate'] = "02.03.2003";
console.log(obj.Birhtdate);

//Да, так тоже можно
const obj_1 = {
    let:"123",
    const:"1235"
};
console.log(obj_1);

//Считывание ключа и значения с клавиатуры. Первый и второй варианты - эквивалентны
let new_value = prompt();
let new_key = prompt();
const new_object = {
    [new_key]: new_value
};
console.log(new_object);
new_object[new_key] = new_value;

let workername = prompt();
//Ключ - workername, значение - переменная workername
const obj3 = {
    workername
};
console.log(obj3);

//Все ключи и все значения объекта
let all_keys = Object.keys(obj);
let all_values = Object.values(obj);