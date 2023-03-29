import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

//Guarda en la variable app la funcion de express
const app = express();
//Crea un servidor http con express (localhost:3000)
const server = http.createServer(app);
//crea un servidor socket.io con el servidor http
const io = new Server(server, {
    cors: {
        origin: true,
        credentials: true,
        methods: ['GET', 'POST'],
    }
});
//Alguien esta esuchando ese evento de conexion/alguien se conecto
io.on('connection', (socket) => {
    console.log('user connected');

    //El correo es el intermediario por ejemplo el id en db
    //PASO 2
    socket.on('jess@gmail.com', (texto, texto2) => {
        console.log(texto, texto2)
    })

    let texto = "Hola Kevin, bien y tu?"
    socket.emit('kevin@gmail.com', texto);
})

server.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})