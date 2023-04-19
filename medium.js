// Write a program to tell if someone is shouting (all caps), whispering (all lowercase), or neither. 
// Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
 alert("Welcome to the medium challenge")
 let userinp = prompt("Send a message in a all caps, all lowercase, or don't if you want to be that person")
 
 function noisecheck(a){
    if (a.toUpperCase() === a){
        return "This User is Yelling!";

    } else if (a.toLowerCase() === a){
        return "This User is Whispering";

    } else {
        return "This User is neither yelling or whispering"
    }
 }

document.write(noisecheck(userinp))
console.log(noisecheck(userinp));