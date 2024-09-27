// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let InputCharacter = prompt("Enter a Character or Number to check Asscii Code")
let char = InputCharacter.charCodeAt(0)
if(char >= 48 && char <= 57)
{
    document.write('You Enter a Number <br/>')
}
else if (char >= 65 && char <= 90)
{
    document.write('You Enter a UPERCASE Character <br/>')
}
else if (char >= 97 && char <= 122)
    {
        document.write('You Enter a LOWERCASE Character <br/>')
    }
    
    else if (char ===  64)
        {
            document.write('You Enter a @ <br/>')
        }
        else if (char ===  32)
            {
                document.write('You Enter a SPACE Button <br/>')
            }
            
            // ----------------------------------------

//             Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let intone = +prompt('Enter First Number To Check which Bigger');
let inttwo = +prompt('Enter Second Number To Check  which Bigger');

// Check which number is larger
if (intone > inttwo) {
    document.write(`Larger Number from ${intone} & ${inttwo} is: ${intone} <br/>`);
} else if (intone < inttwo) {
    document.write(`Larger Number from ${intone} & ${inttwo} is: ${inttwo} <br/>`);
} else {
    document.write(`Both numbers ${intone} & ${inttwo} are the same. <br/>`);
}

// --------------------------------------

// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

let userinput = +prompt('Enter a Number Possitove or Nagetive')
if(userinput >= 1)
{
    document.write(`You Input a Positive Number <br/>`);

}
else if (userinput <= -1)
{
    document.write(`You Input a Negative Number <br/>`);
}
else{
    document.write(`You Input a 0 Number <br/>`);
}


// -----------------------------------------------

// Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise


let userInputchar = prompt('Enter a character to Check its Vowel or Not')

userInputchar = userInputchar.toLowerCase()
if (userInputchar.length === 1 ) {
    

if (userInputchar === "a" ||userInputchar === "e" || userInputchar === "i" || userInputchar === "o" || userInputchar === "u")
{
    document.write(`You Input ${userInputchar} Vowel Character <br/>`);
}
else{
    document.write(`You Input ${userInputchar} are not Vowel Character <br/>`);
}}
else{
    document.write(`You Enter ${userInputchar} Please add a Single Character <br/>`);
}



// __________________________________________

   
// correct it 




var hour = +prompt(`Enter a Hour` , 13);
// var hour = 13;
if (hour < 18) {

greeting = "Good day";
document.write(`${greeting} <br/>`)
}
else {
greeting = "Good evening";
document.write(`${greeting} <br/>`)
}


// ---------------------------------/?



// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.



let storepass = "waqas2002"
let putpass = prompt('Enter a Password')
putpass = putpass.toLowerCase()
if (putpass === storepass) {
    document.write('Correct! <br/>')
}
else{
    document.write('Incorrect Password! <br/>')
}





// --------------------------------------------------


let timeInput = +prompt('Enter time in 24-hour format (1 to 24):');



// Check if the input is valid (1 to 24)
if (timeInput < 1 || timeInput > 24) {
    document.write("Please enter a valid time between 1 and 24. <br/>");
} else {
    
    if (timeInput < 12) {
        document.write("Morning <br/>");
    } else if (timeInput < 17) {
        document.write("Afternoon <br/>");
    } else if (timeInput < 21) {
        document.write("Evening <br/>");
    } else {
        document.write("Night <br/> ");
    }
}



