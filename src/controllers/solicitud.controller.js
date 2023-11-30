import {getConnection,sql,queris } from "../database";
import { createWriteStream } from 'fs';


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

export const CreateNewPostulacion = async (req,res) => {
  const { tiempo_llegada ,costo_estimado ,servicio,ID_solicitud } = req.body
  //console.log(marca_id, temporada_id, color_id,categoria_id,codigo,nombre,costo)

  try {
      const pool = await getConnection();
  
      await pool.request()
      .input("tiempo_llegada",sql.Int,tiempo_llegada)
      .input("costo_estimado",sql.Int,costo_estimado)
      .input("servicio",sql.VarChar,servicio)
      .input("ID_solicitud",sql.Int,ID_solicitud)
      .query(queris.addNewPostulacion)

      res.json("new Postulacion")
  } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end();
  }
}


export const getAllPostulaciones = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool.request().query(queris.getAllPostulaciones);

    // El resultado contiene un conjunto de registros de la base de datos
    const postulaciones = result.recordset;

    res.json({ postulaciones });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const getAllSolicitudes = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool.request().query(queris.getAllSolicitudes);

    // El resultado contiene un conjunto de registros de la base de datos
    const solicitudes = result.recordset;

    res.json({ solicitudes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const getAudioFile = async (req, res) => {
  const solicitudId = req.params.id;

  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input('id', sql.Int, solicitudId)
      .query(queris.getAudioPath); // Asegúrate de tener la consulta adecuada para obtener la ruta del archivo de audio

    if (result.recordset.length === 0) {
      return res.status(404).json({ error: 'Solicitud no encontrada' });
    }

    const audioPath = result.recordset[0].audio;

    // Devuelve el archivo como respuesta
    res.sendFile(audioPath);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const createNewSolicitud = async (req, res) => {
  const { latitud, longitud, descripcion, ID_cliente } = req.body;

  try {
    const pool = await getConnection();

    if (!req.files || Object.keys(req.files).length === 0) {        //validación de los archivos , podés ignorar
      return res.status(400).json({ error: 'Debe adjuntar archivos de audio y foto' });
    }

    const audioPath = req.files.audio[0].path;
    const fotoPath = req.files.foto[0].path;

    await pool
      .request()
      .input('latitud', sql.Float, latitud)
      .input('longitud', sql.Float, longitud)
      .input('audio', sql.VarChar, audioPath)
      .input('foto', sql.VarChar, fotoPath)
      .input('descripcion', sql.VarChar, descripcion)
      .input('ID_cliente', sql.Int, ID_cliente)
      .query(queris.addNewSolicitud);

    res.json('Nueva Solicitud creada exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
/*
export const createNewSolicitud = async (req, res) => {
  const { latitud, longitud, descripcion, ID_cliente } = req.body;

  try {
    const pool = await getConnection();

    if (!req.file) {
      return res.status(400).json({ error: 'Debe adjuntar un archivo de audio' });
    }

    const audioPath = req.file.path;

    await pool
      .request()
      .input('latitud', sql.Float, latitud)
      .input('longitud', sql.Float, longitud)
      .input('audio', sql.VarChar, audioPath) // Guarda la ruta del archivo en la base de datos
      .input('descripcion', sql.VarChar, descripcion)
      .input('ID_cliente', sql.Int, ID_cliente)
      .query(queris.addNewSolicitud);

    res.json('Nueva Solicitud creada exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

*/
  
/*
export const createNewSolicitud = async (req,res) => {
    const { latitud ,longitud ,audio ,descripcion ,ID_cliente } = req.body;

    try {
        const pool = await getConnection();
    
        await pool.request()
        .input("latitud",sql.Float,latitud)
        .input("longitud",sql.Float,longitud)
        .input("audio",sql.VarChar, audio) // Almacena como VARBINARY
        .input("descripcion",sql.VarChar,descripcion)
        .input("ID_cliente",sql.Int,ID_cliente)
        .query(queris.addNewSolicitud)

        res.json("new Solicitud")
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end();
    }
    
}
*/


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
