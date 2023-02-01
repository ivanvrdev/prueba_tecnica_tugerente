import { Router } from "express"
import { obtenerListaMetodosPago } from "../controllers/metodosPago.controllers.js"

const metodosPagoRoutes = Router()

metodosPagoRoutes.get('/lista', obtenerListaMetodosPago)

export default metodosPagoRoutes