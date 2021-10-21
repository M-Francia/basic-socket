const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {
    
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);


        this.paths = {}

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();

        //Sockets
        this.sockets();
    }

    sockets() {

        this.io.on('connection', socketController);

    }


    middlewares(){

        //CORS
        this.app.use( cors() );

        //Public folder
        this.app.use( express.static('public') );
        
    }

    routes(){

        //this.app.use(this.paths.usuarios, require('../routes/usuarios'));

    }


    listen(){
        this.server.listen(process.env.PORT, () => {
            console.log('Corriendo en ', this.port);
        });
    }
}


module.exports = Server;