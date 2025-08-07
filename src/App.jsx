import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MinLayouts } from './Layouts'
import { DetalleRodeo, DetalleVaca, FormularioInsumo, FormularioVaca, ListadoConsumos, ListadoInsumos, ListadoRodeos, ListadoTambos, ListadoVacas, Login, NotFound, RegisterConsumo, VacasPorRodeo, Dashboard } from './Screen'
import { ProtectedRoute } from './Components'

export const App = () => {
    return (

        <Routes>
            <Route path='/login' element={<Login />} />

            <Route element={<ProtectedRoute />}>

                {/* Tambos */}
                <Route path='/' element={<ListadoTambos />} />

                <Route path='/home' element={<MinLayouts />} >

                    <Route path='dashboard/:tamboId' element={<Dashboard />} />
                    {/* Rodeos */}
                    <Route path='rodeos/:tamboId' element={<ListadoRodeos />} />
                    <Route path='rodeos/consumos/:rodeoId' element={<DetalleRodeo />} />

                    {/* Vacas */}
                    <Route path='vacas/' element={<ListadoVacas />} />
                    <Route path='vacas/:rodeoId' element={<VacasPorRodeo />} />
                    <Route path='vacas/nuevas/:rodeoId' element={<FormularioVaca />} />
                    <Route path='vacas/:id' element={<DetalleVaca />} />

                    {/* Insumos */}
                    <Route path='insumos' element={<ListadoInsumos />} />
                    <Route path='insumos/nuevo' element={<FormularioInsumo />} />

                    {/* Consumos */}
                    <Route path='consumos/registrar' element={<RegisterConsumo />} />
                    <Route path='consumos' element={<ListadoConsumos />} />

                </Route>

            </Route>

            <Route path='*' element={<NotFound />} />

        </Routes>

    )
}


