const readline = require('readline-sync');

let a = Number(readline.question('Nhap so a:  '));
if (a % 2 == 0) {
    console.log('So chan');
}    
else {
    console.log('So le');
}
