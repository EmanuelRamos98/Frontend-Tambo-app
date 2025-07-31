import React from 'react'
import { useCreateVacas } from '../../Hooks'
import { useParams } from 'react-router-dom'
import { PlanillaVacas } from '../../Components'


export const FormularioVaca = () => {
    const { rodeoId } = useParams()
    const { handleCreateVacas, loading, error } = useCreateVacas(rodeoId)

    const handleEnviarVacas = async (vacas) => {

        const vacasValidas = vacas.filter(v =>
            v.caravana.trim() !== '' &&
            v.raza.trim() !== '' &&
            v.estado !== '')


        if (vacasValidas.length === 0) {
            alert('Debe completar al menos una vaca con datos validos')
            return
        }

        const result = await handleCreateVacas(vacas)
        if (result) {
            alert('Vacas registradas correctamente')
        }
    }
    return (
        <div>
            <h1>Registrar vacas</h1>
            <PlanillaVacas onSubmit={handleEnviarVacas} />
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    )
}

