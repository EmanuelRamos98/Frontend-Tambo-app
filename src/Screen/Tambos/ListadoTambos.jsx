import React from 'react'
import { useGetTambo } from '../../Hooks/api'
import { useNavigate } from 'react-router-dom'

export const ListadoTambos = () => {
    const { tambos, error, loading } = useGetTambo()
    const nav = useNavigate()
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
                                            <button onClick={() => nav(`/home/rodeos/${tambo._id}`)}>Entrar</button>
                                        </div>
                                    )
                                })}
                            </ul>
                        )
            }
        </div>
    )
}

