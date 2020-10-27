
/* // Kieu du lieu trong JS
var number = 10;
let name = "Le Van Hau";
let checking = true;
let myAge;

// Tu khoa const dinh hang so
const PI = 3.14;
// PI = 3.15 sai khong duoc phep thay doi truc tiep gia tri hang so
console.log(PI);
// Kiem tra kieu du lieu cua bien
// console.log(typeof(number));
// console.log(typeof(name));
// console.log(typeof(checking));
// console.log(typeof(myAge)); */

/* const person = {name: "Hau", age: 21};
person.email = 'lvhau1529@gmail.com';
person.money = '1000$';
console.log(person) */

// Phan biet giua let va var!!!

// Duoc phep gi de lai bien
/*
var myWorks = 'Dev';
var myWorks = 'Singer'; //Ghi de lai bien
console.log(myWorks);

let myAdress = 'Ha Noi';
let myAdress = 'Ha Nam';
console.log(myAdress); */

/*
// var a; // Dong lenh khong ton tai. Nhung la ban chat cua js => Hay khai bao bien o dau, o duoi moi thuc thi logic
console.log(a); 
var a = 'test'; //hoistring
console.log(a); */

/*
// Block scope
let myMoney = 100;
if (myMoney > 90) {
    let myMoney = 80;
    console.log(myMoney)
}
console.log(myMoney); */

// Tu khoa va ton tai con tro this vao chinh bien day. Tu khoa let thi khong.

/*
//If else
let yourAge = 20;
if (yourAge == 22) {
    console.log('OK');
} else if (yourAge == 21) {
    console.log('No')
} else {
    // Do something
} */

/*
// Vong lap for
for(let i = 1; i < 10; i++) {
    console.log(i)
}

// Vong lap While
let j = 10;
while(j < 3) {
    console.log(j);
    j++;
}

// Vong lap Do While
do {
    console.log(j);
    j++;
} while(j < 20); */

// let i = 1;
// while(i <= 100) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }


// for(let i = 2; i <= 100; i++) {
//     if(100 % i != 0) {
//         console.log('100 la so nguyen to');
//     }
// }

// Declare function 
function sumNumber(a,b) {
    return a + b;
}
let sum = sumNumber(1,2);
console.log(sum)