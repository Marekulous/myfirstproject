let date = new Date(1975, 06, 11);
let birthdate = new Date;
console.log('hi');
console.log('birthdate');
var today = new Date();
var mybirthday = new Date(1975,06,11);


const diffTime = Math.abs(today-mybirthday);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffDays);
console.log