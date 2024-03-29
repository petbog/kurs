import { useTheme } from "app/provider/ThemeProvider"
import { classNames } from "helpers/classNames/classNames"
import LigthTheme from '../../../shered/assets/icons/theme-light.svg'
import DarlLigth from '../../../shered/assets/icons/theme-dark.svg'
import { Theme } from "app/provider/ThemeProvider/lib/themeContext"
import { Button, ThemeButton } from "app/shered/ui/Button/Button"
import cls from './ThemeSwithers.module.scss'
import React from 'react';


type ThemeSwitherProProps = {
    className?: string
}


export const ThemeSwithers = ({ className }: ThemeSwitherProProps) => {

    const { theme, toggleTheme } = useTheme()

    return (

        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            {theme === Theme.Ligth ? <LigthTheme /> : <DarlLigth />}
        </Button>

    )
}

