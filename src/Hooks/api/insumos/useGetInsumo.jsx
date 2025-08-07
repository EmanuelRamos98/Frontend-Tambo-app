import React, { useEffect, useState } from 'react'
import { getAuthenticated } from '../../../Utils'

export const useGetInsumo = () => {
    const [insumos, setInsumos] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const handleGetInsumo = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/insumo/`, {
                    method: 'GET',
                    headers: getAuthenticated()
                })
                const data = await response.json()
                if (!data.ok) {
                    setLoading(false)
                    setError(data.message)
                } else {
                    setLoading(false)
                    setInsumos(data.data)
                }
            } catch (error) {
                setError('Error API')
            } finally {
                setLoading(false)
            }
        }
        handleGetInsumo()
    }, [])
    return { insumos, error, loading }
}
