// Tim hieu generator function
//  Su dung theo mau ham: declare function khong su dung arrow function - express function

function* demo() {
	// generator function
	let index = 1;
	while (index < 4) {
		yield index++; // Xu ly tuan tu
	}
}
let generator = demo();
console.log(generator, typeof generator);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());



