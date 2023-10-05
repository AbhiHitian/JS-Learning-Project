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
