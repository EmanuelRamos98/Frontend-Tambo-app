import React, { useEffect, useState } from 'react'
import { getAuthenticated } from '../../../Utils'

export const useGetTambo = () => {
    const [tambos, setTambos] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const handleTambos = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tambo/`, {
                    method: 'GET',
                    headers: getAuthenticated()
                })
                const data = await response.json()

                if (!data.ok) {
                    setLoading(false)
                    setError(data.message)
                } else {
                    setLoading(false)
                    setTambos(data.data)
                }
            } catch (error) {
                setError('Error API')
            } finally {
                setLoading(false)
            }
        }
        handleTambos()
    }, [])

    return {
        tambos, error, loading
    }
}
