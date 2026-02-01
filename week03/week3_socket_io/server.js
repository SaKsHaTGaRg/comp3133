// npm install express socket.io nodemon
// to run the app npx nodemon server.js

const express = require('express')
const app = express()
const path = require('path');
const socketio = require('socket.io'); // import socket.io



const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client.html'))
})

//start listening to server on PORT
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`)
})

// associate server with socket server 
const ioServer = socketio(server)

// on() func listens to connection event 
// when the event occurs. callback is executed
ioServer.on('connection', (socket) => {
    console.log('New client connected', socket.id);

    // listen to ping event from client
    socket.on('ping',(data)=>{
        console.log(`Received ping from client ${socket.id}: ${data}`);

        socket.emit('pong', `Pong from server to client ${socket.id}`);
        console.log("ON server - PING received, PONG sent");

    });

    socket.on("Disconnect", () => {
        console.log(`Client disconnected ${socket.id}`);
    });
});


