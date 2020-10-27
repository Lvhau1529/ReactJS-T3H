// Lam viec voi object trong JS
// Khai bao object
let person = {}; // Khai bao mot object person
let car = {
	name: "BMW",
	color: "white",
	money: "100$",
	weight: 100,
	start: function (place) {
		return `Xe ${this.name} xuat phat tai ${place}`;
	},
	stop: (place) => {
		// this != car, this === window
		return `Xe ${this.name} tam dung o ${place}`;
	},
};

let nameCar = car.name; // car['name']
console.log(nameCar);
console.log(car.start("Ha Noi"));
console.log(car.stop("Sai Gon"));

let cat = {
	name: "Tom",
	color: "black",
	age: 40,
};
for (let i in cat) {
	console.log(cat[i], i);
}

// Them phan tu vao object
const student = { name: "Van Teo", age: 21 };
// Bo sung thuoc tinh vao object
student.email = "@gmail.com";
student.address = "Ha Noi";
console.log(student);

// Ket hop mang voi object
let products = [
	{
		id: 1,
		name: "Iphone 11",
		img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-2-400x460-400x460.png",
		money: 100
	},
	{
		id: 2,
		name: "Iphone 8 Plus",
		img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-2-400x460-400x460.png",
		money: 100
	},
	{
		id: 3,
		name: "Iphone SE",
		img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-2-400x460-400x460.png",
		money: 100
	},
];

let total = 0;
products.map(item => {
    total += parseInt(item.money);
});
console.log(total);

