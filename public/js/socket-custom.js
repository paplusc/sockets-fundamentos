var socket = io();

// escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor')
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor')
});


// enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola Mundo'
}, function(res) {
    console.log('Respuesta server ', res)
});

// escuchar informacion
socket.on('enviarMensaje', function(message) {
    console.log('Servidor', message)
});