

//1.1. Составить программу, проверяющую, будут ли взаимно просты два натуральных (целых) числа.
function isRelativePrime(num1, num2){
    while(num1!=0 && num2!=0){
        if(num1>num2) num1 = num1%num2;
        else num2 = num2%num1;
    }
    if(num1+num2==1) return true;
    return false;
}


// 1.2 Составить программу, проверяющую, будет ли простым данное натуральное число.
function isPrime(num1){
    if(num1<0) return false;
    for(let i =2; i<Math.ceil(Math.sqrt(num1))+1; i++){
        if(num1%i==0) return false;
    }
    return true;
}


//1.3 Напишите программу, которая выводит на экран все простые числа из интервала 1..N, используя решето Эратосфена
function eratosphene(n) {
    var arr = [],
    p = 2;
    for(var i=0; i<=n; i++) arr.push(true);
    while(p*p<n) {
        for(var i=2*p; i<=n; i+=p) {
            arr[i] = false;
        }
        for(i=p+1; i<=n;i++) {
            if(arr[i]) {
                p=i;
                 break;
            }
        }
    }
    var simpleNumbers = [];
    for(i=1; i<=n; i++) {
        if(arr[i]) {
            simpleNumbers.push(i);
        }
    }
    return simpleNumbers;
}

// 1.4 Написать программу, которая выводит на экран первые N простых чисел.
function nFirstPrime(num){
    if(num<=0) return null;
    let number = 0 ;
    let start = 1;
    let result = [];
    while(number<num){
        if(isPrime(start)){
             number++;
             result.push(start);
        }
        start++;
    }
    return result;
}


//1.5 Найти все делители натурального числа N.
function allDividers(num){
    let result = [];
    for(let i = 1; i<=num; i++){
        if(num%i==0) result.push(i);
    }
    return result;
}

//1.6 Разложить целое число на простые множители. Вывести на экран все простые множители (в порядке возрастания) и их порядки.
function simpleDividers(num){
    let source_num = num
    let current_divider = 2;
    let result = []
    while (current_divider< num || !isPrime(current_divider)){
        if(num%current_divider==0){
            num/=current_divider;
            result.push(current_divider);
        }
        else{
            current_divider+=1;
        }
    }
    result.push(num);

    var result_byotiful = {};
    result.forEach(function(a){
    if (result_byotiful[a] != undefined)
        ++result_byotiful[a];
    else
    result_byotiful[a] = 1;
    });
    let result_string = "";
    for (var key in result_byotiful) result_string+=key+"^"+result_byotiful[key]+" * ";   
    console.log("All simple dividers of number "+source_num+" : "+ result_string.slice(0, result_string.length - 2));
    return result;
}



/*1.7 Натуральное число называется совершенным, если оно равно сумме всех
своих делителей, включая единицу. Вывести первые N (N<5) совершенных
чисел на экран.
*/

function is_perfect(number) {
    var temp = 0;
    for(var i=1;i<=number/2;i++) {
        if(number%i === 0) {
            temp += i;
        }
    }
    if(temp === number && temp !== 0) return true;
    return false; 
} 

function firstNPrefect(N){
    if(N>5){
        console.log("NEIN!");
        return null;
    }
    var current_num = 1;
    var prefects = [];
    while(prefects.length<N){
        if(is_perfect(current_num)) prefects.push(current_num);
        current_num+=1;
    }
    return prefects;
}



// 1.8  Проверить, какие нечетные натуральные числа из интервала N..M можно представить в виде суммы трех простых чисел.
function threeSimpleSummCheck(n, m){
    //https://ru.wikipedia.org/wiki/Проблема_Гольдбаха
    result = []
    for(let i=n; i<m; i++){
        if(i%2!=0 && i>7){
            result.push(i);
        }
    }
    return result;
}

// 1.9 Проверить, будет ли данное число числом Фибоначчи.
function is_square(num){
    let result = parseInt(Math.sqrt(num));
    if(result*result==num) return true;
    return false;
}

function isFibonacci(num){
    if (is_square(5*(num*num)-4) || is_square(5*(num*num)+4)) return true;
    return false; 
}

