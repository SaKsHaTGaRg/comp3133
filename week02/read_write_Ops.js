const fs = require('fs');

const filePath = "data.txt";
//fd is like a token to access the file , it will be active until the mode(read write) is completed

fs.open(filePath , 'r+', (err, fd) => {
    if (err) {
        console.error("Error opening file:", err);
        
    }
    else{
        console.log(`File ${filePath} opened successfully with file descriptor: ${fd}`);

        // Perform read or write operations using the file descriptor (fd)
        const fileData = fs.readFileSync(fd);
        console.log(`fileData : \n ${fileData}`);

        const dataBuffer = Buffer.from("\nAdding this line using file descriptor.\n");
        fs.write(fd,dataBuffer,(err) => {
            if (err) {
                console.error("Error writing to file using fd:", err);
            } else {
                console.log(`Data successfully written to ${filePath} using file descriptor.`);
            }   
        });
        fs.close(fd)


    }
});

