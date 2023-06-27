let randomArr = [];
let oddArr = [];
let evenArr = []

while (randomArr.length<100) {
    let randomNumber = Math.floor(Math.random() * (50)) + 1
    randomArr.push(randomNumber)
}

console.log(randomArr)
console.log(randomArr.length)

for (let i in randomArr){
    if (i % 2 === 0){
        evenArr.push(randomArr[i])
    }else {oddArr.push(randomArr[i])}
}

function minimalValue(arr){
    let minVal = arr[0]
    for (let i in arr){
        if (arr[i] < minVal) {
            minVal = arr[i]
        }
    }
    return minVal
}


function maximalValue(arr){
    let maxVal = arr[0]
    for (let i in arr){
        if (arr[i] > maxVal) {
            maxVal = arr[i]
        }
    }
    return maxVal
}
function totalSum (arr) {
    let total = 0 ; 
    for (let i in arr) {
        total += arr[i]
    }
    return total
}

function averageValue (arr) {
    return totalSum(arr) / arr.length
}

console.log(`Value paling kecil dari array ganjil adalah ${minimalValue(oddArr)}` ,`Value paling kecil dari array genap adalah ${minimalValue(evenArr)}` )
console.log(`Value paling besar dari array ganjil adalah ${maximalValue(oddArr)}` ,`Value paling besar dari array genap adalah ${maximalValue(evenArr)}` )
console.log(`total nilai dari array ganjil adalah ${totalSum(oddArr)}`, `total nilai dari array genap adalah ${totalSum(evenArr)}`)
console.log(`rata-rata nilai dari array ganjil adalah ${averageValue(oddArr)}`, `rata-rata nilai dari array genap adalah ${averageValue(evenArr)}`)


