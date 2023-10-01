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


//**********operations */
let value=3
let negValue=-value
console.log(negValue)

console.log(2**2)//2 ka power 2
console.log(2**3)// 2 ka power 3
console.log(2%3)// to find the reminder 

let str1="Hello"

let str2=" Abhi"
let str3=str1+str2 // no issue output will be Hello Abhi

//Tricky conversions
console.log("1"+2) //output=12
console.log("1"+2+2) //output =122
console.log(1+2+"2")// output=32 
console.log(true) // output=true 
console.log(+true) // output=1
console.log(+"") //output=0

let num1,num2,num3
num1=num2=num3=2+2//less redability






