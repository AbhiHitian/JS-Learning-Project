function callMyName(){
    console.log("Abhinav")
    console.log("Anand")
}

callMyName //without braces will be Reference

callMyName()//when we added () it will be executed

/*
function addTwoNumbers(number1,number2){// here we will have input type converstion issue 
console.log(  number1+number2)
} 
*/

function addTwoNumbers(number1,number2){// here we will have input type converstion issue 
    // return number1+number2
    let result= number1+number2
    return result;
    console.log("akgd") //this statement will not run because after return statement execution will not be there .
    }

const resultSum=addTwoNumbers(3,5);

//console.log("results:" ,resultSum) // here o/p will be undefined

function loggedUserMessage(userName="Abhi"){ // here we can defined the default value as well
    if(userName===undefined){
        console.log("please enter the user name ")
        return
    }
return `${userName} just logged in`
}
/*
function loggedUserMessage(userName){
    if(!undefined){
        console.log("please enter the user name ")
        return
    }
return `${userName} just logged in`
}
*/

loggedUserMessage("Abhinav") 
console.log(loggedUserMessage() ) // when input will not be passed then it will return undifined user

//rest/spread(...) operator will be usefull for the function like where we need to create a function to add in cart 
//Example:1
function calculateCardPrice(...num1){

return num1
}

console.log(calculateCardPrice(100,5,10))

//Example 2:
function calculateCardPrice(val1,val2,...num1){//here first two input will be considered for val1 and val2 and rest inputs will be stored in a array 

    return num1
    }

    const user ={
        name:"Abhinav",
        age: 26
    }

//create a function to handle an object
function handleObj(anyObject){

    console.log(`user name is ${anyObject.name} and age ${anyObject.age}`)
}
handleObj(user)// we can pass the direct object as well

const myArray=[100,22,222]

function returnSecondVal(getArray){
return getArray[1]
}
console.log(returnSecondVal(myArray))// here also we can pass direct array 

