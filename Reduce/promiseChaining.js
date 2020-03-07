let runPromiseInSequence = (arr, input) => {
	return arr.reduce(
		(promiseChain, currentFunction) => promiseChain.then(currentFunction),
		Promise.resolve(input)
	)
}

let p1 = a => {
	return new Promise((resolve, reject) => {
		resolve(a * 5)
	})
}

let p2 = a => {
	return new Promise((resolve, reject) => {
		resolve(a * 2)
	})
}

let f3 = a => {
	return a * 3
}

let p4 = a => {
	return new Promise((resolve, reject) => {
		resolve(a * 4)
	})
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
	.then(console.log)