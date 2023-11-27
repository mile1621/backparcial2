import {Router} from 'express'
import {Countproducts, createNewSolicitud, deleteproduct, getProducts,getbyID, updateProduct} from '../controllers/solicitud.controller'

const router = Router()

router.get('/products',getProducts)

router.get('/products/count',Countproducts)

router.post('/registersolicitud',createNewSolicitud)

router.get('/products/:id',getbyID)

router.delete('/products/:id',deleteproduct)

router.put('/products/:id',updateProduct)

export default router


