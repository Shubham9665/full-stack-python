"use strict"

// 1 to 10 number print

// for (let i=1; i<=10; i++){
//     console.log(i)
// }


// reverce number 

// for(let i =10; i>=0; i--){
//     console.log(i)
// }

// even 
// for(let i=0; i<=10; i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }

// odd

// for(let j=0;j<=10; j++){
//     if(j%1==0){
//         console.log(j)
//     }
// }
// creat table in promt output

// let n = +prompt("enter number")
// for(let i=1; i<=10; i++){
//     console.log(i*n)
// }
// prime number

let n= +prompt("enter a number")
let isprime = true
for(let i = 2 ; i<n; i++)
    if (n%i==0){
        isprime = false;
        breck; 
        }
    
    if (isprime){
        console.log("prime number");
    }else{
        console.log("not a prime")
    }

