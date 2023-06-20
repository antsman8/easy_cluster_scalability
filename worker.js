const http = require('http');
const pid = process.pid;

const server = http
    .createServer((req, res) => {
        for (let i = 0; i < 1e7; i++) {}
        res.end('Hello from node');
    })
    .listen(3000, () => {
        console.log(`Worker started, Pid: ${pid}`);
    });
