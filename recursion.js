// What is the input to the program? -- total sheep
// What is the output of the program? -- Remaining sheep to jump and a message
// What is the input to each recursive call? -- totalSheep - 1
// What is the output of each recursive call? -- the logged message

function countSheep(totalSheep) {
    if (totalSheep === 0) {
        console.log('All sheep jumped over the fence')
        return;
    }
    console.log(totalSheep + ': Aother sheep jumps over the fence')
    countSheep(totalSheep - 1);
}

countSheep(3)

// What is the input to the program? -- 
// What is the output of the program? -- 
// What is the input to each recursive call? -- 
// What is the output of each recursive call? -- 

function powerCalculator() {

}

// What is the input to the program? -- the string  
// What is the output of the program? -- the string in reverse
// What is the input to each recursive call? -- str minus the character
// What is the output of each recursive call? -- reversed string

function reverseString(str) {
    if (str === '') {
        return '';
    } 
    console.log(str)
    reverseString(str.substr(1)) + str.charAt(0)
}

reverseString('hello')


// What is the input to the program? -- 
// What is the output of the program? -- 
// What is the input to each recursive call? -- 
// What is the output of each recursive call? -- 

function triangleNumber(n) {
    if (n <= 1) {
        return;
    }
    console.log(n)
    triangleNumber(n * (n + 1) / 2);
}

triangleNumber(6)

// What is the input to the program? -- 
// What is the output of the program? -- 
// What is the input to each recursive call? -- 
// What is the output of each recursive call? -- 



// What is the input to the program? -- 
// What is the output of the program? -- 
// What is the input to each recursive call? -- 
// What is the output of each recursive call? -- 



// What is the input to the program? -- 
// What is the output of the program? -- 
// What is the input to each recursive call? -- 
// What is the output of each recursive call? -- 




// What is the input to the program? -- 
// What is the output of the program? -- 
// What is the input to each recursive call? -- 
// What is the output of each recursive call? -- 



// What is the input to the program? -- 
// What is the output of the program? -- 
// What is the input to each recursive call? -- 
// What is the output of each recursive call? -- 



// What is the input to the program? -- 
// What is the output of the program? -- 
// What is the input to each recursive call? -- 
// What is the output of each recursive call? -- 



// What is the input to the program? -- 
// What is the output of the program? -- 
// What is the input to each recursive call? -- 
// What is the output of each recursive call? -- 



// What is the input to the program? -- 
// What is the output of the program? -- 
// What is the input to each recursive call? -- 
// What is the output of each recursive call? -- 