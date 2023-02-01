import { pool } from "../db.js";

export const obtenerListaMetodosPago = async (req, res) => {
    try {
        const [metodosPago] = await pool.query('SELECT * FROM detalle_metodo_pago')
        res.status(200).json({message: 'Lista de métodos de pago', metodosPago})
    } catch (error) {
        res.status(400).json({message: "Error al obtener la lista de métodos de pago"})
        console.log('Error al obtener la lista de métodos de pago: ', error)
    }
}