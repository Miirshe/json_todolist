const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function deletetodo() {
    if (fs.existsSync('./data.json')) {
        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) {
                console.log('Error From Reading File ! 😜 ', err);
            } else {

                const todos = JSON.parse(data);
                rl.question('Enter taskId  ? : ', (taskId) => {
                    const dataJson = todos.filter(task => task.id != taskId)

                    if (todos.length === dataJson.length) {

                        console.log('todos is empty ! 😜 ', todos.length);

                    } else {

                        fs.writeFile('./data.json', JSON.stringify(dataJson), (err) => {

                            if (err) {
                                console.log('Error From  Writen File : ' + err);
                            } else {
                                console.log('Successfully deleted task ✔️ ', dataJson);
                            }

                        })

                    }

                })
            }
        })
    } else {
        console.log(' Opps 404 🤪 ');
    }
}

module.exports = {
    deletetodo
}