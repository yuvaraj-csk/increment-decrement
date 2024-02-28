const incrementFunction = () => {
    console.log(`increment logged!`)
    const numberElement = document.getElementById("counter-number");
    const number = parseInt(numberElement.textContent);
    console.log(number);
    numberElement.innerHTML = number + 1;

}

const decrementFunction = () => {
    console.log(`decrement logged!`)
    const numberElement = document.getElementById("counter-number");
    const number = parseInt(numberElement.textContent);
    console.log(number);
    numberElement.innerHTML = number - 1;
}