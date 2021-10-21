

const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
txtMensaje = document.querySelector("#txtMensaje");
btnEnviar = document.querySelector("#btnEnviar");

const socket = io();

//Event listener, escuchan cambios
//On es para escuchar eventos
socket.on("connect",() =>{
    // console.log("Conectado");
    lblOffline.style.display = "none";
    lblOnline.style.display = "";
}); 

socket.on("disconnect",() => {
    // console.log("Desconectado =S");
    lblOffline.style.display = "";
    lblOnline.style.display = "none";
});

socket.on("enviar-mensaje", (payload) => {
    console.log(payload);
})

btnEnviar.addEventListener("click", () =>{

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id : "Asdasdasd",
        fecha: new Date().getTime()
    }
    socket.emit("enviar-mensaje", payload, (id) => {
        console.log("Desde el server",id);
    });

});