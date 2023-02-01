import { Router } from 'express'
import { 
    crearClientes,
    obtenerListaClientes
} from '../controllers/clientes.controllers.js'

const clientesRoutes = Router()

clientesRoutes.post('/crear', crearClientes)
clientesRoutes.get('/lista', obtenerListaClientes)

export default clientesRoutes