const readline = require('readline-sync');

let tong = 0;
let a = Number(readline.question('Nhap so a:  '));
let b = Number(readline.question('Nhap so b:  '));
let c = Number(readline.question('Nhap so c:  '));

if (a % 2 == 0) {
    tong += a;
}
if (b % 2 == 0) {
    tong += b;
}
if (c % 2 == 0) {
    tong += c;
}
console.log('Tong = ', tong);
