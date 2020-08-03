function fib(num: number) {
    try {
        let fibonacci = [0, 1];
        for (let i = 2; i < num + 1; i++) {
            fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
        }
        return fibonacci[num];
    } catch (err) {
        throw err;
    }
}

const fibResult1 = fib(1);
const fibResult2 = fib(3);
const fibResult3 = fib(12);

console.log('Result => ', fibResult1);
console.log('Result => ', fibResult2);
console.log('Result => ', fibResult3);
