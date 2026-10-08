const fs = require("fs")
const path = require("path")

const logsPath = path.join(process.cwd(), "Logs")

if(!fs.existsSync(logsPath)) {
    fs.mkdirSync(logsPath)
}

process.chdir(logsPath)

for(let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`
    fs.writeFileSync(fileName, "This is a log file!")
    console.log(fileName)
}