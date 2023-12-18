import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom"
import { Suspense} from 'react'
import { useTheme } from './provider/ThemeProvider/lib/useTheme'
import { classNames } from '../helpers/classNames/classNames'
import { AboutPageAsync } from '../Pages/aboutPage/AboutPage.async'
import { MainPageAsync } from '../Pages/mainPage/MainPage.async'



export enum Theme {
    Ligth = 'normal',
    DARK = 'dark'
}


const App = () => {
    const { theme, toggleTheme } = useTheme()
    // `App ${theme}`
    return (
        <div className={classNames('App', {}, [theme])}>
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