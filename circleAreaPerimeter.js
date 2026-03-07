
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    // Print the area of the circle:
    const PI = Math.PI
    let r = Number(readLine())
    let area = PI*r*r
    console.log(area)
    
    // Print the perimeter of the circle:
    let perimeter = 2*PI*r
    console.log(perimeter)    

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}


//  Circle area and perimeter"



// 📘 Line-by-Line Flow Summary
// 1️⃣ const PI = Math.PI
// PI naam ka constant declare hota hai
// Usme π ki value store hoti hai

// 2️⃣ let r = Number(readLine())
// Radius input read hota hai
// String ko number me convert kiya jata hai

// 3️⃣ let area = PI * r * r
// Area calculate hota hai (πr² formula se)

// 4️⃣ console.log(area)
// Area print hota hai

// 5️⃣ let perimeter = 2 * PI * r
// Perimeter calculate hota hai (2πr formula se)

// 6️⃣ console.log(perimeter)
// Perimeter print hota hai

// 7️⃣ try {
// Risky code block start hota hai

// 8️⃣ PI = 0
// Constant PI ko change karne ki koshish hoti hai
// Error generate hota hai

// 9️⃣ catch(error)
// Error catch hota hai

// 🔟 console.error(...)
// Message print hota hai ki PI correctly constant declare kiya gaya

// 🎯 One-Line Overall Flow

// Program PI declare karta hai, radius se area aur perimeter calculate karta hai, phir prove karta hai ki PI constant hai by trying to change it.