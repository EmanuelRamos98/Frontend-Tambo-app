import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTambo } from '../Context/TamboContext'

export const Slidebar = () => {
    const { tamboSeleccionado } = useTambo()
    if (!tamboSeleccionado) {
        return null
    }

    const { _id } = tamboSeleccionado
    return (
        <div>
            Slidebar
            <NavLink to={`/home/dashboard/${_id}`}>Dashboard</NavLink>
            <NavLink to={`/home/rodeos/${_id}`}>Rodeos</NavLink>
        </div>
    )
}
