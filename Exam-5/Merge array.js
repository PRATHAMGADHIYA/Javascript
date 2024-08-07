const mergearr = () => {

    let arr1 = [1, 2, 3]
    let arr2 = [4, 5, 6]
    let arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr3.push(arr2[i]);
    }
    
    console.log(arr3);
}
mergearr();
