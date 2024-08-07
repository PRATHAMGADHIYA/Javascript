let arr = [2, 3, 4, 5, 6, 9, 10, 3];
let minvalue = arr[0]; 

let N = arr.length

for (let i = 1; i < N; i++) {
  if (arr[i] < minvalue) {
    minvalue = arr[i];
  }
}

console.log(minvalue); 