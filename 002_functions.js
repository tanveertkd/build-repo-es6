/*4. Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]*/

const mergeArray = ((a1, a2) => console.log([...a1, ...a2]))([1,2,3], [4, 5, 6]);

//Advanced

/*  2. Given a sentence, return a sentence with first letter of all words as capital.
    Example:
    Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers  */

const toSentenceCase = (sentence => console.log(sentence.split(" ").map((word) => word[0].toUpperCase()+word.slice(1)).join(" ")))("we are neoGrammers");