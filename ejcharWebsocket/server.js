const express = require('express');

const { Server: IOServer } = require('socket.io');

const { Server: HttpServer } = require('http');
const { Socket } = require('dgram');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));


app.get('/', (req, res)=>{

    res.sendFile('index.html', { root: __dirname});
});

httpServer.listen(8000, () => console.log('SERVER ON'));

const messages =[
    {author: 'Alejandro', text: 'Hola!!!!'},
    {author: 'Julith', text: 'Hola como estas ?'},
    {author: 'Gonzalo', text: 'Muy bien'}
]; 

io.on('connection', (socket)=>{
    console.log("Un cliente se ha conectado");
    socket.emit('messages', messages);
    socket.on('new-message', message=>{
        messages.push(message);
        io.sockets.emit('messages', messages)
    });
});

// const messages = [];
// io.on('connection', (socket)=>{
//     console.log("usuario conectado");
//     // socket.emit('message', 'Este mensaje lo envia el servidor');
//     // socket.on('messageFromClient', data =>{
//     //     console.log(data);
//     // });
//     socket.emit('messages', messages);

//     socket.on('message', data =>{
//         messages.push({SocketId: socket.id, message: data});
//         io.sockets.emit('messages', messages)

//     })
// });