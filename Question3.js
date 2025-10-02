
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);

    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        fs.unlinkSync(filePath);
        console.log('delete files...' + file);
    });

    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.');
} else {
    console.log('No Logs directory found to remove.');
}

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Changeing current working directory to Logs
process.chdir(logsDir);

// Created 10 log files and write some text
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i.toString().padStart(2, '0')}.txt`;
    fs.writeFileSync(fileName, `This is log file ${fileName}`);
    console.log(fileName);
}
