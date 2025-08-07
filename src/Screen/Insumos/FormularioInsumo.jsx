import React from 'react'
import { useCreateInsumo } from '../../Hooks'
import { Form } from '../../Components/Form'

export const FormularioInsumo = () => {
    const { handleCreateInsumo, message } = useCreateInsumo()
    const fields = [
        { name: 'nombre', label: 'nombre', placeholder: 'nombre' },
        {
            name: 'tipo', label: 'tipo', type: 'select', options: [
                { value: "alimento", label: "alimento" },
                { value: "medicamento", label: "medicamento" },
                { value: "vacuna", label: "vacuna" },
                { value: "otro", label: "otro" }
            ]
        },
        {
            name: 'unidad', label: 'unidad', type: 'select', options: [
                { value: 'kg', label: 'kg' },
                { value: 'l', label: 'l' },
                { value: 'unidades', label: 'unidades' }
            ]
        },
        { name: 'stock', label: 'stock', type: 'number' },
        { name: 'costoUnitario', label: 'costoUnitaro', placeholder: 'costo por unidad', type: 'number' }
    ]
    const rules = {
        nombre: { required: true },
        tipo: { required: true },
        unidad: { required: true },
        stock: { required: true, min: 1 },
        costoUnitario: { required: true, min: 0.01 }
    }
    return (
        <div>
            <Form
                fields={fields}
                rules={rules}
                onSubmit={handleCreateInsumo}
                defaultValues={{ tipo: 'otro', unidad: 'kg' }}
                submitText={'Guardar'}
                errorApiMessage={message}
            />
        </div>
    )
}

