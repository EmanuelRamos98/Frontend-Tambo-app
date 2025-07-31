import React from 'react'

export const FormCreateVacas = ({ index, vaca, onChange }) => {

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        const inputValue = type === 'checkbox' ? checked : value
        onChange(index, name, inputValue)
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <input
                    type="text"
                    name="caravana"
                    value={vaca.caravana}
                    placeholder="Caravana"
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="date"
                    name="fechaNacimiento"
                    value={vaca.fechaNacimiento}
                    placeholder="Fecha de Nacimiento"
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="raza"
                    value={vaca.raza}
                    placeholder="Raza"
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <select
                    name="estado"
                    value={vaca.estado || ''}
                    onChange={handleInputChange}
                >
                    <option value="activa">Activa</option>
                    <option value="en tratamiento">En tratamiento</option>
                    <option value="baja">Baja</option>
                </select>
            </td>
            <td>
                <input
                    type="checkbox"
                    name="seguimientoActivo"
                    checked={!!vaca.seguimientoActivo}
                    onChange={handleInputChange}
                />
            </td>
        </tr>
    )
}
