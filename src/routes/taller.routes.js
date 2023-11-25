import {Router} from 'express'
import {Countproducts, createNewTaller, deleteproduct, getProducts,getbyID, updateProduct} from '../controllers/taller.controller'

const router = Router()

router.get('/products',getProducts)

router.get('/products/count',Countproducts)

router.post('/registertaller',createNewTaller)

router.get('/products/:id',getbyID)

router.delete('/products/:id',deleteproduct)

router.put('/products/:id',updateProduct)

export default router


