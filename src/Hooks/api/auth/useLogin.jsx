import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthContext'

export const useLogin = () => {
    const [message, setMessage] = useState(null)
    const { login } = useContext(AuthContext)
    const nav = useNavigate()

    const handleLogin = async (formState) => {

        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formState)
        })
        const data = await response.json()

        if (!data.ok) {
            setMessage(data.message)
        } else {
            login(data.data.acces_token)
            nav('/')
        }
        return data
    }
    return {
        handleLogin,
        message
    }
}
