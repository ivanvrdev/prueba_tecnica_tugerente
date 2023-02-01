import express from "express"
import morgan from "morgan"
import { config } from "dotenv"

import clientesRoutes from "./routes/clientes.routes.js"
import reservasRoutes from "./routes/reservas.routes.js"
import metodosPagoRoutes from "./routes/metodosPago.routes.js"

config()

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/clientes', clientesRoutes)
app.use('/reservas', reservasRoutes)
app.use('/metodos_pago', metodosPagoRoutes)

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), ()=>console.log(`Servidor corriendo en el puerto ${app.get('port')}`))
