
//  Create the function factorial here


function factorial (n) {
    let result = 1;
    for(let i=1; i<=n; i++){
        result*=i
    }
    return result
}
console.log(factorial(4))

// Flow
// 1. Function define hota hai.
// 2. Function call hota hai.
// 3. n parameter me value store hoti hai.
// 4. result = 1 set hota hai.
// 5. Loop 1 se n tak multiplication karta hai.
// 6. Final result return hota hai.
// 7. console.log output print karta hai.

function recursiveFunction (b){
    if(b == 0 || b==1){
        return 1
    }
    else{
        return b * recursiveFunction(b-1)
    }
}
 console.log(recursiveFunction(5))

//  flow
// 5 × recursiveFunction(4)
// 4 × recursiveFunction(3)
// 3 × recursiveFunction(2)
// 2 × recursiveFunction(1)
// 1  (Base Case)