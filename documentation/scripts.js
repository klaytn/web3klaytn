const fs = require('fs');

const regex = /parameters:[\n\s.\-\w:,"$'#\/()\\<>`’]*requestBody:/g;

fs.readdir('./', (err, files) => {
    files.forEach(file => {
        if (file.startsWith('web3rpc')) {
            // Read the file contents
            let fileContents = fs.readFileSync(file, 'utf8');
            
            // Replace the matching text
            let newFileContents = fileContents.replace(regex, 'requestBody:');
            
            // Write the updated contents back to the file
            fs.writeFileSync(file, newFileContents);
        }
    })
})

console.log('Done!');