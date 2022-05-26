function pyramid() {
	var output = "";
	for (var i = 1; i <= res; i++) {
		for (var j = 1; j <= i; j++) {
			output += "#";
		}
		console.log(output);
		output = "";
	}
}

var res = 0;
res = prompt("ton chiffre");

pyramid();
