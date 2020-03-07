function randomCheck() {
	let randomValue = Math.round(Math.random() * 1000)
	return randomValue;
}

let firstValue = randomCheck();
let secondValue = randomCheck();
let thirdValue = randomCheck();
let fourthValue = randomCheck();
let fifthValue = randomCheck();

console.log(firstValue, secondValue, thirdValue, fourthValue, fifthValue)

let minValue = Math.min(firstValue, secondValue, thirdValue, fourthValue, fifthValue)
let maxValue = Math.max(firstValue, secondValue, thirdValue, fourthValue, fifthValue)

console.log("Maximum value :: ", maxValue)
console.log("Minimum value :: ", minValue)
