import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext.jsx'
import { TamboProvider } from './Context/TamboContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <TamboProvider>
                <App />
            </TamboProvider>
        </AuthProvider>
    </BrowserRouter>

)
