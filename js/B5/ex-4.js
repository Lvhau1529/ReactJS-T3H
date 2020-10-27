// OPP JS next

class Animals {
	color = "Black";
	weight = 100;
	age = 3;

	constructor() {
		console.log("Day la constructor cua Class cha");
	};

	sanMoi(name) {
		return `Bat con ${name}`;
	};
}

// Class Cats ke thua class Animal: tu khoa extends
class Cats extends Animals {
	// override ghi de phuong thuc
	constructor() {
        super() // Chay Constructor cua Class cha
		console.log("Day la Constructor cua Class con");
	};

	sanMoi(name) {
		return `Nam ngu khong bat con ${name} `;
	};

	diNgu() {
		return `${super.sanMoi("Con chim")} ma di ngu`;
	};
}

let cat = new Cats();
console.log(cat.color);
console.log(cat.sanMoi("Chuot"));
console.log(cat.diNgu());
