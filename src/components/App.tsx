import './index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom"
import AboutPage from '../Pages/aboutPage/AboutPage'
import { Suspense } from 'react'
import { MainPageAsync } from '../Pages/mainPage/MainPage.async'
import { AboutPageAsync } from '../Pages/aboutPage/AboutPage.async'

const App = () => {
    return (
        <div className="App">
            <Link to={'/'}>Главная</Link><br/>
            <Link to={'/about'}>о нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={"/"} element={<MainPageAsync />}/>
                <Route path={"/about"} element={<AboutPageAsync />}/>
            </Routes>
            </Suspense>
        </div>
    )
}



export default App