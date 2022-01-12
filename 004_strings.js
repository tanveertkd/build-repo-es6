//Advanced

//5. Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )

const toggleCase = (word => {
    const charArr = word.split('').map((char, i) => {
        if(i%2===0){
            return char;
        }
        return char.toUpperCase()
    });
    console.log(charArr.join(''))
})("test")