import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, themeContext } from "./themeContext";

interface useThemeResult {
    toggleTheme: () => void,
    theme: Theme
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(themeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.Ligth : Theme.DARK

        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {
        theme,
        toggleTheme
    }
}