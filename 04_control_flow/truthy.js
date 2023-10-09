const userEmail="Abhinav@akhd"

if(userEmail){ //it assume true value
    console.log("got user email")
}else {
    console.log("don't get user email")
}

//falsy values ----> false,0,-0,BigInt 0n,"",null, undefined,NaN

//else other truthy value:--->"0",'false'," ",[],{},function(){}

if(userEmail.length===0){// to check if array is empty

}

const emptyObj={}
if(Object.keys(emptyObj).length===0){//to check the empty object 

}

//nullish coalescing operator(??):null undefined par check krega 

let val1
val1=5 ?? 10
console.log(val1)//5
val1=null ??10  //10
val1=undefined ??10 //10
val1=null ?? 10 ?? 20 //10

//ternary operator
//condition ? true :false

const IcePrice=100
IcePrice>=80?console.log("dhjg") :console.log("fwffeg")

