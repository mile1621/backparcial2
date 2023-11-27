import express from 'express'
import config from './config'
import authRoutes from './routes/auth.routes'
import tallerRoutes from './routes/taller.routes'
import gerenteRoutes from './routes/gerente.routes'
import clienteRoutes from './routes/cliente.routes'
import vehiculoRoutes from './routes/vehiculo.routes'

const bodyParser = require('body-parser');
const app = express()
//let port; 
//setings
app.set('port', config.port)

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(authRoutes,tallerRoutes,gerenteRoutes,clienteRoutes,vehiculoRoutes)

export default app