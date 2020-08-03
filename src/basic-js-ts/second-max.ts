function removeDuplicateNumber(data: number[]) {
    return data.filter((item, index) => data.indexOf(item) === index);
}

function sortDescending(data: number[]) {
    if (data.length === 1) {
        return data;
    }

    const sortResult = data.sort((a, b) => {
        return b - a;
    });

    return sortResult;
}

function getSecondMax(arr: number[]) {
    if (arr.length > 1) {
        return arr[1];
    } else {
        return arr[0];
    }
}

function secondMax(arr: number[]) {
    try {
        if (arr.length < 1) {
            return 'Error!';
        }

        const cleanData = removeDuplicateNumber(arr);
        const sortResult = sortDescending(cleanData);

        return getSecondMax(sortResult);
    } catch (err) {
        throw err;
    }
}

const secondMaxResult1 = secondMax([1, 2, 3, 4, 5]);
const secondMaxResult2 = secondMax([9, 2, 21, 21]);
const secondMaxResult3 = secondMax([4, 4, 4, 4, 4]);
const secondMaxResult4 = secondMax([4123]);
const secondMaxResult5 = secondMax([]);

console.log('Second max result => ', secondMaxResult1);
console.log('Second max result => ', secondMaxResult2);
console.log('Second max result => ', secondMaxResult3);
console.log('Second max result => ', secondMaxResult4);
console.log('Second max result => ', secondMaxResult5);
