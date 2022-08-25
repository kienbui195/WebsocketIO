const http = require('http');
const fs = require('fs');
const { Server } = require('socket.io');
const port = 8080;

const httpServer = http.createServer((req, res) => {
    const data = fs.readFileSync('./template/index.html',{encoding: 'utf-8' , flag: 'r'});
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write(data);
    res.end();
});

const io = new Server(httpServer);
io.on('connection', (socket) => {
    console.log('A user connected!')
});

httpServer.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`) ;
});