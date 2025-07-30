import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAuthenticated } from '../../../Utils'

export const useGetRodeo = (tamboId) => {
    const [rodeos, setRodeos] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const handleRodeos = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/rodeo/tambo/${tamboId}`, {
                    method: 'GET',
                    headers: getAuthenticated()
                })
                const data = await response.json()
                if (!data.ok) {
                    setLoading(false)
                    setError(data.message)
                } else {
                    setLoading(false)
                    setRodeos(data.data)
                }
            } catch (error) {
                setError('Error API')
            } finally {
                setLoading(false)
            }
        }
        handleRodeos()
    }, [tamboId])
    return {
        rodeos, error, loading
    }
}
