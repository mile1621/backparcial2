import {Router} from 'express'
import {CountClientes, createNewCliente, deleteCliente, getClientes,getbyID, updateCliente} from '../controllers/cliente.controller'

const router = Router()

router.get('/cliente',getClientes)

//router.get('/cliente/count',CountClientes)

router.post('/registercliente',createNewCliente)

//router.get('/cliente/:id',getbyID)

//router.delete('/cliente/:id',deleteCliente)

//router.put('/cliente/:id',updateCliente)

export default router


