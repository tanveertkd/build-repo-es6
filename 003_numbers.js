/*
    1. Write a program to input 2 numbers and display the sum of the numbers to the console.

    Input Number 1: 20
    Input Number 2: 40
    Sum : 60

*/

const add = ((a, b) => console.log(a+b))(20, 40);

/*
    2. Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. 
    Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

    Input: P=100, R=6%, T=2
    Output: 12
*/

const simpleInterest = ((principle, time, rate) => console.log((principle*time*rate)/100))(100, 2, 6);

/* 
    3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
    Formula : 0.5 * m * v * v
*/

const kEnergy = ((mass, vol) => console.log(0.5*mass*Math.pow(vol, 2)))(20, 35);

/*
    4. Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: 
    C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

    Input: 56
    Output: 13.33333
*/

const farToCel = (far => console.log(((far-32)*(5/9)).toFixed(5)))(56);

/*
    5. Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

    Formula:

    Area: a*a
    Perimeter: 4*a
    Surface Area: 6*a*a
    Volume: a*a*a
*/

const cal = (a => console.log("Area: "+Math.pow(a, 2)+"\nPerimeter: "+4*a+"\nSurface Area: "+6*Math.pow(a, 2)+"\nVolume: "+Math.pow(a, 3)))(5);

/*
    6. Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

    Input: CP = 1500, SP = 2000
    Output: 500 Profit

    Input: CP = 3125, SP = 1125
    Output: 2000 Loss
*/

const pl = ((cp, sp) => console.log((cp<sp)?(sp-cp)+" Profit":(cp-sp)+" Loss"))(1500, 2000);

/*
    7. Write a program to calculate sum of N natural digits, as input by the users?

    Enter a positive integer: 100
    Sum = 5050
*/

const sumOfNDigits = ( a => {
    let sum = 0;
    for(let i=1; i<=a; i++) sum+=i;
    console.log(sum);
})(100);

/*
    8. Write a Program to Print N Odd Number in Descending Order.

    Input : 4
    Output : 7
    5
    3
    1
*/

const nOdd = ( n => {
    let counter = n;
    const test = [];
    while(counter<=n){
        for(let i=1; i<=counter; i++){
            if(i%2!==0) {
                counter++
                test.push(i);
                //console.log(i);
            }
        }
    }
    console.log(test.reverse());
})(4);

/*
    9. Write a JavaScript program to compute the sum of all digits that occur in a given string.

    Input: 1234
    Output: 1+2+3+4 = 10
*/

const addDigits = (n => console.log(n.toString().split('').map(Number).reduce((a, b)=>a+b)))(1234);
//Here map(Number) basically just converts the strings back to numbers.

/*
    10. Write a JavaScript program that reverses a number.

    Example:

    Input:  32243;
    Output:  34223
*/

const revNumber = (n => console.log(n.toString().split('').reverse().map(Number).join('')))(12345);

/*
    11. Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

    Example-

    Enter a Number : 1234
    Enter the Number of Rotations : 2
    Output : 3412
*/

const cyclicRotation = ((x,rotation) => {
    let str = [...x+''];
    for(let i = 0; i<rotation;i++) str.unshift(str.pop())
    console.log(`${x} after ${rotation} rotations becomes: ${Number(str.join(''))}`)
})(1234567, 5);

/*
    12. Write a Program to convert Decimal to Binary.

    Enter the number to convert: 5
    Binary of Given Number is=101
*/

const toBinary = (num => console.log(num.toString(2)))(5);