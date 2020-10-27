// Ham trong JS
function sumNumber(n1, n2) {
    // check n1 phai la so chan, n2 phai la so le
    // phai thoa man moi tinh tong - khong thoa man tra ve null

    // if (kiemTraChanLe(n1) && kiemTraChanLe(n2)) {
    //     return n1 + n2;
    // }
    // Function Expresstion phai duoc dinh nghia truoc khi duoc su dung
    
   return null;
}
let result = sumNumber(3, 5);
console.log(result)

// Function Expresstion
let kiemTraChanLe = function (number) {
    if (number % 2 == 0) {
        return true;
    }
    return false
}

let number = 99;
if (kiemTraChanLe(number)) {
    console.log(`${number} la so chan`);
} else {
    console.log(`${number} la so le`);
}

// Nested function
function tinhDienTichHinhThang(a, b, h) {
    // Tinh tong hai day
    function tongHaiDay() {
        return a + b;
    }

    // Tinh tich 
    function nhanVoiChieuCao() {
        return tongHaiDay() * h;
    }

    // Chia doi ket qua
    function chiaDoiKetQua() {
        return nhanVoiChieuCao() / 2;
    }
    return chiaDoiKetQua;
}

let dt = tinhDienTichHinhThang(2, 3, 4);
console.log(dt());

// Arrow Function
let totalNumber = (a, b) => a + b;
console.log(totalNumber(10, 20));

// Tinh tong cac so chinh phuong tu 1-100
let kiemTraSoChinhPhuong = (n) => {
    let val = Math.sqrt(n);
    if (Number.isInteger(val)) {
        return true;
    }
    return false;
}

let tinhTongCacSoChinhPhuong = (x, y) => {
    let total = 0;
    for (let i = x; i <= y; i++) {
        if (kiemTraSoChinhPhuong(i)) {
            total += i;
        }
    }
    return total;
}
console.log(tinhTongCacSoChinhPhuong(1, 100));

let testArrowFn = a => b => a * b;
let kq = testArrowFn(4)(5);
console.log(kq); 

function testArrowFn(a) {
    function testArrowFn2(b) {
        return a * b;
    }
    return testArrowFn2;
}
console.log(testArrowFn(2)(3))

// Viet ArrowFunction tinh giai thua cua mot so bat ky
let tinhGiaiThua = (n) => {
    if (n < 0) {
        return 0;
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    let gt = 1;
    for (let i = 1; i <= n; i++) {
        gt *= i;
    }
    return gt;
}
console.log(tinhGiaiThua(4))

// Doi tuong Number
let x = 10 / 0;
console.log(x, typeof x);
let y = 10 / 'abc';
console.log(y, typeof y);

let u = 10;
let t = '20';
t = parseInt(t);
console.log(u + t);

let m = '';
if(!isNaN(m) && m.length > 0) {
    console.log('Y');
} else {
    console.log('N');
}

let myNumber = 2020;
myNumber = myNumber.toString();
console.log(typeof(myNumber));

let myNumber2 = 2;
console.log(myNumber + myNumber2);
console.log(typeof(myNumber));
