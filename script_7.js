res = prompt("note quelque chose");

if (res.includes("?")) {
	console.log("ouais ouais");
} else if (res === res.toUpperCase()) {
	console.log("pwa calme toi ...");
} else if (res.length == 0) {
	console.log("T'es en PLS ?");
} else {
	console.log("balek");
}
