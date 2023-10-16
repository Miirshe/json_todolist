const { addtodo } = require('./addtodo.js');
const { read_todos } = require('./read_todos.js');
const { deletetodo } = require('./deletetodo.js');
const { updatetodo } = require('./updatetodo.js');
const { read_todo } = require('./read_todo.js');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



function operation() {
    rl.question("Enter The Action Do You Want Like ( add , readtodos , readtodo , update , delete )? : ", action => {
        switch (action) {
            case 'add':
                addtodo();
                break;
            case 'readtodos':
                read_todos();
                break;
            case 'readtodo':
                read_todo();
                break;
            case 'update':
                updatetodo();
                break;
            case 'delete':
                deletetodo();
                break;
            default:
                console.log('Not Found Operation')
        }
    })
}

operation()