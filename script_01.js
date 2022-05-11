"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 30;
const ageMark = 30;

// console.log(ageJohn);
// console.log(ageMark);

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos

// if (true)
// if (false)
// if(isJohnOlder)
// if (ageJohn > ageMark)
// {
//     console.log("John ist älter.");
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (isJohnOlder) 
// {   // Ja-Zweig (branch)    
//     console.log("John ist älter.");
// } 
//     else 
// {   // Nein-Zweig (Alternative)
//     console.log("John ist jünger.");
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)
// Fallunterscheidung I

// if (isJohnOlder) 
// {   // Ja-Zweig (branch)    
//     console.log("John ist älter.");
// } 
// else if (isJohnEqual) 
// {   // 1. Alternative
//     console.log("John ist gleich alt.");
// } 
// // else if (...)  weitere Alternativen
// else 
// {   // Nein-Zweig (letzte Alternative)
//     console.log("John ist jünger.");
// }

/****** Fallunterscheidung II / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = "driver";     // .. fährt TAXI! / UBER
// job = "diver";      // .. taucht im Neckar! 
// job = "artist";     // .. malt ein Bild!
// job = "pilot";      // .. macht etwas anderes! --> default
// job = "teacher";    // .. unterrichtet!
// job = "instructor"; // .. unterrichtet!

switch (job) 
{
    case "driver":
        console.log(firstName + " fährt TAXI!");
        break;
    case "diver":
        console.log(firstName + " taucht im Neckar!");
        break;
    case "artist":
        console.log(firstName + " malt ein Bild!");
        break;
    case "teacher":   
    case "instructor":
        console.log(firstName + " unterrichtet!");
        break;
    default: // Plan B
        console.log(firstName + " macht etwas anderes!");
        break;
}

