import { pool } from "../db.js"

export const crearClientes = async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            fechaNacimiento,
            numeroDocumento,
            telefono,
            correoElectronico
        } = req.body
    
        const [result] = await pool.query(`INSERT INTO clientes (nombre, apellido, fecha_nacimiento, numero_documento, telefono, correo_electronico) VALUES ("${nombre}", "${apellido}", "${fechaNacimiento}", ${numeroDocumento}, ${telefono}, "${correoElectronico}")`)
        res.status(201).json({message: 'Cliente creado correctamente', id: result.insertId})
    } catch (error) {
        res.status(400).json({message: 'Error al crear cliente'})
        console.log('Error al crear cliente', error)
    }
}

export const obtenerListaClientes = async (req, res) => {
    try {
        const [clientes] = await pool.query('SELECT * FROM clientes')
        res.status(200).json({message: 'Lista de clientes', clientes})
    } catch(error) {
        res.status(400).json({message: 'Error al obtener la lista de clientes'})
        console.log('Error al obtener la lista de clientes', error)
    }
}