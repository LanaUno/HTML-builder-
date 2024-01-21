const fs = require('fs');
const readline = require('readline');

fs.writeFile('./02-write-file/text.txt', " ", {encoding: 'utf8', flag: 'a'} , (err) => {
    if (err) throw err;
})

const rl = readline.createInterface(
    process.stdin, process.stdout);

rl.setPrompt(`Hello, please enter below your message:
`);
rl.prompt();
rl.on('line', (message) => {
    fs.writeFile('./02-write-file/text.txt', message+'\n', {encoding: 'utf8', flag: 'a'} , (err) => {
        if (err) throw err;
    })
});
rl.on('line', (line) => {
    if (line === 'exit') {
        rl.setPrompt(`The end of the message`);
        rl.prompt();
        rl.close(); 
        return; 
    }
})

