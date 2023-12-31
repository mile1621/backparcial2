export const queris = {
    //para uutenticacion y login
    addNewUser:"INSERT INTO usuario (ci,nombre,correo,contraseña,direccion,rol) VALUES (@ci,@nombre,@correo,@contraseña,@direccion,@rol)",
    SearchCorreo: "SELECT * FROM usuario WHERE correo = @correo",
    //para el taller
    addNewTaller:"INSERT INTO taller (licencia_funcionamiento ,razon_social ,propietario ,direccion) VALUES (@licencia_funcionamiento ,@razon_social ,@propietario ,@direccion)",
    //para insertar gerente 
    //primero obtengo su id de usuario
    getIDusuario:"SELECT ID FROM usuario where correo=@correo",
    getIDtaller:"SELECT ID FROM taller where razon_social=@razonsocial",
    //añadiendo gerente
    updateRol:"UPDATE usuario set rol=@rol  WHERE ID=@id",
    addNewGerente:"INSERT INTO gerente (ID,ID_taller) VALUES (@IDU,@IDT)",
    //clientes 
    getAllClientes:"SELECT * FROM cliente",
    addNewCliente:"INSERT INTO cliente (ID) VALUES (@IDU)",
    //vehiculos
    getAllVehiculos:"SELECT * FROM vehiculo",
    addNewVehiculo:"INSERT INTO vehiculo (marca,modelo,año,placa,color,ID_cliente) VALUES (@marca,@modelo,@año,@placa,@color,@ID_cliente)",
    getbyIDV:"SELECT * FROM vehiculo where ID_cliente=@id",
    deleteVehiculo: "DELETE FROM vehiculo WHERE ID=@id",
    countVehiculos :"SELECT COUNT(*) FROM vehiculo",
    updateVehiculo:"UPDATE vehiculo set marca=@marca,modelo=@modelo,año=@año,placa=@placa,color=@color,ID_cliente=@ID_cliente",
    //añadiendo solicitud
    addNewSolicitud:"INSERT INTO solicitud (latitud ,longitud ,audio ,foto,descripcion,ID_cliente) VALUES (@latitud ,@longitud ,@audio ,@foto,@descripcion,@ID_cliente)",
    
    // obtener todas las solicitudes
    getAllSolicitudes: "SELECT * FROM solicitud",

    // obtener el audio de una solicitud por su id
    getAudioPath: "SELECT audio FROM solicitud WHERE ID=@id",

    // obtener todas las postulaciones
    addNewPostulacion: "INSERT INTO postulacion (tiempo_llegada,costo_estimado,servicio,ID_solicitud) VALUES (@tiempo_llegada,@costo_estimado,@servicio,@ID_solicitud)",
    getAllPostulaciones: "SELECT * FROM postulacion",


   // mecanicos
   addNewMecanico:"INSERT INTO mecanico (ID,ID_taller,estado) VALUES (@IDU,@ID_taller,@estado)",
   getAllMecanicos:"SELECT * FROM mecanico",
   getIDt:"SELECT ID_taller FROM gerente where ID=@IDG",
   

} 