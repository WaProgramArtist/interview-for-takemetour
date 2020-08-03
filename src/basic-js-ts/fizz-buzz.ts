function fizzBuzz(num: number) {
    try {
        let message = '';

        num % 3 === 0 && num % 5 === 0
            ? (message = 'FizzBuzz')
            : num % 3 === 0
            ? (message = 'Fizz')
            : num % 5 === 0
            ? (message = 'Buzz')
            : (message = `''`);

        return message;
    } catch (err) {
        throw err;
    }
}

const fizzBuzzResult1 = fizzBuzz(21);
const fizzBuzzResult2 = fizzBuzz(25);
const fizzBuzzResult3 = fizzBuzz(9);
const fizzBuzzResult4 = fizzBuzz(5);
const fizzBuzzResult5 = fizzBuzz(45);
const fizzBuzzResult6 = fizzBuzz(11);

console.log('Result => ', fizzBuzzResult1);
console.log('Result => ', fizzBuzzResult2);
console.log('Result => ', fizzBuzzResult3);
console.log('Result => ', fizzBuzzResult4);
console.log('Result => ', fizzBuzzResult5);
console.log('Result => ', fizzBuzzResult6);
