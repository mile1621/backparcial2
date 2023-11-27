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
    getbyIDV:"SELECT * FROM vehiculo where ID=@id",
    deleteVehiculo: "DELETE FROM vehiculo WHERE ID=@id",
    countVehiculos :"SELECT COUNT(*) FROM vehiculo",
    updateVehiculo:"UPDATE vehiculo set marca=@marca,modelo=@modelo,año=@año,placa=@placa,color=@color,ID_cliente=@ID_cliente",
}