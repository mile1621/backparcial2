import {Router} from 'express'
import { CountVehiculos, createNewVehiculo, deleteVehiculo, getVehiculos,getbyIDV, updateVehiculo } from '../controllers/vehiculo.controller'

const router = Router()

router.get('/vehiculo',getVehiculos)

router.get('/vehiculos/count',CountVehiculos)

router.post('/registervehiculo',createNewVehiculo)

router.get('/vehiculo/getbyID/:id',getbyIDV)

router.delete('/vehiculo/eliminar/:id',deleteVehiculo)

router.put('/vehiculo/actualizar/:id',updateVehiculo)

export default router


