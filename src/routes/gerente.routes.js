import {Router} from 'express'
import {Countproducts, createNewGerente, deleteproduct, getProducts,getbyID, updateProduct} from '../controllers/gerente.controller'

const router = Router()

router.get('/products',getProducts)

router.get('/products/count',Countproducts)

router.post('/registergerente',createNewGerente)

router.get('/products/:id',getbyID)

router.delete('/products/:id',deleteproduct)

router.put('/products/:id',updateProduct)

export default router