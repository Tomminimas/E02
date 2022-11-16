const readline = require('readline-sync');

let a = Number(readline.question('Nhap canh a:  '));
let b = Number(readline.question('Nhap canh b:  '));
let c = Number(readline.question('Nhap canh c:  '));

if (a == b && b == c && a == c) {
    console.log('Tam giac deu');
}
else {
    console.log('Tam giac khong deu');
}