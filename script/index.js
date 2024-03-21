// 1 - Write a program that determines whether a given number is positive or negative.

var num = +prompt("Enter a number")
if (num > 0){
    console.log("positive");
}
else{
    console.log("negative");
}

// 2 - Write a program that checks if a number is even or odd.

var num = +prompt("Enter a number")
if (num % 2 == 0 ){
   console.log("even");
} 
else {
   console.log("odd");
}

// 3 - Write a program to determine the greater of two numbers.

var num1 = +prompt("Enter num1")
var num2 = +prompt("Enter num2")
if (num1 > num2){
    console.log("num1 is greater than num2");
}
else if (num1 < num2){
    console.log("num2 is greater than num1");
}
else {
    console.log("num1 equals num2");
}
   

// 4 - Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).

var grade = +prompt("add your grade")
if (grade >= 90){
    console.log("A");
}
else if (grade >= 80){
    console.log("B");
}
else if (grade >= 70){
    console.log("C");
}
else if (grade >= 50){
    console.log("D");
}
else {
    console.log("F");
}

// 5 - Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, over 60 play a ticket price of 15.

var age = +prompt ("Enter Your Age")
if (age < 12){
    console.log("The Ticket Price Is 5");
}
else if (age < 18){
    console.log("The Ticket Price Is 10");
}
else if (age < 60){
    console.log("The Ticket Price Is 20");
}
else {
    console.log("The Ticket Price Is 15");
}
