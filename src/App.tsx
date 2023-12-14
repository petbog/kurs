import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom"
import { Suspense, useContext, useState } from 'react'
import { MainPageAsync } from './Pages/mainPage/MainPage.async'
import { AboutPageAsync } from './Pages/aboutPage/AboutPage.async'
import { themeContext } from './styles/theme/themeContext'
import { useTheme } from './styles/theme/useTheme'


export enum Theme {
    Ligth = 'normal',
    DARK = 'dark'
}


const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Главная</Link><br />
            <Link to={'/about'}>о нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync />} />
                    <Route path={"/about"} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}



export default App