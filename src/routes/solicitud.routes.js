import {Router} from 'express'
import {Countproducts, createNewSolicitud, getAllSolicitudes,getAllPostulaciones,deleteproduct, getProducts,getbyID, updateProduct, CreateNewPostulacion} from '../controllers/solicitud.controller'



import multer from 'multer';        //necesario para usar archivos de audio o cualquier otro
const path = require('path');       //necesario para usar archivos de audio o cualquier otro

const storage = multer.diskStorage({       //necesario para usar archivos de audio o cualquier otro
  destination: function (req, file, cb) {
    cb(null, 'Uploads/'); // Ruta donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));   //Nombre con el que se guardará el archivo
  },
});

const upload = multer({ storage: storage });      //necesario para usar archivos de audio o cualquier otro




const router = Router()

router.get('/products',getProducts)

router.get('/products/count',Countproducts)

router.post('/registersolicitud', upload.fields([{ name: 'audio', maxCount: 1 }, { name: 'foto', maxCount: 1 }]), createNewSolicitud);
//router.post('/registersolicitud',upload.single('audio'),createNewSolicitud)      //ESTO OCUPA MILENKA
//router.post('/registersolicitud',createNewSolicitud)

router.get('/allsolicitudes',getAllSolicitudes);


router.get('/allpostulaciones',getAllPostulaciones);

router.post('/registerpostulaciones',CreateNewPostulacion);


router.get('/products/:id',getbyID)

router.delete('/products/:id',deleteproduct)

router.put('/products/:id',updateProduct)

export default router


