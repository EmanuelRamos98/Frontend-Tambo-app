import React, { useState } from 'react'
import { FormCreateVacas } from './FormCreateVacas'

export const PlanillaVacas = ({ onSubmit }) => {
    const vacaInicial = () => ({
        caravana: '',
        fechaNacimiento: '',
        raza: '',
        estado: 'activa',
        seguimientoActivo: false
    })
    const [vacas, setVacas] = useState(Array.from({ length: 10 }, () => vacaInicial()))

    const handleChange = (index, name, value) => {
        const nuevasVacas = [...vacas]
        nuevasVacas[index] = { ...nuevasVacas[index], [name]: value }
        setVacas(nuevasVacas)
    }

    const agregaFila = () => {
        setVacas([...vacas, vacaInicial])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const vacasValidas = vacas.filter(v =>
            v.caravana.trim() !== '' &&
            v.raza.trim() !== '' &&
            v.estado !== '')

        onSubmit(vacasValidas)
    }
    return (
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Caravana</th>
                        <th>Fecha Nacimiento</th>
                        <th>Raza</th>
                        <th>Estado</th>
                        <th>Seguimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {vacas.map((vaca, index) => (
                        <FormCreateVacas
                            key={index}
                            index={index}
                            vaca={vaca}
                            onChange={handleChange}
                        />
                    ))}
                </tbody>
            </table>
            <button type='button' onClick={agregaFila}>Agregar Fila</button>
            <button type='submit'>GuardarVacas</button>
        </form>
    )
}
