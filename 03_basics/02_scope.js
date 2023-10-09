if(true){
  let a=10;
  const b=20;
  var c=30; //
}

console.log(a)
console.log(b)
console.log(c)// we will not use var

function one(){
    const username="abhi"

    function two(){
        const website="google"
        console.log(website);

    }
    console.log(website)
    two();
}
one()
//*************************intresting */

console.log(addone(5))// no error
function addone(num){
return num+1;
}

console.log(addtwo(5))//error will be thrown 
const addrwo=function addtwo(num){
    return num+1;
    }

