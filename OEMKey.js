let generators = require('./numberGeneration');

function  generateYear(min, max) {
	return (Math.floor(Math.random() * (max - min + 1)) + min).toString().slice(-2)
}

function concatKey(firstString, secondString, thirdSegment, fourthSegment, amount = 1) {
	let firstSegment = []
	for (let i = 0; amount > i; i++) {
		firstSegment.push(firstString() + secondString() + '-OEM' + '-' + thirdSegment() + '-' + fourthSegment() )
	}
	return firstSegment
}

function randomNumbers() {
	let newNumbers = []
	newNumbers.push(Math.floor(Math.random() * 90000) + 10000);
	return newNumbers
}


const OEMKey = concatKey(generators.siteNumber.bind(null,100, 366), generateYear.bind(null, 1995, 2003), generators.keySegment.bind(null, 6, true), randomNumbers, 7)
console.log(OEMKey)
