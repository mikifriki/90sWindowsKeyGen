function siteNumber(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min
}

function siteSegment(siteValues) {
	const excludedSite = [333, 444, 555, 666, 777, 888, 999];
	do {
		siteValues = siteNumber(100, 999)
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

function keySegment(nbr,flag = false) {
	let correctKey = false
	while (!correctKey) {
		let secondDigits = generateRandomInteger(0, 9, nbr);
		if (flag === true) {secondDigits[0] = 0}
		let i = secondDigits.reduce((a, b) => a + b, 0)
		if (i % 7 === 0  && secondDigits[secondDigits.length - 1] !== 0 && secondDigits[secondDigits.length - 1] <= 7)  {
			correctKey = true
			return secondDigits.join('');
		} else {
			secondDigits.length = 0
		}
	}
}

module.exports = { siteNumber, siteSegment, keySegment }
