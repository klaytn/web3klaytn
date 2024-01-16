const fs = require('fs');

const regex = /parameters:[\n\s.\-\w:,"$'#\/()\\<>`’]*requestBody:/g;

const path = process.env.RPC_SPEC_DIR || "./"
fs.readdir(path, (err, files) => {
    files.forEach(file => {
        if (file.startsWith('web3rpc')) {
            // Read the file contents
            let fileContents = fs.readFileSync(path + "/" + file, 'utf8');
            
            // Replace the matching text
            let newFileContents = fileContents.replace(regex, 'requestBody:');
            
            // Write the updated contents back to the file
            fs.writeFileSync(path + "/" + file, newFileContents);
        }
    })
})

console.log('Done!');