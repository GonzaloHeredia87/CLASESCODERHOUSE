const socket = io();

const input = document.querySelector('input');
const button = document.querySelector('button');

document.querySelector('button').addEventListener('click', ()=>{
    socket.emit('message', input.value);
});

// input.addEventListener('input', ()=>{
//     socket.emit('message', input.value);
// });



socket.on('messages', messages =>{
    const htmlMessage = messages.map(
        message => `SocketId: ${message.SocketId} -> Mensaje: ${message.message}`
    ).join('<br>');  
    //alert(data);
    //socket.emit('messageFromClient', 'Este es un mensaje enviado desde el cliente usando Socket');
    document.querySelector('p').innerHTML = htmlMessage;
    
});