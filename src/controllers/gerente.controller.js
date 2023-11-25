import {getConnection,sql,queris } from "../database";

export const getProducts = async (req,res) => {
   //console.log('hola')
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queris.getAllProducts);
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

async function getIDt(razons) {
    try {
        const pool = await getConnection();   
        const idtaller = await pool.request()
            .input("razonsocial", sql.VarChar, razons)
            .query(queris.getIDtaller);
       
        return idtaller.recordset[0];
    } catch (error) {
        console.error('Error en getIDt:', error);
        throw error; // Rechazar la promesa para que el error se propague
    }
}
async function actualizarRol(id) {
  
    try {
       const rol = "A"
       const pool = await getConnection();
         await pool
       .request()
       .input("Id",id)
       .input("rol",rol)
       .query(queris.updateRol);  
       //res.send("exitoso");
    } catch (error) {
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       res.end();
    }

}
export const createNewGerente = async (req, res) => {
    const { correo, razonsocial } = req.body;

    try {
        const IDU = await getIDu(correo);
        const IDT = await getIDt(razonsocial);
        await actualizarRol(IDU.ID);
       
        
        const pool = await getConnection();
        await pool.request()
            .input("IDU", sql.Int, IDU.ID)
            .input("IDT", sql.Int, IDT.ID)
            .query(queris.addNewGerente);

        // Enviar una respuesta HTTP aquí si es necesario
        res.status(200).json({ message: 'Nuevo gerente creado exitosamente' });
    } catch (error) {
        console.error('Error en createNewGerente:', error);
        res.status(500).send('Error interno del servidor');
    }
};


export const getbyID = async (req,res) => { 
     const { id } = req.params; 
     try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",id)
        .query(queris.addbyID);  
       // console.log(result);
        res.send(result.recordset[0]);
     } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end();
     }

}

export const deleteproduct = async (req,res) => { 
    const { id } = req.params; 
    try {
       const pool = await getConnection();
       const result = await pool
       .request()
       .input("Id",id)
       .query(queris.deletebyID);  
       //res.end();
      // console.log(result);
     res.send(result);
    } catch (error) {
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       res.end();
    }

}

export const Countproducts = async (req,res) => {
    console.log('hola')
     try {
         const pool = await getConnection();
         const result = await pool.request().query(queris.count);
       //  console.log(result)
         res.json(result.recordset[0]['']);
     } catch (error) {
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         res.end();
     }
     
 } 

 export const updateProduct = async (req,res) => {
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
