import { pool } from "../db.js"

export const crearReserva = async (req, res) => {
    try {
        const {
            numeroHabitacion,
            fechaEntrada,
            fechaSalida,
            montoPago,
            fkCliente,
            fkMetodoPago
        } = req.body

        const [result] = await pool.query(`
            INSERT INTO reservas (
                numero_habitacion,
                fecha_entrada,
                fecha_salida,
                monto_pago,
                fk_cliente,
                fk_estado,
                fk_metodo_pago
            ) VALUES (
                ${numeroHabitacion},
                "${fechaEntrada}",
                "${fechaSalida}",
                ${montoPago},
                ${fkCliente},
                1,
                ${fkMetodoPago}
            )
        `)
        res.status(201).json({message: 'Reserva creada correctamente', id: result.insertId})

    } catch (error) {
        res.status(400).json({message: 'Error al crear reserva'})
        console.log('Error al crear reserva', error)
    }
}

export const obtenerListaReservas = async (req, res) => {
    try {
        const [reservas] = await pool.query(`
            SELECT
                reservas.id,
                reservas.numero_habitacion,
                reservas.fecha_creacion,
                reservas.fecha_entrada,
                reservas.fecha_salida,
                reservas.fecha_pago,
                reservas.monto_pago,
                clientes.nombre AS cliente_nombre,
                clientes.apellido AS cliente_apellido,
                clientes.numero_documento AS cliente_documento,
                detalle_estado.nombre AS estado,
                detalle_metodo_pago.nombre AS metodo_pago
            FROM reservas
            INNER JOIN clientes ON reservas.fk_cliente = clientes.id
            INNER JOIN detalle_estado ON reservas.fk_estado = detalle_estado.id
            INNER JOIN detalle_metodo_pago ON reservas.fk_metodo_pago = detalle_metodo_pago.id
        `)
        res.status(200).json({message: 'Lista de reservas', reservas})
    } catch (error) {
        res.status(400).json({message: 'Error al obtener la lista de reservas'})
        console.log('Error al obtener la lista de reservas', error)
    }
}

export const pagarReserva = async (req, res) => {
    try{
        const { id } = req.params

        const date = new Date()

        await pool.query(`
            UPDATE reservas SET 
                fk_estado = 2, 
                fecha_pago = "${date.toISOString().split("T")[0]}" 
            WHERE id = ${id}`)
        res.status(200).json({message: 'Reserva pagada correctamente'})
    } catch(error){
        res.status(400).json({message: 'Error al pagar reserva'})
        console.log('Error al pagar reserva', error)
    }
}

export const eliminarReserva = async (req, res) => {
    try{
        const { id } = req.params

        await pool.query(`UPDATE reservas SET fk_estado = 3 WHERE id = ${id}`)
        res.status(200).json({message: 'Reserva eliminada correctamente'})
    } catch(error){
        res.status(400).json({message: 'Error al eliminar reserva'})
        console.log('Error al eliminar reserva', error)
    }
}

