
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if(a>0){
        return "YES"
    }
    else if(a==0){
        throw new Error ("Zero Error")
    }
    else{
        throw new Error ("Negative Error")
    }
} console.log(isPositive(2))


// FLOW
// ✔ return normal value deta hai
// ✔ throw error generate karta hai
// ✔ new Error() ek error object banata hai
// ✔ Error throw hone par execution ruk sakta hai
// ✔ Conditions top-to-bottom check hoti hain