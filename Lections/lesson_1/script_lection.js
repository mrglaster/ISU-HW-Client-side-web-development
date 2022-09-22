//Включение "строгого режима". Необходим для совместимости со старыми версиями JS. 
//Автоглобал при включенном строгом режиме НЕ РАБОТАЕТ.

//"use strict";


//Глобальная область видимости. Все доступны извне. 
let a = 4;
var b = 7;

//const - используем, если значение только одно и оно не изменяется.
const c = 18;

//Локальная область видимости. Извне можно получить доступ только к var. 
{
    let d = 11;
    var v = 45; // можно работать как с переменной из глобальной области видимости 
    const l = 12;
}

// Пример объявления функции
function start(){
      // functional scope. ВСЕ типы переменных  НЕ могут быть прочитаны извне. В том числе и var.
      let _a = 1;
      var _B = 2;
      const _c = 3;
      
}

//Автоглобал. Где-то плачет разработчик на C++. С use strict НЕ РАБОТАЕТ!
mySuperFunction();
console.log(myVar);
function mySuperFunction(){
    myVar = "Hello";
}

//Операторы сравнения.
console.log(2=='2'); //Сравнение БЕЗ УЧЕТА ТИПА ПЕРЕМЕННЫХ. Выведет true
console.log(2==='2'); //Сравнение с УЧЕТОМ ТИПА ПЕРЕМЕННЫХ. Выведет false.


// Пример использования тернарного оператора. Эдакая замена If-else при присваивании значения переменной. 
let a_1 = Math.random();
console.log(a_1);
let b_1 = a_1 < 0.5 ? 'less' : 'more or equal';
console.log(b);

//Оператор нулевого слияния
var c_1 = a_1 <0.5 ?  null : 'more c';
var c_3 = c_1 ?? 'less'; //Если Null или Undefined - вернёт less
console.log(c_3);

//Оператор typeof
console.log(typeof(null));
console.log(typeof(42));
console.log(typeof("YaY"));
console.log(typeof(Undefined)); 
