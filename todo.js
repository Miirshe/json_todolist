const readline = require('readline');
const { addtodo } = require('./addtodo.js');
const { read_todos } = require('./read_todos.js');
const { deletetodo } = require('./deletetodo.js');
const { updatetodo } = require('./updatetodo.js');
const { read_todo } = require('./read_todo.js');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter The Action Do You Want Like ( add , display , displayOne , update , delete )? : ", (input) => {
    if (input.toLowerCase() == 'display') {
        read_todos();
    } else if (input.toLowerCase() == 'displayone') {
        read_todo()
    } else if (input.toLowerCase() == 'add') {
        addtodo();
    } else if (input.toLowerCase() == 'update') {
        updatetodo();
    } else if (input.toLowerCase() == 'delete') {
        deletetodo();
    } else {
        console.log('Invalid input type 😜 ');
    }
})