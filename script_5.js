const books = [
	{ title: "Gatsby le magnifique", id: 133712, rented: 39 },
	{ title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
	{ title: "Orgueil & Préjugés", id: 873495, rented: 67 },
	{ title: "Les frères Karamazov", id: 450911, rented: 55 },
	{ title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
	{ title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
	{ title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
	{ title: "Le meilleur des mondes", id: 88847, rented: 58 },
	{ title: "La disparition", id: 364445, rented: 33 },
	{ title: "La lune seule le sait", id: 63541, rented: 43 },
	{ title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
	{ title: "Guerre et Paix", id: 748147, rented: 1 },
];

function rent() {
	console.log("################################################");
	console.log("QUESTION 1 : Les livres tous empruntés ?");
	console.log("################################################");
	// J'isole les nombres voulus dans un tableau
	var arr = [];
	books.forEach((book) => {
		arr.push(book.rented);
	});

	// Je stocke la longueur de mon tableau
	let longueur = arr.length;

	// Je filtre les livres qui été emprunté 0 fois
	let res = arr.filter((e) => e >= 1);

	// Puis je compare les 2 longueurs
	// et j'affiche un résultat selon la condition
	if (res.length == longueur) {
		console.log("Tout les livres ont été emprunté au moins une fois");
	} else {
		console.log("Tout les livres n'ont pas été emprunté");
	}
}
rent();

function maxBook() {
	console.log("  ");
	console.log("################################################");
	console.log("QUESTION 2 : Livre le plus emprunté");
	console.log("################################################");
	// J'isole les nombres voulus dans un tableau
	var arr = [];
	books.forEach((book) => {
		arr.push(book.rented);
	});

	// je stocke la valeur la plus haute de mon tableau
	var maxValue = Math.max.apply(Math, arr);

	// je match la valeur la plus haute avec celle des livres empruntés
	books.forEach((book) => {
		if (book.rented == maxValue) {
			console.log(`le livre le plus emprunté est : ${book.title}`);
		}
	});
}

maxBook();

function minBook() {
	console.log("  ");
	console.log("################################################");
	console.log("QUESTION 3 : Livre le moins emprunté");
	console.log("################################################");
	// J'isole les nombres voulus dans un tableau
	var arr = [];
	books.forEach((book) => {
		arr.push(book.rented);
	});

	// je stocke la valeur la plus basse de mon tableau
	var minValue = Math.min.apply(Math, arr);

	// je match la valeur la plus haute avec celle des livres empruntés
	books.forEach((book) => {
		if (book.rented == minValue) {
			console.log(`le livre le moins emprunté est : ${book.title}`);
		}
	});
}
minBook();

function idBook(nb) {
	console.log("  ");
	console.log("################################################");
	console.log("QUESTION 4 : Chercher le livre avec un ID");
	console.log("################################################");
	books.forEach((book) => {
		if (book.id == nb) {
			console.log(`le livre avec l'id ${nb} est : ${book.title}`);
		}
	});
}
idBook(873495);

function removeBook(deleted) {
	console.log("  ");
	console.log("################################################");
	console.log("QUESTION 5 : Supprimer un livre");
	console.log("################################################");
	var index = books.filter(function (element) {
		return element.id != deleted;
	});
	console.log(index);
}
removeBook(133712);

function tri() {
	console.log("  ");
	console.log("################################################");
	console.log("QUESTION 2 : Trier les livres");
	console.log("################################################");
	var deleted = 133712;
	let index = books.filter(function (element) {
		return element.id != deleted;
	});
	order = index.sort((a, b) => a.title.localeCompare(b.title));
	console.log(order);
}
tri();
