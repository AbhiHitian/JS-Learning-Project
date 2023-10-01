const score=7286;
console.log(score)

const balance=new Number(300)
//console.log(balance)

//console.log(balance.toString().length);
//console.log(balance.toFixed(2))// to get two digits after decimal

const anotherNumb=23.846

//console.log(anotherNumb.toPrecision(3))//decimal se phle priorty milti h depends on degits before decimal

const hundred=100000
//console.log(hundred.toLocaleString('en-IN')); // o/p=1,00,000

//Maths*************
console.log(Math);
console.log(Math.abs(-4));// negative positive me convert ho jayega
console.log(Math.round(4.6));// o/p=5
console.log(Math.ceil(4.1))// o/p=5 --thoda bhi jyada to next value select ho jayega 
console.log(Math.floor(4.7))// o/p =4 --niche wali value lega

console.log(Math.min(4,6,8,1,9));
console.log(Math.max(4,6,8,1,9));

console.log(Math.random())// output will be lies between 0 and 1 always 
console.log((Math.random()*10)+1)// o/p will be always >1

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)// o/p will be always between 10 and 20
