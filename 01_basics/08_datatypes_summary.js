//Primitive

//7 types : String,Number,Boolean,null,undefined,Symbol,BigINt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

//Reference
//Non-Primitive
//Array,Objects,Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "mohit",
    age:22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof anotherId)