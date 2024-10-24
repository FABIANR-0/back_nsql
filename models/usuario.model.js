/*import pgService from "../services/pg.services.js";

export const getUsuario = async (access)=> {
    const pg =  new pgService(); 
    return  await pg.connection.query(`SELECT id FROM usuario where username = $1 and password = $2`, [access.username, access.password]);
}*/


import mongoService from "../services/mg.services.js"; // La clase de conexión para MongoDB

export const getUsuario = async (access) => {
    const mongo = new mongoService();  // Instancia de tu servicio Mongo
    const db = mongo.connection.db("db"); // Accede a la base de datos
    const usuarios = db.collection("usuario");  // Selecciona la colección `usuario`

    try {
        
        // Busca el usuario por nombre y contraseña
        const usuario = await usuarios.findOne({
            username: access.username,
            password: access.password
        });

        // Retorna el ID del usuario si lo encuentra
        if (usuario) {
            return [ usuario._id.toString()  ];
        } else {
            return null;  // Si no existe, retorna null
        }
    } catch (error) {
        console.error("Error consultando MongoDB:", error);
        throw error;
    }
};