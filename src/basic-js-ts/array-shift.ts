function shift(arr: any[], direction: string, numOfElement: number) {
    try {
        if (direction === 'left') {
            for (let i = 0; i < numOfElement; i++) {
                arr.unshift(arr.pop());
            }
        } else if (direction === 'right') {
            for (let i = 0; i < numOfElement; i++) {
                arr.push(arr.shift());
            }
        } else {
            return arr;
        }

        return arr;
    } catch (err) {
        throw err;
    }
}

const shiftResult1 = shift([1, 2, 3, 4, 5], 'left', 2);
const shiftResult2 = shift([1, 2, 3, 4, 5], 'right', 2);
const shiftResult3 = shift(['john', 'jane', 'sarah', 'alex'], 'left', 2);
const shiftResult4 = shift(['john', 'jane', 'sarah', 'alex'], 'right', 1);

console.log('Result shift left => ', shiftResult1);
console.log('Result shift right => ', shiftResult2);
console.log('Result shift left => ', shiftResult3);
console.log('Result shift right => ', shiftResult4);
