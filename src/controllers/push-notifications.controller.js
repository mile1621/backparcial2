import admin from 'firebase-admin'
import {getConnection,sql,queris } from "../database";
import llave from "../../config/flutter-projects-dacb5-firebase-adminsdk-gzexl-b5fc8715c9.json"
function initFirebase(){
    const serviceAcount = require("../../config/flutter-projects-dacb5-firebase-adminsdk-gzexl-b5fc8715c9.json");

 admin.initializeApp({
    
    credential: admin.credential.cert(serviceAcount),
 });
}

initFirebase();

export function sendPushToOneUser(notification) {
    const message = {
        token: notification.tokenId,
        notification: {
            title: notification.titulo,
            body: notification.mensaje
        },
        data: {
            // Puedes agregar datos adicionales si es necesario
            // Por ejemplo:
            // key1: 'value1',
            // key2: 'value2',
        }
    };
    SendMessage(message);
}

function SendMessage(message){
    
    admin.messaging().send(message)
    
}
/*
export const SendtoOne = async (req,res) => {
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
     
 } */