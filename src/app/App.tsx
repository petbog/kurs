import './styles/index.scss'
import { useTheme } from './provider/ThemeProvider/lib/useTheme'
import { classNames } from '../helpers/classNames/classNames'
import { AppRouter } from './provider/router'
import { NavBar } from './widgets/NavBar'
import { Sidebar } from './widgets/Sidebar'
import { Suspense, useState } from 'react'
import Modal from './shered/ui/Modal/Modal'



export enum Theme {
    Ligth = 'normal',
    DARK = 'dark'
}



const App = () => {
    const { theme } = useTheme()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classNames('App', {}, [theme])}>
            <Suspense fallback='' >
                <NavBar />
                <button onClick={() => { setIsOpen(true) }} >open</button>
                <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }} >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dicta doloremque quae odit reprehenderit quod consectetur ipsam laborum ea eligendi rem modi harum accusantium totam omnis perspiciatis necessitatibus minima corrupti.
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}



export default App