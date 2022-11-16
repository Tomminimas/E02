const readline = require('readline-sync');

let x = Number(readline.question('Nhap x:  '));
switch (x) {
    case 1: 
        console.log('Mot');
        break;
    case 2: 
        console.log('Hai');
        break;
    case 3: 
        console.log('Ba');
        break;
    case 4: 
        console.log('Bon');
        break;
    case 5: 
        console.log('Nam');
        break;
    case 6: 
        console.log('Sau');
        break;
    case 7: 
        console.log('Bay');
        break;    
    case 8: 
        console.log('Tam');
        break;
    case 9: 
        console.log('Chin');
        break;
    default:
        console.log('Khong hop le');
        break;
}