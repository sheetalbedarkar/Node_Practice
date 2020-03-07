let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countNames = names.reduce((allNames, name) => {
	if (name in allNames) {
		allNames[name]++
	}
	else {
		allNames[name] = 1
	}
	return allNames
}, {})
console.log(countNames);
