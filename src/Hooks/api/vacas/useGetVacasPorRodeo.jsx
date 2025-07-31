import React, { useEffect, useState } from 'react'
import { getAuthenticated } from '../../../Utils'

export const useGetVacasPorRodeo = (rodeoId) => {
    const [vacas, setVacas] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const handleVacasPorRodeo = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vaca/rodeo/${rodeoId}`, {
                    method: 'GET',
                    headers: getAuthenticated()
                })
                const data = await response.json()
                if (!data.ok) {
                    setLoading(false)
                    setError(data.message)
                } else {
                    setLoading(false)
                    setVacas(data.data)
                }
            } catch (error) {
                setError('Error API')
            } finally {
                setLoading(false)
            }
        }
        handleVacasPorRodeo()
    }, [rodeoId])

    return {
        vacas, error, loading
    }
}
