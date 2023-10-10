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
                //take from the user taskId and taskName
                rl.question('Enter taskId ? : ', (taskId) => {

                    rl.question('Enter taskName ? : ', (taskName) => {

                        //convert json data into readable format data
                        const todos = JSON.parse(data);

                        //adding data from th user to the json file
                        todos.push({ id: Number(taskId), task: taskName })

                        //written data into the json file
                        fs.writeFile('./data.json', JSON.stringify(todos), (err) => {
                            if (err) {
                                console.log('Error From Reading File ', err);
                            } else {
                                console.log('Successfully added task ✔️ ');
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