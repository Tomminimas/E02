const readline = require('readline-sync');

let tong = 0;
let a = Number(readline.question('Nhap so a:  '));
let b = Number(readline.question('Nhap so b:  '));
let c = Number(readline.question('Nhap so c:  '));

if (a < 0) {
    tong += a;
}
if (b < 0) {
    tong += b;
}
if (c < 0) {
    tong += c;
}
console.log('Tong = ', tong);
