import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
            <App />
        </NextThemesProvider>
    </NextUIProvider>
)