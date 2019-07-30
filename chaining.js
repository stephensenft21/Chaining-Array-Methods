let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
let x = 1.5
let i = 1 
let newNumber = integers

.sort(function(a,b){return b - a})

.filter(integer => integer < 19)

.map(num => (num * x) -i)

.reduce((currentTotal, newValue) => currentTotal += newValue)

let div = document.getElementById("display-container")
div.innerHTML = `${newNumber}`

console.log(newNumber)