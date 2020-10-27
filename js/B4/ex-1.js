// // Khai niem Callback
// console.log('A');
// // setTimeout la ham xu ly bat dong bo hay web API. Dung de xu ly mot cong viec vao khoang thoi gian quy dinh
// setTimeout(() => {
//     console.log('B');
// },0)
// console.log('C');

// ===============
// // Example
// function anCom(cb) {
//     setTimeout(() => {
//         console.log('An com xong roi');
//         // cb: tham so -fucntion: chinh la Callback function
//         // cd bat buoc phai la mot ham
//         if (typeof cb === 'function') {
//             cb();
//         }
//     },2000)
// }

// function hocBai() {
//     console.log('Di hoc bai');
// }

// const myCallBack = () => {
//     // Goi ham hoc bai o day
//     hocBai();
// }

// // Theo logic an com roi hoc bai
// anCom(myCallBack);
// // hocBai();'

// ==========
// Promise
const myPromise = new Promise((resolve,reject) => {
    // resolve: thong bao ket qua xu ly thanh cong cua nhung tac vu xu ly bat dong bo
    // rejectL thong bao ket qua xu ly that bai cua nhung tac vu xy ly bat dong bo
    setTimeout(() => {
        if (1+1 == 2) {
            resolve({message: 'Done'});
        } else {
            reject({message: 'Not done'})
        }
    },1000);
});
// Gia xu co 1 tien trinh khac can doi ket qua car Promise tra ve de xu ly tiep
// Di lay ket qua Promise tra ve
// console.log(myPromise);
myPromise.then(data => console.log(data)) // Nhan ket qua tu resovle
        .catch(err => console.log(err)); // Nhan ket qua tu reject