//Operators, Branching, Loops

//Easy

//1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
const add = (num1, num2, num3, num4, num5) =>  num1+num2+num3+num4+num5;
console.log(add(5,13,7,21,48));

//2. Write a program to take a number input from user and determine whether the number is odd or even.
const oddEven = num => num%2===0 ? 'Even':'odd';
console.log(oddEven(60))

// 3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const isBigger = (num1,num2) => num1>num2 ? num1:num2;
console.log(isBigger(129,251));

// 4. Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const isBiggerThree = (num1, num2, num3) => {
    if(num1>num2 && num1>num3) return num1;
    else if(num2>num1 && num2>num3) return num2;
    else return num3
}

console.log(isBiggerThree(8, 23, 17));

// 5. Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const isSmallerThree = (num1, num2, num3) => {
    if(num1<num2 && num1<num3) return num1;
    else if(num2<num1 && num2<num3) return num2;
    else return num3
}

console.log(isSmallerThree(35, 29, 46));

//6. Write program to take a month as an input from the user and find out whether the month has 31 days or not.
const daysInMonth = month => {
    const months = ["january", "march", "may", "july", "august", "october", "december"];
    return months.includes(month) ? 31 : 30;
}
console.log(daysInMonth("may"));

//Intermediate

/* 1.Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", 
     for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
     Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 ..... */

const fizzBuzz = () => {
    // const arr = [...Array(101).keys()];
    const arr = Array.from({length: 100}, (_, i)=>i+1);
    for(let i=1; i<=arr.length; i++){
        if(arr[i]%3===0) arr.splice(arr[i]-1, 1, 'Fizz')
        else if(arr[i]%5 === 0) arr.splice(arr[i]-1, 1, "Buzz");
        else if((arr[i]%3 === 0) && (arr[i]%5===0)) arr.splice(arr[i]-1, 1, "FizzBuzz");
    }
    return arr;
}
console.log(fizzBuzz());

/*2. Print the following star pattern :-
    *
    * *
    * * *
    * * * *
    * * * * *
*/

const star = _ => {
    let pattern = "";
    for(let i = 1; i <= 5; i++){
        for(let j = 0; j < i; j++){
            pattern+="*";
        }
        pattern+="\n"
    }
    return pattern
}

console.log(star());

//Using IIFS. Don't have to call the function again later.
const star2 = (() => {
    let pattern = "";
    for(let i = 1; i <= 5; i++){
        for(let j = 0; j < i; j++){
            pattern+="*";
        }
        pattern+="\n"
    }
    console.log(pattern);
})();

//3. Write a program to take a number input from user and print multiplication table 12 times for that number.

const multiples = _ => {
    const input = window.prompt('Enter a number: ');
    for(let i=1; i<=12; i++) {
        let mul=input*i;
        console.log(input+"x"+i+"="+mul+"\n");
    }
}

multiples();

//5. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const factorial = input => {
    // const input = window.prompt("Enter a number: "); //use this for user input
    return input===0?1:input*factorial(input-1); 
}

console.log(factorial(5));

// //6. Write a Program to take a number input from user and find if the number is Prime or not.
const prime = (input => {
    let isPrime=false;
    for(let i=2; i<input/2; i++){
        if(input%i===0){
            isPrime = true;
        }
    }
    console.log(isPrime?"Prime":"Not Prime");
})(33);

//7. Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
const dayCheck =  (day => {
    const days = ["saturday", "sunday"];
    console.log(days.includes(day) ? "It's the weekend":day+" is a weekday");
    //one liner for the whole thing would be
    console.log(["saturday", "sunday"].includes(day) ? "It's the weekend":day+" is a weekday");
})("sunday");