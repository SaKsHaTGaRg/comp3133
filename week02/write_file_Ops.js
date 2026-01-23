const fs = require('fs');

let filePath = "output_data.txt";

console.log("Writing to file...");

let dataBuffer = Buffer.from("This is some sample data to be written to the file.\n");

// async method
fs.writeFile(filePath, dataBuffer, (err) => {
    if (err) {
        console.error("Error writing file (async):", err);
        
    }else{
        console.log(`Data successfully written to ${filePath} (async).`);
    }
});

dataBuffer = Buffer.from("Appending this line to the file.\n");

// async method with append flag

fs.writeFile(filePath, dataBuffer,{flag:'a'} ,(err) => {
    if (err) {
        console.error("Error writing file (async):", err);
        
    }else{
        console.log(`Data successfully written to ${filePath} (async).`);
    }
});

// sync method

console.log("\n\n");

dataBuffer = Buffer.from([1,2,3,4,5,5,6,6,7,8,9,0]);

fs.writeFileSync(filePath, dataBuffer);
console.log(`Data successfully written to ${filePath} (sync).`);


//deleting a file

// fs.unlink(filePath, (err) => {
//     if (err) {
//         console.error("Error deleting file (async):", err); 
//     }else{
//         console.log(`File ${filePath} successfully deleted  .`);
//     }  
// });

//unlink used for deletion of file

