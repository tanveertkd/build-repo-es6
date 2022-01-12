//Medium

/*  4.Given two arrays, your function should return single merged array.
    Example:
    Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]   */

const mergeArray = ((a1, a2) => console.log([...a1, ...a2]))([1,2,3], [4, 5, 6]);

/*  EXTRA QUESTION - Given n arrays, your function should return single merged array.
    Example:
    Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]   */
    
const mergeAllArray = ((...n) => console.log([...n].flat()))([1,2,3], [4, 5, 6],  [7, 8, 9]);