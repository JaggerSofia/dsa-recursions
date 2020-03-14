// exercise 1 - counting sheep
function countSheep(totalSheep) {
    // base case
    if (totalSheep === 0) {
        console.log('All sheep jumped over the fence')
        return;
    }
    // recursive case
    console.log(totalSheep + ': Aother sheep jumps over the fence')
    countSheep(totalSheep - 1);
}

countSheep(3)

// exercise 2 - power calculator
function powerCalculator(int, exp) {
    if(exp < 0) {
        return `exponent should be >= 0`
    }
    //base case
    if(exp === 0) {
        return 1
    }
    //recursive case
    return int * powerCalculator(int,exp-1)
}

powerCalculator(10,2)

// exercise 3 - reversing a string
function reverseString(str) {
    // base case
    if (str === '') {
        return '';
    } 
    // recursive case
    console.log(str)
    reverseString(str.substr(1)) + str.charAt(0)
}

reverseString('hello')


// exercise 4 - nth triangular number
function triangleNumber(n) {
    if (n === 1) {
        return 'n';
    }
    console.log(n)
     n + triangleNumber(n - 1);
}

triangleNumber(6)

// exercise number 5 - string splitter
// find out if there's a way to not have the variable declared outside of the recursive function
function stringSplitter(str, splitter) {
    // base case
    if(typeof newArr === 'undefined') {
        let newArr = [];
    }
    if(str.indexOf(splitter) === -1) {
        newArr.push(str)
        return newArr
    }
    // recursive case
    newArr.push(str.slice(0,str.indexOf(splitter)))
    stringSplitter(str.slice(str.indexOf(splitter)+1,str.length),splitter)
    return newArr
    // return str.slice(0,str.indexOf(splitter)) + ' '  stringSplitter(str.slice(str.indexOf(splitter)+1,str.length),splitter)
}
stringSplitter(`hello/world/this/is/fun`,`/`)

// exercise number 6 - Fibonaccii
function fibonacciCalc(num) {
    // base case
    if (num === 1 || num === 2) {
        return 1
    }
    // condition to stop
    if (num < 1) {
        return 0
    }
    // recursive case
    let sumNum = fibonacciCalc(num - 2) + fibonacciCalc(num = 1)
    return sumNum
}
fibonacciCalc(3)

// exercise 7 - Factorial
function factorialNum(num) {
    if(num === 1) {
        return 1
    }
    return num * factorialNum(num - 1)
}
factorialNum(5)

// mazes for exercise 8 and 9
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
​
let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// exercise 8
function mazePathFinder(maze, ew=1, ns=1) {
    // base case
    if (maze[ew][ns] === 'e') {
        return ''
    }
    //add a history to chck backwards, 
}

// exercise 12 - binary representation
function binaryRep(num) {
    if (num === 0) { 
        return ''
    }
    if (num / 2 > 1) { 
        return `1` + `${binaryRep(num -  1)}`
    }
    return `${num / 2}` + `${binaryRep(num - 1)}`
}
binaryRep(3)