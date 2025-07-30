import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
    const { is_authenticated_state, is_authenticated_checked } = useContext(AuthContext)

    if (!is_authenticated_checked) {
        return (
            <div>Cargando...</div>
        )
    }
    return (
        <>
            {
                is_authenticated_state
                    ? <Outlet />
                    : <Navigate to={'/login'} />
            }
        </>
    )
}
