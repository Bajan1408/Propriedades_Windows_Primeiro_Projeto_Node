const http = require('http');
const host = 'http://localhost';
const port = 3000;


http.createServer((req, res) => {
    res.end('<h1>Working now!</h1>')
}).listen(port, () => console.log(`Server is running as ${host}:${port}`));
