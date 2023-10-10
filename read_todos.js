const fs = require('fs');

function read_todos() {

    if (fs.existsSync('./data.json')) {
        fs.readFile('./data.json', 'utf8', (err, data) => {
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