import React from 'react'
import { useGetInsumo } from '../../Hooks'
import { useNavigate } from 'react-router-dom'

export const ListadoInsumos = () => {
    const { insumos, loading, error } = useGetInsumo()
    const nav = useNavigate()
    return (
        <div>
            <h2>Insumos</h2>
            <button onClick={() => nav('/home/insumos/nuevo')}>Crear nuevo insumo</button>
            {loading ? <p>Cargando insumos..</p>
                : error ? <p>Error: {error}</p>
                    : (
                        insumos.map((insumo) => {
                            return (
                                <div key={insumo._id}>
                                    <h3>{insumo.nombre}</h3>
                                    <p>{insumo.tipo}</p>
                                    <p>{insumo.stock}</p>
                                    <p>{insumo.unidad}</p>
                                </div>
                            )
                        })
                    )
            }
        </div>
    )
}
