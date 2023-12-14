import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, themeContext } from './themeContext'



const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Ligth

const ThemeProvider: FC = ({ children }) => {


    const [theme, setTheme] = useState<Theme>(defaultTheme)



    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <themeContext.Provider value={
            defaultProps
        }>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider