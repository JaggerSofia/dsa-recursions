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

