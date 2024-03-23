//DAY 22 
//Task 1 (Combine strings numbers)
//this function mixes a text and a number into one text 
function combineStringAndNumber(text: string, number: number): string {
    return text + number;
} //join the text and number into a single text

console.log(combineStringAndNumber("Age: " , 22)); //here , we put together the text and number 

//Task 2 (Determine the Remainder)
//this function finds the leftover of dividing two numbers
function Remainder(num1: number, num2: number): number{
    return num1 % num2;
} //will give back the leftover of num1 divided by num2

//Trying it with 7 divided by 2
console.log(Remainder (7, 2)); //Shows 1
//This tell us the leftover which is 1 here.

//Another for practice
function remainder(num1: number, num2: number): number{
    return num1 % num2;
}
console.log(remainder(10,11)); 

//Task 3 (logical AND verification )
//this function will check if both inputs are true 
function checkbothTrue(val1: boolean,val2: boolean): boolean{
    return val1 && val2;
}
 //Trying it with true and false 
 console.log(checkbothTrue(true,false)); //shows false 
 //it checks two things, but if one is false to answer is false 