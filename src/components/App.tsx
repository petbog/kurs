import './index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom"
import AboutPage from 'src/Pages/aboutPage/AboutPage'
import MainPage from 'src/Pages/mainPage/MainPage'

const App = () => {
    return (
        <div className="App">
            <Link to={'/about'}>Главная</Link>
            <Link to={'/main'}>о нас</Link>
            <Routes>
                <Route path={"/about"} element={<AboutPage />}/>
                <Route path={"/main"} element={<MainPage />}/>
            </Routes>
            
        </div>
    )
}



export default App