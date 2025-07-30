import React from 'react'
import { Footer, Navbar, Slidebar } from '../Components'
import { Outlet } from 'react-router-dom'

export const MinLayouts = () => {
    return (
        <>
            <Navbar />
            <Slidebar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
