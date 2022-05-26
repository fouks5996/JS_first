let array = [];

function factorisation(arr) {
	for (let res = arr; res > 0; res--) {
		array.push(res);
	}
	return multiply();
}

function multiply() {
	var sum = 1;
	for (var i = 0; i < array.length; i++) {
		sum = sum * array[i];
	}
	return sum;
}

res = prompt("quel nombre a factoriser ?");

console.log(factorisation(res));
