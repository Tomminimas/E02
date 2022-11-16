const readline = require('readline-sync');

let a = Number(readline.question('Nhap so a:  '));
let b = Number(readline.question('Nhap so b:  '));

if (a == 0) {
    if (b == 0){
        console.log('Phuong trinh vo so nghiem');
    }
    else {
        console.log('Phuong trinh vo nghiem');
    }
}
else {
    Nghiem = -b / a;
    console.log("Nghiem cua phuong trinh la: ", Nghiem);
}