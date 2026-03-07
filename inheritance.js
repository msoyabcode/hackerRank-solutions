
// 🔹 Question: Book class
// Problem Statement

// Ek class Book banayein.

// Constructor 2 properties set kare:
// title → string
// author → string

// Ek method getDetails() banaye jo return kare:
// "Title: <title>, Author: <author>"

// Ek object create karein aur getDetails() method call karke print karein.
class Book {
  constructor(title, author) {
    this.title = title,
    this.author = author
  }

  getDetail() {
    return `Title: ${this.title}, Author: ${this.author}`;
  }
}
let myBook = new Book("The Alchemist", "Paulo Coelho");
console.log(myBook.getDetail());


// explanation 

// class Book {...}
// Book = class ka name

// constructor(title, author) { ... }
// Constructor object create hone par automatic call hota hai
// Purpose: object ke initial properties set karna


// this.title = title; this.author = author;
// this → current object ko refer karta hai
// title aur author → properties (attributes) hain jo har object ke liye store hongi


// getDetail() { ... }
// Ye method hai → function jo object ke behavior ko define karta hai


// let myBook = new Book("The Alchemist", "Paulo Coelho");
// new Book(...) → object creation
// myBook = object ka name / variable
// Constructor automatic call hota hai → this.title = "The Alchemist" aur this.author = "Paulo Coelho"


// console.log(myBook.getDetail());
// myBook.getDetail() → object ka method call
// Output: "Title: The Alchemist, Author: Paulo Coelho"

class Vehicle {
    constructor(brand, wheels){
        this.brand = brand,
        this.wheels = wheels
    }
    getInfo(){
        return `Brand: ${this.brand}, ${this.wheels}`
    }

}
class Car extends Vehicle{
    constructor(brand, wheels){
        super(brand,wheels) // parent constructor call with properties
    }
}
let car = new Car("frari", 5)
console.log(car.getInfo())