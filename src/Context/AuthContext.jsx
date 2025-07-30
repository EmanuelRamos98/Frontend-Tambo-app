import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [is_authenticated_state, setIsauthenticatedState] = useState(false)
    const [is_authenticated_checked, setIsAuthenticatedCheked] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem('auth-token')
        setIsauthenticatedState(Boolean(token))
        setIsAuthenticatedCheked(true)
    }, [])

    const login = (token) => {
        sessionStorage.setItem('auth-token', token)
        setIsauthenticatedState(true)
    }

    const logout = () => {
        sessionStorage.removeItem('auth-token')
        setIsauthenticatedState(false)
    }

    return (
        <AuthContext.Provider
            value={
                {
                    is_authenticated_state,
                    is_authenticated_checked,
                    login,
                    logout
                }
            }>
            {children}
        </AuthContext.Provider>
    )
}
