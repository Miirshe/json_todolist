const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function updatetodo() {
    if (fs.existsSync('./data.json')) {

        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) {
                console.log('Error From ReadFile ! 😜');
            } else {
                rl.question('Enter taskId ? : ', (taskId) => {

                    rl.question('Enter taskName ? : ', (taskName) => {

                        const todos = JSON.parse(data);

                        const update_todos = todos.map(todo => {
                            if (todo.id == Number(taskId)) {
                                return {
                                    ...todo,
                                    task: taskName
                                }
                            }

                            return todo;

                        });
                        fs.writeFile('./data.json', JSON.stringify(update_todos), (err) => {
                            if (err) {
                                console.log('Error Writting File 😜 ', err);
                            } else {
                                console.log('Successfully updated task ✔️ ');
                            }

                        })
                        console.log('update_todos', update_todos);
                    })

                })
            }
        })

    } else {
        console.log(' Opps 404 🤪🤪🤪 ');
    }
}

module.exports = {
    updatetodo
}