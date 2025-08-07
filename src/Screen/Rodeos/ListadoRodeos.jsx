import React from 'react'
import { useGetRodeo, useGetConsumos } from '../../Hooks/api'
import { useNavigate, useParams } from 'react-router-dom'

export const ListadoRodeos = () => {
    const { tamboId } = useParams()
    const nav = useNavigate()
    const { rodeos, error, loading } = useGetRodeo(tamboId)

    return (
        <div>
            <h2>Rodeos de este tambo</h2>
            {loading ? <p>Cargando rodeos..</p>
                : error ? <p>Error: {error}</p>
                    : (rodeos.map((rodeo) => {
                        return (
                            <div key={rodeo._id}>
                                <h3>{rodeo.nombre}</h3>
                                <p>{rodeo.tipo}</p>
                                <p>{rodeo.fechaCreacion}</p>
                                <button onClick={() => nav(`/home/vacas/${rodeo._id}`)}>Entrar</button>
                                <button onClick={() => nav(`/home/rodeos/${rodeo._id}`)}>Detalle</button>
                            </div>
                        )
                    }))
            }
        </div>
    )
}

