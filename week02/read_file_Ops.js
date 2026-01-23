const fs = require('fs')
const filePath = "input_data.txt"

// async method
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error("Error reading file:", err)
        return
    }else{
        if(data){// check if data is not undefined
            console.log(`data from ${filePath} (async): \n ${data}`)
        }
        else{

            console.log(`No data found in ${filePath} (async).`)
        }
    }
})

// sync method

console.log("\n\n")

const fileData = fs.readFileSync(filePath)
console.log(`data from ${filePath} (sync): \n ${fileData}`)



