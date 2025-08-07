import React from 'react'
import { useGetTambo } from '../../Hooks/api'
import { useNavigate } from 'react-router-dom'
import { useTambo } from '../../Context/TamboContext'

export const ListadoTambos = () => {
    const { tambos, error, loading } = useGetTambo()
    const { setTamboSeleccionado } = useTambo()
    const nav = useNavigate()

    const handleSeleccionar = (tambo) => {
        setTamboSeleccionado(tambo)
        nav(`/home/dashboard/${tambo._id}`)
    }

    return (
        <div>
            <h1>Listado de Tambos</h1>
            {
                loading ? <p>Cargando tambos...</p>
                    : error ? <p>Error: {error}</p>
                        : (
                            <ul>
                                {tambos.map((tambo) => {
                                    return (
                                        <div key={tambo._id}>
                                            <h2>{tambo.nombre}</h2>
                                            <p>{tambo.descripcion}</p>
                                            <p>{tambo.ubicacion}</p>
                                            <p>{tambo.fechaCreacion}</p>
                                            <button onClick={() => handleSeleccionar(tambo)}>Entrar</button>
                                        </div>
                                    )
                                })}
                            </ul>
                        )
            }
        </div>
    )
}

