const fs = require('fs');
const path = require('node:path');

// const pathToFile = 
const stream = fs.createReadStream('./01-read-file/text.txt', {
    encoding: 'utf8'
});

stream.on('data', (chunk) => console.log(chunk));