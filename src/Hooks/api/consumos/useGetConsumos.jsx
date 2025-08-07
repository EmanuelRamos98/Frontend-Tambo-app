import React, { useEffect, useState } from 'react'
import { getAuthenticated } from '../../../Utils'

export const useGetConsumos = (rodeoId) => {
    const [consumos, setConsumos] = useState({})
    const [loadingConsumo, setLoadingConsumo] = useState(true)
    const [errorConsumo, setErrorConsumo] = useState(false)

    useEffect(() => {
        const handleGetConsumos = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/consumo/rodeo/${rodeoId}`, {
                    method: 'GET',
                    headers: getAuthenticated()
                })
                const data = await response.json()
                if (!data.ok) {
                    setLoadingConsumo(false)
                    setErrorConsumo(data.message)
                } else {
                    setLoadingConsumo(false)
                    setConsumos(data.data)
                }
            } catch (error) {
                setLoadingConsumo(false)
                setErrorConsumo('Error API')
            } finally {
                setLoadingConsumo(false)
            }
        }
        handleGetConsumos()
    }, [])
    return { consumos, errorConsumo, loadingConsumo }
}
