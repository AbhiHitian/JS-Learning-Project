const name="Abhinav"

const repoCount=50

console.log(name+repoCount+" value")

//modern days:  use backticks (`` string interpolation hota h)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const stringCase=new String('Abhinav-hc')// here all character positions will be defined and length property also will be included

console.log(stringCase[0])
console.log(stringCase.__proto__)
console.log(stringCase.charAt(2))
console.log(stringCase.toUpperCase())
console.log(stringCase.indexOf('i'))

const newGameName=stringCase.substring(0,4)
console.log(newGameName)

const anotherString=stringCase.slice(-8,4)//it will start from back as negative index 

const newString1="    Abhinav    "
console.log(newString1)
console.log(newString1.trim()) //it will remove the starting and end white space 

const url="abhbsyfd%20@gamial.com"

console.log(url.replace('%20','_'))

console.log(url.includes('abhinav'));

console.log(stringCase.split('-'));