let arr = [2, 3, 4, 50, 6, 9, 10, 3];
let maxvalue = arr[0]; 

let N = arr.length

for (let i = 1; i < N; i++) {
  if (arr[i] > maxvalue) {
    maxvalue = arr[i];
  }
}

console.log(maxvalue); 