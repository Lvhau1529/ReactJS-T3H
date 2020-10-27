// String trong JS
// Du lieu nam trong nhay don hoac nhay kep hoac
let myString = 'Chung ta dang hoc JS';
let myString2 = "Chung ta dang hoc JS";
let myString3 = `Chung ta dang hoc JS`;
console.log(typeof myString, typeof myString2, typeof myString3);

// Trong backticks: co the su dung bien hay cac bieu thuc tinh toan
let myString4 = `Can bac hai cua 81 la: ${Math.sqrt(81)}`;
console.log(myString4);

let myString5 = 'Chung ta dang hoc JS \n';
let myString6 = 'Buoi sau hoc tiep JS';
console.log(myString5 + myString6);

let myString7 = `awdjl
fawf
dgds`;
console.log(myString7);

let string = 'Chung ta dang hoc JS co ban';
let newString = string.toLocaleUpperCase();
console.log(newString, string);

let find = string.indexOf('JS', 20);
let find2 = string.lastIndexOf('JS', 20);
console.log(find, find2);

let newString2 = string.slice(5, -20);
console.log(newString2);

let newString3 = string.substring(5, -20);
console.log(newString3);

let newString4 = string.substring(5, 20);
console.log(newString4);

let newString5 = string.replace('JS','ReactJS');
console.log(newString5);

console.log(newString2.concat(newString3));
