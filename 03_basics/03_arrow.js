const user={
    username:"Abhi",
    price:100,
    
    welcomeMessage:function(){
 console.log(`${this.username},welcome to website`)
 console.log(this)
    }
}
user.welcomeMessage();
user.username="afds"
user.welcomeMessage();

console.log(this)// this this will return empety string (ye outside function run kra)

function code(){
    console.log(this)// this will return value (ran inside the functions )
}

function code(){
    username:"Abhi"
    console.log(this.username)// outcome will be undefined becoz it will work with object 
}

const chai=function(){
    username:"Abhi"
    console.log(this.username)// undefined will return
}

//******************Arrow function */
const chai1=()=>{
    username:"Abhi"
    console.log(this.username)// undefined will return
}

const Coffee=(num1,num2)=> {
   return num1+num2
}
console.log(Coffee(4,8))

//implict return will work in a single line

//const addtwo=(num1,num2)=>num1+num2
const addtwo=(num1,num2)=> (num1+num2)// it will use in react frequently 

//const addtwo=(num1,num2)=> ({userNName:"abhi"})



