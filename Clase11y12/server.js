const express = require('express');

const { Server: IOServer } = require('socket.io');

const { Server: HttpServer } = require('http');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));

app.get('/', (req, res)=>{

    res.sendFile('index.html', { root: __dirname});
});

httpServer.listen(8000, () => console.log('Server On'));

const messages = [];
io.on('connection', (socket)=>{
    console.log("usuario conectado");
    // socket.emit('message', 'Este mensaje lo envia el servidor');
    // socket.on('messageFromClient', data =>{
    //     console.log(data);
    // });
    socket.emit('messages', messages);

    socket.on('message', data =>{
        messages.push({SocketId: socket.id, message: data});
        io.sockets.emit('messages', messages)

    })
});



