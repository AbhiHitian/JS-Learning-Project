let score="12" //for null we will get conversion output as 0 and for undefined we will get NaN as number conversion 

console.log(typeof score)

let valueInNumber= Number(score) //conversion of string to number

let score1="123ksj"
let conversion=Number(score1) // it will convert in JS but output will be NaN 

let isLoggedIn=true
let ConversionboolloggedIn=Boolean(isLoggedIn) // it will return as true 
/*
1=> true  ;0=>false
""=>false
"Abhi"=> true
*/
