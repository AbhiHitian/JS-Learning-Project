//array

const myArr=[1,2,3,4,5] //re-sizeble , mixed data type

console.log(myArr[1])

const myArr1=["shakti","doga"]
const myArr2=new Array(1,2,3)

//Array methods
myArr.push(6) //this will add the value to array
myArr.push(7) 
myArr.pop() //last value ko remove kr dega
myArr.unshift(9) //it will add 9 starting of the Array

console.log(myArr.includes(15)) //false 
console.log(myArr.indexOf(15)) // -1
const newArr=myArr.join()// this will convert array to string 

console.log(newArr)
console.log(myArr)

//Slice,splice
console.log("A ",myArr);
const myr=myArr.slice(1,3)
console.log(myr)
console.log("B ",myArr)

const myn2=myArr.splice(1,3)//-- splice original array me se defined portion remove kr deta h 
console.log("C ",myArr)
console.log(myn2)




