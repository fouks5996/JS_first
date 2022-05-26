const entrepreneurs = [
	{ first: "Steve", last: "Jobs", year: 1955 },
	{ first: "Oprah", last: "Winfrey", year: 1954 },
	{ first: "Bill", last: "Gates", year: 1955 },
	{ first: "Sheryl", last: "Sandberg", year: 1969 },
	{ first: "Mark", last: "Zuckerberg", year: 1984 },
	{ first: "Beyonce", last: "Knowles", year: 1981 },
	{ first: "Jeff", last: "Bezos", year: 1964 },
	{ first: "Diane", last: "Hendricks", year: 1947 },
	{ first: "Elon", last: "Musk", year: 1971 },
	{ first: "Marissa", last: "Mayer", year: 1975 },
	{ first: "Walt", last: "Disney", year: 1901 },
	{ first: "Larry", last: "Page", year: 1973 },
	{ first: "Jack", last: "Dorsey", year: 1976 },
	{ first: "Evan", last: "Spiegel", year: 1990 },
	{ first: "Brian", last: "Chesky", year: 1981 },
	{ first: "Travis", last: "Kalanick", year: 1976 },
	{ first: "Marc", last: "Andreessen", year: 1971 },
	{ first: "Peter", last: "Thiel", year: 1967 },
];

function year() {
	console.log("################################################");
	console.log("QUESTION 1 : Peoples of 70's");
	console.log("################################################");
	entrepreneurs.forEach((entre) => {
		if (entre.year >= 1970 && entre.year < 1980) {
			console.log(`${entre.first} ${entre.last}`);
		}
	});
}

year();

function names() {
	console.log("  ");
	console.log("################################################");
	console.log("QUESTION 2 : Tableau de noms");
	console.log("################################################");
	var array = [];
	entrepreneurs.forEach((entre) => {
		array.push(entre.first + " " + entre.last);
	});
	console.log(array);
}
names();

function age() {
	console.log("  ");
	console.log("################################################");
	console.log("QUESTION 3 : Calculer âge");
	console.log("################################################");
	entrepreneurs.forEach((entre) => {
		console.log(
			`cette année, ${entre.first} ${entre.last} à ou aurait ${
				2022 - entre.year
			} ans`
		);
	});
}
age();

function tri() {
	console.log("  ");
	console.log("################################################");
	console.log("QUESTION 4 : Trier les noms");
	console.log("################################################");
	var array = [];
	entrepreneurs.forEach((entre) => {
		array.push(entre.last);
	});
	array.sort();
	console.log(array);
}
tri();
