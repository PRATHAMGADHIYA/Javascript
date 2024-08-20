const counters = document.querySelectorAll('.counter1');

console.log(counters);

counters.forEach(counter => {
    counter.innerHTML = '0';

    let target = counter.getAttribute('data-target');
    console.log(target);

    let inc = target / 200;
    let count = 0

    const incrementcounter = () => {
        if (count < target) {
            count += 1;
            counter.innerText = count;
            setInterval(incrementcounter, 100)
        }
        else {
            clearInterval(interval);
            counter.innerText = target;
        }
    }
    incrementcounter();

});

const counters2 = document.querySelectorAll('.counter2');

console.log(counters2);

counters2.forEach(counter => {
    counter.innerHTML = '0';

    let target = counter.getAttribute('data-target');
    console.log(target);

    let inc = target / 100;
    let count = 0

    const incrementcounter = () => {
        if (count < target) {
            count += 1;
            counter.innerText = count;
            setInterval(incrementcounter, 300)
        }
        else {
            clearInterval(interval);
            counter.innerText = target;
        }
    }
    incrementcounter();

});

const counters3 = document.querySelectorAll('.counter3');

console.log(counters3);

counters3.forEach(counter => {
    counter.innerHTML = '0';

    let target = counter.getAttribute('data-target');
    console.log(target);

    let inc = target / 100;
    let count = 0

    const incrementcounter = () => {
        if (count < target) {
            count += 1;
            counter.innerText = count;
            setInterval(incrementcounter, 400)
        }
        else {
            clearInterval(interval);
            counter.innerText = target;
        }
    }
    incrementcounter();

});

const counters4 = document.querySelectorAll('.counter4');

console.log(counters4);

counters4.forEach(counter => {
    counter.innerHTML = '0';

    let target = counter.getAttribute('data-target');
    console.log(target);

    
    let count = 0

    const incrementcounter = () => {
        if (count < target) {
            count += 1;
            counter.innerText = count;
            setInterval(incrementcounter, 500)
        }
        else {
            clearInterval(interval);
            counter.innerText = target;
        }
    }
    incrementcounter();

});




