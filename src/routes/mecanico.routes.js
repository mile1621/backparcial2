import {Router} from 'express'
import { createNewMecanico, getMecanicos } from '../controllers/mecanico.controller'

const router = Router()

router.get('/mecanico',getMecanicos)

//router.get('/cliente/count',CountClientes)

router.post('/registermecanico',createNewMecanico)

//router.get('/cliente/:id',getbyID)

//router.delete('/cliente/:id',deleteCliente)

//router.put('/cliente/:id',updateCliente)

export default router


