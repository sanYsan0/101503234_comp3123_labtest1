const fs = require("fs")
const path = require("path")

const logsPath = path.join(process.cwd(), ("Logs"))

if(fs.existsSync(logsPath)) {
    const files = fs.readdirSync(logsPath)
    files.forEach((fileName) => {
        console.log(fileName)
        fs.unlinkSync(path.join(logsPath, fileName))
    })
    fs.rmdirSync(logsPath)
}