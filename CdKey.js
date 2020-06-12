function siteNumber(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min
}

function siteSegment() {
	const excludedSite = [333, 444, 555, 666, 777, 888, 999];
	do {
		var siteValues = siteNumber(100, 999)
	} while (excludedSite.includes(siteValues))
	return siteValues
}

function generateRandomInteger(min, max, amount) {
	let digits = [];
	for (let i = 0; amount > i; i++) {
		digits.push(Math.floor(Math.random() * (max - min + 1)) + min)
	}
	return digits
}

function keySegment() {
	let correctKey = false
	while (!correctKey) {
		let secondDigits = generateRandomInteger(0, 9, 7);
		let i = secondDigits.reduce((a, b) => a + b, 0)
		if (i % 7 === 0 && secondDigits[secondDigits.length - 1] <= 7) {
			correctKey = true
			return secondDigits.join('');
		} else {
			secondDigits.length = 0
			generateRandomInteger(0, 9, 7);
		}
	}
}

function generateKeys() {
	let all = [];
	while (all.length < 8) {
		all.push(`${siteSegment()}-${keySegment()}`);
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

fullArrayCheck(generateKeys())
