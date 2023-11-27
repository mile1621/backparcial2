import {getConnection,sql,queris } from "../database";

export const getClientes = async (req,res) => {
   //console.log('hola')
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queris.getAllClientes);
       console.log(result.recordset)
        res.json(result)
        
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end();
    }
    
} 
async function getIDu(correo) {
    try {
        const pool = await getConnection();   
        const idusuario = await pool.request()
            .input("correo", sql.VarChar, correo)
            .query(queris.getIDusuario);
        return idusuario.recordset[0];
    } catch (error) {
        console.error('Error en getIDu:', error);
        throw error; // Rechazar la promesa para que el error se propague
    }
}

export const createNewCliente = async (req,res) => {
    const { correo} = req.body
    //console.log(marca_id, temporada_id, color_id,categoria_id,codigo,nombre,costo)

    try {
        const IDU = await getIDu(correo);

        const pool = await getConnection();
        await pool.request()
            .input("IDU", sql.Int, IDU.ID)
            .query(queris.addNewCliente);

        // Enviar una respuesta HTTP aquí si es necesario
        res.status(200).json({ message: 'Nuevo cliente creado exitosamente' });
    } catch (error) {
        console.error('Error en createNewGerente:', error);
        res.status(500).send('Error interno del servidor');
    }
     
 } 

 export const updateCliente = async (req,res) => {
    const { marca_id, temporada_id, color_id,categoria_id,codigo,nombre,costo} = req.body
    const { id } = req.params;
    //console.log(marca_id, temporada_id, color_id,categoria_id,codigo,nombre,costo)

    try {
        const pool = await getConnection();
    
        await pool.request()
        .input("Id",id)
        .input("marca_id",sql.Int,marca_id)
        .input("temporada_id",sql.Int,temporada_id)
        .input("color_id",sql.Int,color_id)
        .input("categoria_id",sql.Int,categoria_id)
        .input("codigo",sql.VarChar,codigo)
        .input("nombre",sql.VarChar,nombre)
        .input("costo",sql.Int,costo)
        .query(queris.update)

       res.json("new product")
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end();
    }
    
}
