const readline = require('readline-sync');

let count = 0;
let a = Number(readline.question('Nhap so a:  '));
let b = Number(readline.question('Nhap so b:  '));
let c = Number(readline.question('Nhap so c:  '));

if (a < 0) {
    count = count + 1; //count++;
}
if (b < 0) {
    count = count + 1; //count++;
}
if (c < 0) {
    count = count + 1; //count++;
}
console.log('So luong so am: ', count);