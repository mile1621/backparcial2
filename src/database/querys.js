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

    //añadiendo solicitud
    addNewSolicitud:"INSERT INTO solicitud (latitud ,longitud ,audio ,descripcion,ID_cliente) VALUES (@latitud ,@longitud ,@audio ,@descripcion,@ID_cliente)",

}