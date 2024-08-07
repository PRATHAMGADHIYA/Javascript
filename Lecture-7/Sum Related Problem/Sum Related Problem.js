const sum = () => {
    let even = 0
    let odd = 0
    let N =document.getElementById("input").value;

    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            even += i
        }
        else {
            odd += i
        }
    }

    if (even > odd) {
        document.getElementById('result').innerHTML="even";
    }
    else {
        document.getElementById('result').innerHTML="odd";
    }
}
