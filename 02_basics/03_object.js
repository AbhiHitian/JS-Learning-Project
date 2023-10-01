//singleton--jab koi constractor se object bante h 
//Object.create  --isi ke through singleton object bnata h 


//object literals--key values ka chhakr chalta h
//symbol declarition 

const mySym=Symbol("key1")


//declarition of object
const jsUser={
    name:"Abhinav",
    age:25,
    location:"kolkata",
    isloggedIn:false,
    lastLogin:["Monday","Tuestday"]
}
console.log(jsUser.age);
console.log(jsUser["age"])

const jsUser2={
    name:"Abhinav",
    age:25,
    [mySym]:"keyone",
    "my Email":"abc@gamil.com",
    location:"kolkata",
    isloggedIn:false,
    lastLogin:["Monday","Tuestday"]
}

console.log(jsUser2["my Email"])
console.log(jsUser2.mySym)
console.log(typeof jsUser2.mySym)//for now it will retuen type as string 
console.log(typeof jsUser2[mySym])//it will return type object when use []

//change object value
jsUser.name="abhinavhit"

//value ko lock krna to freeze kr do
//Object.freeze(jsUser)
jsUser.name="anbjshkhd"

jsUser.greeing=function(){
    console.log("hello JS user")
}

jsUser.greeingTwo=function(){
    console.log(`hello JS user ,${this.name}`);
}


console.log(jsUser.greeing());
console.log(jsUser.greeingTwo());


