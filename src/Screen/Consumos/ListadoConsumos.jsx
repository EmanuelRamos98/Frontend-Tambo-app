import React from 'react'
import { useGetConsumos } from '../../Hooks/api'

export const ListadoConsumos = ({ rodeoId }) => {
    const { consumos, loadingConsumo, errorConsumo } = useGetConsumos(rodeoId)

    console.log(consumos);

    return (
        <div>ListadoConsumos</div>
    )
}

