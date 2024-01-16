import './styles/index.scss'
import { useTheme } from './provider/ThemeProvider/lib/useTheme'
import { classNames } from '../helpers/classNames/classNames'
import { AppRouter } from './provider/router'
import { NavBar } from './widgets/NavBar'
import { Sidebar } from './widgets/Sidebar'
import { Suspense } from 'react'


export enum Theme {
    Ligth = 'normal',
    DARK = 'dark'
}



const App = () => {
    const { theme, toggleTheme } = useTheme()
    // `App ${theme}`
    return (
        <div className={classNames('App', {}, [theme])}>
            <Suspense fallback='' >
                <NavBar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}



export default App