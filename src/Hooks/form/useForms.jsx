import React, { useState } from 'react'

export const useForms = (valorInicial = {}) => {
    const [valor, setValor] = useState(valorInicial)
    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name, value, type } = e.target
        let parsedValue

        if (type === 'number') {
            parsedValue = Number(value)
        } else {
            parsedValue = value
        }
        setValor((prev) => ({ ...prev, [name]: parsedValue }))
    }

    const reset = () => {
        setValor(valorInicial)
        setError({})
    }

    const validacion = (reglas = {}) => {
        const newError = {}
        for (const key in reglas) {
            const regla = reglas[key]
            const value = valor[key]

            if (regla.required && !value) {
                newError[key] = "Este campo es obligatorio"
            }
        }
        setError(newError)
        return Object.keys(newError).length === 0
    }


    return {
        valor,
        setValor,
        handleChange,
        reset,
        validacion,
        error
    }
}
