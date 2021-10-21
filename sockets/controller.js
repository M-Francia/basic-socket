


const socketController = (socket) => {

    console.log("Cliente conectado");

    socket.on("disconnect", () =>{

        console.log("Cliente descoenctado");

    });

    socket.on("enviar-mensaje", (payload, callbackClient) => {

        const id = 1213;
        callbackClient(id); //Ejecutara el callback del cliente en el cliente
        //socket.emit("enviar-mensaje", payload); //emite solo al que se ha conectado
        socket.broadcast.emit("enviar-mensaje", payload);

    })

}


module.exports = {
    socketController
}