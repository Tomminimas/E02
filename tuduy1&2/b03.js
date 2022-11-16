const readline = require('readline-sync');

let a = Number(readline.question('Nhap Diem Trung Binh:  '));
if (a >= 5) {
    console.log('Dau!!!');
}    
else {
    console.log('Rot :(((');
}