const fs = require('fs');

function read_todos() {

    //sure if file exist or not exist
    if (fs.existsSync('./data.json')) {

        //reading file as non-blocking
        fs.readFile('./data.json', 'utf8', (err, data) => {
            // error handling
            if (err) {
                console.log('Error reading', err);
            } else {
                console.log('data', data);
            }
        })
    } else {
        console.log('Opps 404 🤪 ');
    }
}
module.exports = {
    read_todos
}