const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', { usuario: 'admin', message: 'Welcome!' });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (message.usuario) {
        //     callback({
        //         res: 'BIEN'
        //     });
        // } else {
        //     callback({
        //         res: 'MAL'
        //     });
        // }
    });
});