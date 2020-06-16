let generators = require('./numberGeneration');

function getAll(keyAmount) {
	let all = [];
	while (all.length < keyAmount) {
		all.push(`${generators.siteSegment()}-${generators.keySegment(7)}`);
	}
	return all
}

function fullArrayCheck(inputArray) {
	let testArray = []
	for (let j = 0; inputArray.length > j; j++) {
		let testItem  = Array.from(inputArray[j].substring(4))
		testArray.push(testItem.map((item) => parseInt(item)).reduce((a, b) => a + b, 0))
	}
	for (let i = 0; testArray.length > i; i++) {
		if (testArray[i] % 7 === 0) {
			return console.log("All were divisible by 7", inputArray)
		} else if (testArray[i] % 7 !== 0) {
			return console.log("One of the keys is invalid")
		}
	}
}

fullArrayCheck(getAll(8))
