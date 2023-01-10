function spreadthewealth(arr) {
    const sum = arr.reduce((total, current) => total + current);
    const remainder = sum % arr.length;
    sum = sum - remainder
    const avg = sum / arr.length;
    const newArr = arr.map(() => avg);
    if (remainder !== 0) {
        newArr.push(remainder);
    }
    return newArr;
}
