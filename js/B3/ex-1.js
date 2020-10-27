let fruits = new Array("Táo", "Cam", 1, 2, 3);
// Kieu du lieu object
let number = [1, 2, 3, 4, 5, 6, 7];

// Mang da chieu
let myArray = [
	[1, 2, 3, 4],
	["a", "b", "c"],
];

// Kiem tra so luong phan tu
let count = fruits.length;
console.log(count);

// Truy cap mot phan tu trong mang
// nameArray[index_element]
console.log(fruits[2]);

// In chu c trong mang myArray
console.log(myArray[1][2]);

// Truy cap tat ca phan tu trong mang

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
// for
let limit = myNumbers.length;
for (let i = 0; i < limit; i++) {
	console.log(myNumbers[i]);  
}
*/

/*
// forEach
myNumbers.forEach(function(value, index, array) {
    console.log(value);
});
*/

/*
// forOf
for (let i of myNumbers) {
    console.log(i);
}
*/

// mutable - immutable
// Them so 10 vao cuoi mang
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.push(10);
console.log(number);

// Xoa phan tu cuoi mang
let lastElement = number.pop();
console.log(lastElement, number);

// Them phan tu dau mang
number.unshift(lastElement);
console.log(number);

// Xoa phan tu dau mang
let firstElement = number.shift();
console.log(number);

// Tim
let find = number.indexOf(6);
console.log(find);

let find2 = number.lastIndexOf(6, 6);
console.log(find2);

// Cat phan tu
let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let child = number2.slice(3, -2);
console.log(child, number2);

// Them gia tri vao mang myArray.splice()
number2.splice(3, 3, 100, 200, 300);
console.log(number2);

// Bien mang thanh chuoi
let str = number2.join(";");
console.log(str + "\n");

let str2 = number2.toString();
console.log(str2);

// Kiem tra number2 co phai mang khong
if (Array.isArray(number2)) {
	console.log("OK");
} else {
	console.log("NO");
}

// Sap xep mang
let randomArr = [2, 3, 5, 1, 10, 12, 4];
// Sap xep tang dan
randomArr.sort(function (a, b) {
	return b - a;
});
console.log(randomArr);

// Tim phan tu chan dau tien trong mang
let randomArr2 = [3, 2, 5, 1, 7, 10, 12, 4];
let result = randomArr2.find((item) => item % 2 == 0);
console.log(result);

// Loc tat ca cac phan tu le trong mang
let result2 = randomArr2.filter((val) => val % 2 != 0);
console.log(result2);

let result3 = [];
randomArr2.map((item) => {
	if (item % 2 != 0) {
		result3.push(item);
	}
});
console.log(result3);

// Tinh tong cac so le
let randomArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < randomArr3.length; i++) {
//     if (randomArr3[i] % 2 != 0) {
//         sum += i;
//     }
// }

let sum = randomArr3.filter( item => item % 2 == 0)
                    .reduce((val, current) => val + current);
console.log(sum);




