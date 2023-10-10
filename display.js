const fs = require('fs');

function display() {

    if (fs.existsSync('./data.json')) {
        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading', err);
            } else {
                console.log('data', data);
            }
        })
    }
}
module.exports = {
    display
}