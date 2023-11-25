import {getConnection,sql,queris } from "../database";
import { httpError } from "../helpers/handleError";
import { encrypt,compare } from "../helpers/handleBcrypts";
import { tokenSign } from "../helpers/generateToken";

export const registerCtrl = async (req,res) => {
    try {
        const { nombre,ci,correo,contraseña,direccion,rol} = req.body
        const passwordHash = await encrypt(contraseña)
        const pool = await getConnection();
        const rolValue = rol || 'U';
    
         await pool.request()
        .input("ci",sql.VarChar,ci)
        .input("nombre",sql.VarChar,nombre)
        .input("correo",sql.VarChar,correo)
        .input("contraseña",sql.VarChar,passwordHash)
        .input("direccion",sql.VarChar,direccion)
        .input("rol",sql.VarChar,rolValue)
        .query(queris.addNewUser)
        res.json("new user")
    } catch (error) {
        httpError(res, error)
    }
} 

export const loginCtrl = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;
        const pool = await getConnection();
        
        const userl = await pool
            .request()
            .input("correo", sql.VarChar, correo)
            .query(queris.SearchCorreo);
        
        const user =userl.recordset[0];
        // Comprueba si ya existe un registro con ese correo
        if (userl.recordset.length > 0) {
            
            const user_contraseña = user.contraseña;
            const checkcontraseña = await compare(contraseña, user_contraseña);
            const tokenSession = await tokenSign(user)

            if (checkcontraseña) {
                console.log('correcto');
                res.status(200).json({ user });
            } else {
                console.log('contraseña inválida');
                res.status(409).json({ error: 'Contraseña inválida' }); // Cambiado a 401 para indicar un problema de autenticación
            }
        } else {
            console.log('correo no encontrado');
            res.status(404).json({ error: 'Correo no encontrado' }); // Cambiado a 404 para indicar que el recurso no se encuentra
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}





