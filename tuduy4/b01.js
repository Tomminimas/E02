const readline = require('readline-sync');

let a = Number(readline.question('Nhap so A:  '));
let b = Number(readline.question('Nhap so B:  '));

if (a > b) {
    console.log('A lon hon B');
}
else {
    if (a == b) {
        console.log('A bang B');
    }
    else {
        console.log('A nho hon B');
    }
}