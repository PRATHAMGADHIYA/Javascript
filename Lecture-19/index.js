const counters = document.querySelectorAll('.counter');

console.log(counters);

counters.forEach(counter => {
    counter.innerHTML = '0';

    let target = +counter.getAttribute('data-target');
    console.log(target);

    let inc = target / 200;
    let count = 0

    const incrementcounter = () => {
        if (count < target) {
            count++;
            counter.innerText = count;
            setInterval(incrementcounter, 100)
        }
        else {
            clearInterval(interval);
            counter.innerText = target;
        }
    }
    incrementcounter();

})

