import { Server } from "socket.io";
import http from 'http';

// basic nodejs runtime server
const app = http.createServer();

// create socket server with nodejs run time server
const io = new Server(app, {
    cors: {
        origin: 'http://localhost:5173'
    }
});

// create a server side socket which has name called connection
// callback function got the client side socket
io.on('connection', (socket) => {
    console.log(`socket is ${socket.id}`);

    // server send an event called join with some data 
    socket.emit('join', 'hello guys join');

    // server listen an event called client and get data
    socket.on('client', (data) => {
        console.log(`asdasd` + data , socket.id);
    });

    socket.on('disconnect', () => {
        console.log(`socket ${socket.id} disconnected`);
    });
});

// start the runtime server
app.listen(4000, () => {
    console.log('Server is running at port 4000');
});