//dates- single moment in time in platform independent format.(january 1,1970)
//date --Object hota h JS me
let myDate= new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());

let myCreatedDate=new Date(2023,0,23) //month 0 se start hota h js me
console.log(myCreatedDate.toDateString());

let timeStamp=Date.now()
console.log(timeStamp)//this will retuen current time milliseconds 
console.log(myCreatedDate.getTime())// this will returns the miliseconds 
console.log(Math.floor(Date.now()/1000))  //time in seconds 

let newDate=new Date()

newDate.toLocaleString('default',{
    weekday:"long",
})
