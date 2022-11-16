const readline = require('readline-sync');

let a = Number(readline.question('Nhap canh a:  '));
let b = Number(readline.question('Nhap canh b:  '));
let c = Number(readline.question('Nhap canh c:  '));

if (a * a + b * b == c * c ) {
    console.log('Tam giac vuong');
}
else {
    console.log('Tam giac khong vuong');
}