import { MongoClient } from 'mongodb';
import { exports } from '../config/default.js';

export default class MongoService {
    
    static instance;
    connection;

    constructor() {
        if (MongoService.instance) {
            return MongoService.instance;
        }
        MongoService.instance = this;

        this.connection = new MongoClient(exports.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        this.connection.connect()
            .then(client => {
                console.log("Conectado a MongoDB");
                this.db = client.db(); // Almacena la referencia a la base de datos si la necesitas
            })
            .catch(error => {
                console.log("Error de conexión a MongoDB:", error.message || error);
            });
    }
}