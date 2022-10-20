function fast_factorial(n) {
    if (n == 1) return 1;
    return n * fast_factorial(n - 1);
}


function solve(n) {
    let factor = BigInt(fast_factorial(n));
    let mulrsult = BigInt(1);
    for (let i = 1; i <= n; i++) {
        mulrsult *= BigInt(i + n);
    }
    console.log((mulrsult / factor / BigInt(n + 1)).toString());
}

number = prompt("Input the number");
solve(parseInt(number, 10));
