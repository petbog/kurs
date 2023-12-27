import './styles/index.scss'
import { useTheme } from './provider/ThemeProvider/lib/useTheme'
import { classNames } from '../helpers/classNames/classNames'
import { AppRouter } from './provider/router'
import { NavBar } from './widgets/NavBar'



export enum Theme {
    Ligth = 'normal',
    DARK = 'dark'
}


const App = () => {
    const { theme, toggleTheme } = useTheme()
    // `App ${theme}`
    return (
        <div className={classNames('App', {}, [theme])}>
            <NavBar/>
            <AppRouter />
            <button onClick={toggleTheme}>Theme</button>
        </div>
    )
}



export default App