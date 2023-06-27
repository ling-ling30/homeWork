let RandomArr = [];
let randomNumber = Math.floor(Math.random() * (50 - 1 + 1)) + 1
while (RandomArr.length>100) {
    RandomArr.push(randomNumber)
}

console.log(RandomArr)