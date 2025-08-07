import React from 'react'
import { useForms } from '../Hooks/form/useForms'

export const Form = ({ fields = [], onSubmit, defaultValues = {}, submitText, rules = {}, errorApiMessage }) => {
    const { valor, handleChange, reset, validacion, error } = useForms(defaultValues)

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validacion(rules)
        if (isValid) {
            onSubmit(valor)
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(({ name, label, type = 'text', placeholder, options }) => (
                <div key={name}>
                    <label htmlFor={name}>{label}</label>

                    {type === 'select' ? (
                        <select name={name} value={valor[name] || ''} onChange={handleChange}>
                            <option value=''>Seleccionar</option>
                            {options.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type={type}
                            name={name}
                            value={valor[name] || ''}
                            placeholder={placeholder}
                            onChange={handleChange}
                        />
                    )}
                    {error[name] && <span>{error[name]}</span>}
                </div>
            ))}
            {errorApiMessage && <span>{errorApiMessage}</span>}
            <button>{submitText}</button>
        </form>
    )
}
