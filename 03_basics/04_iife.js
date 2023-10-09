//immediately invocked function expressions(IIFE)

//global scope ke variable se jo polution hoti h uss se bachne ke liye immediate execute ke liye IIFE use krte h

(function chai(){
    //named iife
    console.log(`DB connected`)
})();// agr two iife function run krte h to ; add krna hoga ,to end 

((name) =>{
    //unknown iife
    console.log(`DB connected two${name}`)
})('Abhi');



