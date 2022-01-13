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


//Medium

/*
    1.  Given an array, your function should return the length of the array.
        Example:
        Input: arrayLength([1,5,3,7,8]) ––> Output: 5
*/

const arrayLength = (array => console.log(array.length))([1,5,3,7,8]) 

/*
    2.  Given an array and an item, your function should return the index at which the item is present.
        Example:
        Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
*/

const findIndex = ((array, item) =>  console.log(array.includes(item)?array.indexOf(item):null))([1,6,3,5,8,9], 3);

/*
    3.  Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
        Example:
        Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
*/

const replaceEntries = ((array, a, b) => {
    for(let i = 0; i<=array.length; i++){
        const oldItem = array.indexOf(a);
        if(~oldItem){
            array[oldItem] = b;
        }
    }
    console.log(array)
})([1,5,3,5,6,8,5], 5, 10)

//es6 way
const replaceEntries2 = ((array, a, b)=> console.log(array.map(item => item===a?b:item)))([1,5,3,5,6,8], 5, 10); 

/*  
        4.Given two arrays, your function should return single merged array.
        Example:
        Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]   
*/

const mergeArray = ((a1, a2) => console.log([...a1, ...a2]))([1,2,3], [4, 5, 6]);

/*      EXTRA QUESTION - Given n arrays, your function should return single merged array.
        Example:
        Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]   
*/
        
const mergeAllArray = ((...n) => console.log([...n].flat()))([1,2,3], [4, 5, 6],  [7, 8, 9]);

//Another way to merge n arrays
const mergeArrays = ((...args) => console.log([].concat(...args)))([1,2,3], [4, 5, 6],  [7, 8, 9]);

/*
    5. Given a string and an index, your function should return the character present at that index in the string.
    Example:
    Input: charAt("neoGcamp", 4) ––> Output: c
*/

const charLocation = ((string, index) => console.log(string.charAt(index)))("neoGcamp", 4); 

/*
    6. Given two dates, your function should return which one comes before the other.
    Example:
    Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
*/

const minDate = ((dateOne, dateTwo) => console.log((new Date(dateOne)<new Date(dateTwo))?dateOne:dateTwo))('02/05/2021', '24/01/2021')

//Advanced
/*
    1. Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
    Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
    Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
*/

const encodeString = ((str, key) => {
    const strArray = str.split('').map(ch => {
        const enc = ch.charCodeAt()+key;
        console.log(enc)
        return String.fromCharCode(enc);

    }).join('');
    console.log(strArray)
    
})("neogcamp", 2);

/*  2. Given a sentence, return a sentence with first letter of all words as capital.
    Example:
    Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers  */

const toSentenceCase = (sentence => console.log(sentence.split(" ").map((word) => word[0].toUpperCase()+word.slice(1)).join(" ")))("we are neoGrammers");

/*
    3. Given an array of numbers, your function should return an array in the ascending order.
    Example:
    Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
*/

const sortArray = (array => console.log(array.sort((a,b)=>a-b)))([100,83,32,9,45,61]);

/*
    4. Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
    Example:
    Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
 */

    const reverseCharactersOfWord = (string => console.log(string.split(' ').map(word => word.split('').reverse().join('')).join(' ')))("we are neoGrammers");