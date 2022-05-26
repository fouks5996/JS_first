const serine = ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"];
const proline = ["CCU", "CCC", "CCA", "CCG"];
const leucine = ["UUA", "UUG"];
const phénylalanine = ["UUU", "UUC"];
const arginine = ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"];
const tyrosine = ["UAU", "UAC"];

function transform(arn) {
	// Séparation des ARN par groupe de 3 englobé dans un array
	let arr = arn.match(/.{1,3}/g);
	// Parcours tout mon array if include? values et création d'un nouvel array
	const array = arr.map((element) => {
		if (serine.includes(element)) {
			return "serine";
		} else if (proline.includes(element)) {
			return "proline";
		} else if (leucine.includes(element)) {
			return "leucine";
		} else if (phénylalanine.includes(element)) {
			return "phénylalanine";
		} else if (arginine.includes(element)) {
			return "arginine";
		} else if (tyrosine.includes(element)) {
			return "tyrosine";
		}
	});
	// transformation en string
	let string = array.join("-");
	console.log(string);
}

console.log("################################################");
console.log("QUESTION 1 : Trouver le code génétique");
console.log("################################################");
transform("CCGUCGUUGCGCUACAGC");
transform("CCUCGCCGGUACUUCUCG");
