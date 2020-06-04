let excludedSite = [333, 444, 555, 666, 777, 888, 999];
let siteValues = 0;
let fullNumber = 0;
let digits = [];
let all = [];

function siteSegment(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min
}

function checkValidation() {
	do {
		siteValues = siteSegment(100, 999)
	} while (excludedSite.includes(siteValues))
	return siteValues
}

function generateRandomInteger(min, max, amount) {
	for (let i = 0; amount > i; i++) {
		digits.push(Math.floor(Math.random() * (max - min + 1)) + min)
	}
}

function checkSecond() {
	let correctKey = false
	while (!correctKey) {
		let i = digits.reduce((a, b) => a + b, 0)
		if (i % 7 === 0 && digits[digits.length - 1] <= 7) {
			correctKey = true
		} else {
			digits.length = 0
			i = digits.reduce((a, b) => a + b, 0)
			generateRandomInteger(0, 9, 7);
			fullNumber = digits.join('');
		}
	}
}

function getAll() {
	checkSecond()
	while (all.length < 8) {
		generateRandomInteger(0, 9, 7);
		checkValidation()
		checkSecond()
		all.push(`${siteValues}-${fullNumber}`);
	}
}

function fullArrayCheck() {

	let testArray = []
	for (let j = 0; all.length > j; j++) {
		let testItem  = Array.from(all[j].substring(4))
		testArray.push(testItem.map((item) =>parseInt(item)).reduce((a, b) => a + b, 0))
	}

	for (let i = 0; testArray.length > i; i++) {
		if (testArray[i] % 7 === 0) {
			return console.log("All were divisible by 7")
		} else if (testArray[i] % 7 !== 0) {
			return console.log("One of the keys is invalid")
		}
	}
}
getAll()
fullArrayCheck()
console.log(all)
