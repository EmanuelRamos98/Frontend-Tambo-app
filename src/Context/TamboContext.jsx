import React, { createContext, useContext, useState } from 'react'

const TamboContext = createContext()

export const useTambo = () => useContext(TamboContext)

export const TamboProvider = ({ children }) => {
    const [tamboSeleccionado, setTamboSeleccionado] = useState(null)

    return (
        <TamboContext.Provider value={{ tamboSeleccionado, setTamboSeleccionado }}>
            {children}
        </TamboContext.Provider>
    )
}