import React from 'react'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PastDataPage from './pages/PastDataPage'
import SettingsPage from './pages/SettingsPage'
import MainPage from './pages/MainPage'

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<MainPage />} />
                <Route path='/past-data' element={<PastDataPage />} />
                <Route path='/settings' element={<SettingsPage />} />
            </>
        )
    )

    return (
        <RouterProvider router={router} />
    )
}
