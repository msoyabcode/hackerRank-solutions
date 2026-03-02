
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    
        let vowels = "aeiou"
    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
        console.log(s[i])
        }
    }
        
        for(let i=0; i<s.length; i++){
            if(!vowels.includes(s[i])){
                console.log(s[i])
            }
   }
}

// FLOW

// Input string receive hoti hai.
// Ek vowel string define ki jati hai.
// First loop vowels ko check karke print karta hai.
// Second loop non-vowels ko print karta hai.
// Output order:
// ➜ Pehle vowels
// ➜ Phir baaki characters

// 1️⃣ String Indexing
// String ko index se access kar sakte hai
// s[i] → string ka ith character deta hai
// String immutable hoti hai (change nahi hoti)

// 2️⃣ includes() Method
// "aeiou".includes(char)
// Ye check karta hai ki character vowels me hai ya nahi
// Return karta hai → true ya false