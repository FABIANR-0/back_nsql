import { getUsuario } from "../models/usuario.model.js" ;
import { generateToken } from "../services/token.service.js";

export const login = async (req, res) =>{
    try{
        const access = req.body;
        let data = await  getUsuario(access); 
        if(!data[0]){
            throw new Error("Credenciales no válidas");
        }
        console.log(data[0])
        res.status(200).json({
           
            token : generateToken(data),
            id:data[0],
            success: true, 
            msg : "Logeado Correctamente"
        });
    }catch(e){  
        res.status(401).json({
            success: false, 
            data: "Servicio no disponible" , 
            msg : "Servicio no disponible"
        });  
    }
}