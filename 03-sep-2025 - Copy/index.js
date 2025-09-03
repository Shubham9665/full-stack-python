"use strict"



// for(let i=1; i<=1000; i++){
//    let n= i
// let isprime = true
// for(let i = 2 ; i<n; i++)
//     if (n%i==0){
//         isprime = false;
//         break; 
//         }

//     if (isprime){
//         // console.log("prime number");
//         console.log(n)
//     }
// }


// factorial number print
// let n = +prompt("enter the number")
// n = BigInt(n);
// let ans = 1n
// for (let i = 1; i <= n; i++) {
//     ans = ans * BigInt(i);
//     // console.log(ans);


// }
// console.log(ans);

// for (let i = 1; i <= 100; i++) {
//     let n = i
//     // n = BigInt(n);
//     let ans = 1n
//     for (let i = 1; i <= n; i++) {
//         ans = ans * BigInt(i);
//         // console.log(ans);


//     }
//     console.log(`${n} = ${ans} `);

// }

// swap 

// let a=5;
// let b=10;
// let temp =a; 
// b=a;
// a=temp;

// a=a+b;
// b=a-b;
// a=a-b

// [a,b]=[b,a]
// console.log(a);
// console.log(b);

// fabinocis series

let a= 0 ;

let b =1;
let n = 10 ;
for (let i= 1 ; i<=n ; i++){
    console.log(`${a}+${b}=${a+b}`);
    let temp = a;
    
    a=b 
    b=temp +b
    
}