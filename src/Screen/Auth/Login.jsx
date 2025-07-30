import React from 'react'
import { Form } from '../../Components/Form'
import { useLogin } from '../../Hooks/api/auth/useLogin'

export const Login = () => {
    const { handleLogin, message } = useLogin()
    const fields = [
        { name: 'name', label: 'name', placeholder: 'Nombre' },
        { name: 'password', label: 'password', type: 'password', placeholder: 'Contraseña' }
    ]
    const rules = {
        name: { required: true },
        password: { required: true }
    }
    return (
        <div>
            <Form
                fields={fields}
                rules={rules}
                onSubmit={handleLogin}
                submitText={'Entrar'}
                errorApiMessage={message}
            />
        </div>
    )
}

