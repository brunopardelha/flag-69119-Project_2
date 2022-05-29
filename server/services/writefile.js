const fs = require('fs/promises');
const path = require('path');


const writeToFile = async (type, ...message) => {
    let file_name = '';

    switch (type) {
        case 'user': file_name = 'users.txt'; break;
        case 'server': file_name = 'server.txt'; break;
        case 'db': file_name = 'database.txt'; break;
        default: file_name = 'general.txt'; break;
    }

    const filePath = path.join(__dirname, '..', 'data', 'logs', file_name);

    await fs.appendFile(filePath, message + '\n');
}

module.exports = writeToFile;