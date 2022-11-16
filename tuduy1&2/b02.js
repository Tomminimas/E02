const readline = require('readline-sync');

let a = Number(readline.question('Nhap so a:  '));
if (a < 0) {
    console.log('So am');
}    
else {
    console.log('Khong phai so am');
}