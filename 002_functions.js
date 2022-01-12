//Easy

/*  1. Given a and b, your function should return the value of ab
    Example:
    Input: power(2,3) ––> Output: 8 */

const power = ((a, b) =>  console.log(Math.pow(a, b)))(2, 3);

/*  2. Given length of a regular hexagon, your function should return area of the hexagon.
    Example:
    Input: areaOfHexagon(10) ––> Output: 259.80*/
    
const areaOfHexagon = (input => console.log((3*Math.sqrt(3)/2)*Math.pow(input, 2)))(10);

/*  4. Given two arrays, your function should return single merged array.
    Example:
    Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]*/

const mergeArray = ((a1, a2) => console.log([...a1, ...a2]))([1,2,3], [4, 5, 6]);

/*  3. Given a sentence, your functions should return the number of words in the sentence.
    Example:
    Input: noOfWords(We are neoGrammers) ––> Output: 3 */

const noOfWords = (sentance => console.log(sentance.split(" ").length))("We are neoGrammers");

/* 4. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
    Example:
    Input: findMin(3,5) ––> Output: 3
    Input: findMin(3,5,9,1) ––> Output: 1
    (Hint: Lookup rest parameters in JavaScript) */

const findMin = ((...input) => console.log(Math.min(...input)))(3, 5, 9, 1); 

/*  5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
    Example:
    Input: findMax(3,5) ––> Output: 5
    Input: findMax(3,5,9,1) ––> Output: 9
    (Hint: Lookup rest parameters in JavaScript) */ 

const findMax = ((...input) => console.log(Math.max(...input)))(3,5,9,1);

const typeOfTriangle = ((a, b, c) => {
    if(a==b && b==c) 
        console.log("Equilateral");
    else if(a==b || a==c || b==c)
        console.log("Isosceles");
    else 
        console.log("Scalene");
})(30, 60, 90);

//Advanced

/*  2. Given a sentence, return a sentence with first letter of all words as capital.
    Example:
    Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers  */

const toSentenceCase = (sentence => console.log(sentence.split(" ").map((word) => word[0].toUpperCase()+word.slice(1)).join(" ")))("we are neoGrammers");