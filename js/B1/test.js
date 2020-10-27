function* test() {
	let index = 1;
	while(index < 3)
	yield index ++
}

let gen = test()
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().done);
