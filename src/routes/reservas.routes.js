import { Router } from "express"
import { 
    crearReserva, 
    eliminarReserva, 
    obtenerListaReservas,
    pagarReserva
} from "../controllers/reservas.controllers.js"

const reservasRoutes = Router()

reservasRoutes.post('/crear', crearReserva)
reservasRoutes.get('/lista', obtenerListaReservas)
reservasRoutes.put('/pagar/:id', pagarReserva)
reservasRoutes.put('/eliminar/:id', eliminarReserva)

export default reservasRoutes