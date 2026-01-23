const fs = require('fs');

const filePath = "students.csv"

//utf-8 to explain the filesytem that we are giving a csv - comma separated file
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
    } 
    else if(data){

        const rows = data.split('\n');
        let fields = [] // leave it empty with a scope to add more fields later
        let program = "" // 
        let filePathToWrite = ""
        let dataToWrite = ""

        rows.forEach(record => {
            fields = record.split(','); // split each record by comma
            program = fields[2]; // assuming program is the 3rd field (index 2)

            if(program !== undefined){
                filePathToWrite = `${program}.csv`; 
                // create a file name based on program
            dataToWrite = `${record}\n`;

            fs.appendFile(filePathToWrite, dataToWrite, 'utf-8', (error) => {
                if (error) {
                    console.error(`Error writing to file ${filePathToWrite}:`, error);
                } else {
                    console.log(`Record added to ${filePathToWrite}`);
                }


        })

    }
        })
    } else {
        console.log(`No data found in ${filePath} (async).`);
    }   
});