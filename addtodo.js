const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addtodo() {

    // sure if file exists or not exists
    if (fs.existsSync('./data.json')) {

        //reading file data by using no-blocking method
        fs.readFile('./data.json', 'utf8', (err, data) => {
            //after reading file data sure if we have an error or real data 
            if (err) {
                console.log('Error reading', err);
            } else {

                rl.question('Enter taskId ? : ', (taskId) => {

                    rl.question('Enter taskName ? : ', (taskName) => {

                        const todos = JSON.parse(data);
                        todos.push({ id: Number(taskId), task: taskName })
                        fs.writeFile('./data.json', JSON.stringify(todos), (err) => {
                            if (err) {
                                console.log('Error', err);
                            } else {
                                console.log('Successfully added task ✔️✔️✔️');
                            }
                        })

                    })
                })
            }
        })
    } else {
        console.log(' Opps 404 🤪🤪🤪 ');
    }
}


module.exports = {
    addtodo
}