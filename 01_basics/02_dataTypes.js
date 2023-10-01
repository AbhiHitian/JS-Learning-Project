//"use strict" //treat all JS code as newer version

//alert(3 +3) //we are using node js not browser

let name="Abhi"
let age=25
let isTrue=true;

// number => 2 to power 53
//bigint
//string=>""
//boolean=> true/false
//null => standalone value
// undefined 
//symbol => to find the uniqueness

//object  

console.log(typeof "abhi") //to find the type of variable

console.log(typeof null) // output object type*


//JS is dyanmic type language i think 

//summary
// premitive data types :- total 7 types 
/* 
string,Number,Boolean,null,undefined,symbol,Bigint


Non- Premetive type :- Refrence type 
Array,Objects,Functions
*/

const Heros=["Nagraj","Doga"]

let myObj={
    name:"Abhi",
    age:25,
}

const myFunction= function(){
    console.log("Hello world")
}

console.log(typeof Heros) // to find the datatypes of variable 


//Memory********************
//Stack (premitive type use hoti h) --always copy milti h variables ki
//Heap(Non premitive type)-- varible  ki refrence refrence , change will be made made on original value .

let myPlayerName="Champion"
let myOriginalNmae=myPlayerName
myOriginalNmae="Abhinav"
console.log(myPlayerName)
console.log(myOriginalNmae)

let userOne={
    email:"user@yaho.com",
    upi:"abc@ybl"
}

let userTwo=userOne

userTwo.email="usertwo@yaho.com"

console.log(userOne.email)
console.log(userTwo.email)

