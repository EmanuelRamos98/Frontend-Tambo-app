import React from 'react'
import { useGetVacasPorRodeo } from '../../Hooks/api'
import { useNavigate, useParams } from 'react-router-dom'

export const VacasPorRodeo = () => {
    const { rodeoId } = useParams()
    const nav = useNavigate()
    const { vacas, error, loading } = useGetVacasPorRodeo(rodeoId)

    return (
        <div>
            <h2>Vacas de este rodeo</h2>
            <p>Agregar vacas?</p>
            <button onClick={() => nav(`/home/vacas/nuevas/${rodeoId}`)}>Crear</button>
            {loading ? <p>Cargando vacas...</p>
                : error ? <p>Error: {error}</p>
                    : (vacas.map((vaca) => {
                        return (
                            <div key={vaca._id}>
                                <p>{vaca.caravana}</p>
                                <p>estado: {vaca.estado}</p>
                                <p>fecha de ingreso: {vaca.fechaIngreso}</p>
                                <p>fecha nacimiento: {vaca.fechaNacimiento}</p>
                            </div>
                        )
                    }))
            }
        </div>
    )
}
