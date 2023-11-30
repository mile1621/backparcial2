import {Router} from 'express'
import {sendPushToOneUser} from '../controllers/push-notifications.controller'
//import { Notification } from 'firebase-admin/lib/messaging/messaging-api';
const router = Router()
router.get("/one-user", function(req, res){
    try {
        res.send("Sending Notification to One user");
    const data ={
        tokenId:"eLCElPyXTuGl46HBkZQl69:APA91bGG0CqCX9ZEGdr-qIwucXnt54foQwoUuSKUb9LLl4EMoajOwjxHcDzYtVfVUwlhF0SMOfnojO5Q-Lvh6O4ydKtNm-CMxiCfzpMVeDI10dq_--Ca8AhEpQqSV8rq2uRzEArMOCQy",
        titulo:"MENSAJE",
        mensaje:"Mensaje desde Node"
    }
    console.log("hola");
    sendPushToOneUser(data);
    } catch (error) {
        console.log(error);
    }
    
})

export default router