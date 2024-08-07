const sum = () => {
    let arr = [1, 2, 3, 4, 5]
    let sum = Number(0)
    let n = arr.length;

    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

console.log(sum());