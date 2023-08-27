function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let result = randomNumber(0, 100);
console.log(result);