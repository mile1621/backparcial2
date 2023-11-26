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

export const createNewSolicitud = async (req,res) => {
    const { latitud ,longitud ,audio ,descripcion ,ID_cliente } = req.body
    //console.log(marca_id, temporada_id, color_id,categoria_id,codigo,nombre,costo)

    try {
        const pool = await getConnection();
    
        await pool.request()
        .input("latitud",sql.Float,latitud)
        .input("longitud",sql.Float,longitud)
        .input("audio",sql.VarChar,audio)
        .input("descripcion",sql.VarChar,descripcion)
        .input("ID_cliente",sql.Int,ID_cliente)
        .query(queris.addNewSolicitud)

        res.json("new Solicitud")
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end();
    }
    
}

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
