import React, { useState } from 'react'
import { getAuthenticated } from '../../../Utils'

export const useCreateVacas = (rodeoId) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleCreateVacas = async (vacas) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vaca/rodeo/${rodeoId}`, {
                method: 'POST',
                headers: getAuthenticated(),
                body: JSON.stringify({ vacas })
            })
            setLoading(true)
            const data = await response.json()
            if (!data.ok) {
                setLoading(false)
                setError(data.message)
            }
        } catch (error) {
            setError('Error API')
        } finally {
            setLoading(false)
        }
        return true
    }
    return { handleCreateVacas, loading, error }
}
