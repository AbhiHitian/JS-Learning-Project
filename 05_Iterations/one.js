for(let i=0;i<10;i++){
    const element =i
    console.log(i);
}

//for of loop
const arr=[1,2,3,4]

for (const num of arr) {
    console.log(num);
}

//Maps----------unique values and order set 
const map=new Map()
map.set('In',"India")
map.set('JP',"Japan")

for(const [key,value] of map){ // destructure of array 
    console.log(key,':-',value);
}