// Лекция №2: Массивы
// Массив в JS - объекты. 



//Пример инициализации
let arr = ['Москва', 'Иркутск'];

//Первый элемент
console.log(arr[0]);

//Последний элемент
console.log(arr.at(-1));

//Размер массива
console.log(arr.length);

//В JS мы можем запихать данные нескольких типов в один массив
//И ничего за это нам не будет =)
arr[2]=50;
arr[3]=true;
console.log(arr);

//Добавление элементов в массив
arr.push("1","2");
console.log(arr);

//Добавить элемент в начало массива
arr.unshift(1,2,3,4,34)
console.log(arr);

//Получаем последний элоемент массива и удаляем его из массива
const a = arr.pop();
console.log(a);
console.log(arr);

//Получаем первый элемент массива и удаляем его из массива
const b = arr.shift();
console.log(b);
console.log(arr);


//Перебор всех элементов массива (по индексу)
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//Перебор всех элементов массива по ключам. i -индекс
for(const i in arr){
    console.log(i);
}

//Перебор всех элементов массива по значениям.
for(const i of arr){
    console.log(i);
}