const readline = require('readline-sync');

let count = 0;
let a = Number(readline.question('Nhap so a:  '));
let b = Number(readline.question('Nhap so b:  '));
let c = Number(readline.question('Nhap so c:  '));

if (a % 2 == 0) {
    count = count + 1;
}
if (b % 2 == 0) {
    count = count + 1;
}
if (c % 2 == 0) {
    count = count + 1;
}
console.log('So luong so chan = ', count);