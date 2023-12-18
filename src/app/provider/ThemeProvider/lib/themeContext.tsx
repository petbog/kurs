import { createContext } from "react";

export enum Theme {
    Ligth = 'normal',
    DARK = 'dark'
}


export interface themeContextProps {
    theme?: Theme,
    setTheme?: (theme:Theme) => void
}


export const themeContext = createContext<themeContextProps>({

})

export const LOCAL_STORAGE_THEME_KEY = 'theme'