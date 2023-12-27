import './styles/index.scss'
import { Link } from "react-router-dom"
import { useTheme } from './provider/ThemeProvider/lib/useTheme'
import { classNames } from '../helpers/classNames/classNames'
import { AppRouter } from './provider/router'



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
            <AppRouter />
        </div>
    )
}



export default App