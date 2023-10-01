const marvalHeros=["Thor","Ironman","Spider"]
const dc_heros=["superman","flash","batman"]

//marvalHeros.push(dc_heros);//array inside array (2nd array will treat as single array)
//console.log(marvalHeros);

marvalHeros.concat(dc_heros);
console.log(marvalHeros); //output will be same as push

const allnewheros=[...marvalHeros,...dc_heros]
console.log(allnewheros); 

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=anotherArr.flat(Infinity)//flat will return all element in single array

console.log(Array.isArray("Abhinav"))
console.log(Array.from("Abhinav"))// it will make array of all elements 
console.log(Array.from({name:"abhi"}))//interesting wrray opertation ,here we have to define with which key or value we need the array 

//when we need to convert multiple variable  to an array
const score1=20
const score2=30
const score3=40
console.log(Array.of(score1,score2,score3));

