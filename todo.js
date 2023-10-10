const readline = require('readline');
const { addtodo } = require('./addtodo.js');
const { display } = require('./display.js');
const { deletetodo } = require('./deletetodo.js');
const updatetodo = require('./updatetodo.js');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter The Action Do You Want Like ( add , display , update , delete )? : ", (input) => {
    if (input.toLowerCase() == 'display') {
        display();
    } else if (input.toLowerCase() == 'add') {
        addtodo();
    } else if (input.toLowerCase() == 'update') {
        updatetodo();
    } else if (input.toLowerCase() == 'delete') {
        deletetodo();
    }
})