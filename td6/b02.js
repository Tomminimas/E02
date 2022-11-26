const readline = require('readline-sync');

let a = Number(readline.question('Nhap so a:  '));
let b = Number(readline.question('Nhap so b:  '));
let c = Number(readline.question('Nhap so c:  '));

if (a % 2 == 0) {
    console.log(a);
}
if (b % 2 == 0) {
    console.log(b);
}
if (c % 2 == 0) {
    console.log(c);
}