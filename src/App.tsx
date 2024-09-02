import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import PastDataPage from './pages/PastDataPage'
import SettingsPage from './pages/SettingsPage'
import MainPage from './pages/MainPage'

const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<MainPage />} />
            <Route path='/past-data' element={<PastDataPage />} />
            <Route path='/settings' element={<SettingsPage />} />
        </>
    )
)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
