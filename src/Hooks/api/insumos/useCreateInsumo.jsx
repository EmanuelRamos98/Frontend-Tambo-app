import React, { useState } from 'react'
import { getAuthenticated } from '../../../Utils'

export const useCreateInsumo = () => {
    const [message, setMessage] = useState(null)

    const handleCreateInsumo = async (formState) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/insumo/`, {
            method: 'POST',
            headers: getAuthenticated(),
            body: JSON.stringify(formState)
        })
        const data = await response.json()
        if (!data.ok) {
            setMessage(data.message)
        } else {
            setMessage(data.message)
        }
        return data
    }

    return { handleCreateInsumo, message }
}
