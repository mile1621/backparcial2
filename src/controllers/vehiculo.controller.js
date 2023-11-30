import {getConnection,sql,queris } from "../database";

export const getVehiculos = async (req,res) => {
   //console.log('hola')
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queris.getAllVehiculos);
        res.json(result.recordset)
       // console.log(result)

        
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end();
    }
    
} 

export const createNewVehiculo = async (req,res) => {
    const { marca,modelo,año,placa,color,ID_cliente } = req.body
    //console.log(marca_id, temporada_id, color_id,categoria_id,codigo,nombre,costo)

    try {
        const pool = await getConnection();
    
        await pool.request()
        .input("marca",sql.VarChar,marca)
        .input("modelo",sql.VarChar,modelo)
        .input("año",sql.VarChar,año)
        .input("placa",sql.VarChar,placa)
        .input("color",sql.VarChar,color)
        .input("ID_cliente",sql.Int,ID_cliente)
        .query(queris.addNewVehiculo)

        res.json("new Vehiculo")
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end();
    }
    
}

export const getbyIDV = async (req,res) => { 
     const { id } = req.params; 
     try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("id",sql.Int,id)
        .query(queris.getbyIDV);  
       // console.log(result);
        res.send(result.recordset);
     } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end();
     }

}
export const deleteVehiculo = async (req,res) => { 
    const { id } = req.params; 
    try {
       const pool = await getConnection();
       const result = await pool
       .request()
       .input("id",id)
       .query(queris.deleteVehiculo);  
       //res.end();
      // console.log(result);
     res.send(result);
    } catch (error) {
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       res.end();
    }

}

export const CountVehiculos = async (req,res) => {
   // console.log('hola')
     try {
         const pool = await getConnection();
         const result = await pool.request().query(queris.countVehiculos);
       //  console.log(result)
         res.json(result.recordset[0]['']);
     } catch (error) {
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         res.end();
     }
     
 } 

 export const updateVehiculo = async (req,res) => {
    const { marca,modelo,año,placa,color,ID_cliente} = req.body
    const { id } = req.params;
    //console.log(marca_id, temporada_id, color_id,categoria_id,codigo,nombre,costo)

    try {
        const pool = await getConnection();
    
        await pool.request()
        .input("id",id)
        .input("marca",sql.VarChar,marca)
        .input("modelo",sql.VarChar,modelo)
        .input("año",sql.VarChar,año)
        .input("placa",sql.VarChar,placa)
        .input("color",sql.VarChar,color)
        .input("ID_cliente",sql.Int,ID_cliente)
        .query(queris.updateVehiculo)

       res.json("vehiculo actualizado")
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end();
    }
    
}