// 1.10 Вычислить (N)!!, где (2N)!! = 2*4*...*(2N) , (2N+1)!!  = 1*3*...*(2N+1).
function weirdFactorial(n){
    var result_value = 1;
    var end = 2*n;
    if(n%2!=0) end++;
    for(let i=2;i<end; i++){
        if(n%2==0 && i%2==0 || n%2!=0 && i%2!=0) result_value*=i;
    }
    return result_value;
}

// 1.11 Найти все различные пифагоровы тройки из интервала от N до М.
function piphagorThrees(n,m){
    let temp = 0;
    if(n>m){
        temp = n;
        n = m;
        m = temp;
    }
    for(let i=n; i<m; i++)
        for(let j=n; j<m; j++)
            for(let k=n; k<m; k++) if(i*i+j*j==k*k) console.log("{"+i+" ; "+ j+" ; "+k+" }");
            
}




// 1.12  Написать программу умножения (деления) двух данных рациональных чисел. 
//Ответ должен быть несократимой дробью.

function short_ratio(n ,m){
    let current_limit = 0;
    if(n>m) current_limit = m;
    else current_limit = n;
    for(let i=0; i<current_limit; i++){
        if(n%i==0 && m%i==0) n/=i, m/=i;
    }
    return n+"/"+m;
}


function ratioMulDiv(numerator_1, denumerator_1, numerator_2, denumerator_2){
   let a_m = numerator_1*numerator_2;
   let b_m = denumerator_1*denumerator_2;

   let a_d =numerator_1*denumerator_2;
   let b_d = denumerator_1*numerator_2;

   console.log("Mul result: "+ short_ratio(a_m, b_m));
   console.log("Divide result: "+short_ratio(a_d, b_d));


}


//1.13 Написать программу сложения (вычитания) двух данных рациональных чисел. Ответ должен быть несократимой дробью.
function ratioSumDif(numerator_1, denumerator_1, numerator_2, denumerator_2){
    let a_s = numerator_1*denumerator_2+numerator_2*denumerator_1;
    let b_s = denumerator_1*denumerator_2;
    let a_d = numerator_1*denumerator_2-numerator_2*denumerator_1;
    console.log("Sum result: "+ short_ratio(a_s, b_s));
    console.log("Dif result: "+short_ratio(a_d,b_s));
}

//1.14 Найти все целые числа из интервала от N до M, которые делятся на каждую из своих цифр.
function findDividableBEveryDigit(n, m){
    var retArr = [];
    let val = 0;
    let flag = true;
    for(var i = n, sum = 0, t=0; i <= m; ++i, sum = 0) {
       t = i;
       flag = true;
       while ( t > 0 ) {
          val = t%10;
          if(val!=0 && i%val!=0) {
            flag = false;
            break;
          }
          t = Math.floor(t / 10);
       }
       if(flag) retArr.push(i);
    }
    return retArr;
}



//1.15 Найти все целые числа из интервала от N до M, которые делятся на сумму всех своих цифр.
function get_numbersumm(n){
    var sum = 0;
    var temp = 0;
    while(n){
        temp = n%10;
        n = (n-temp)/10;
        sum+=temp;
    }
    return sum;
}

function allDividableSumm(n,m){
    var result = []
    for(let i=n; i<m; i++){
        if(i%get_numbersumm(i)==0) result.push(i);
    }
    return result;
}




function main(){   
    // для номера 1.1
    console.log(isRelativePrime(5,10));
    console.log(isRelativePrime(2,3));

    //для 1.2
    console.log(isPrime(4));
    console.log(isPrime(3));

    // для 1.3
    console.log(eratosphene(15));

    //Для 1.4
    console.log(nFirstPrime(5));

    //Для 1.5
    console.log(allDividers(6));

    //Для 1.6
    simpleDividers(20);

    //Для 1.7
    console.log(firstNPrefect(3));

    //Для 1.8
    console.log(threeSimpleSummCheck(20));

    //Для 1.9
    console.log(isFibonacci(8));
    console.log(isFibonacci(41));

    // Для 1.10 
    console.log(weirdFactorial(14));

    //Для 1.11
    piphagorThrees(1,20);

    //Для 1.12
    ratioMulDiv(9, 7, 14, 5);

    //Для 1.13
    ratioSumDif(2,3 ,3 ,5);

    //Для 1.14
    console.log(findDividableBEveryDigit(11,22));

    //Для 1.15
    console.log(allDividableSumm(10,20));
}

main();
