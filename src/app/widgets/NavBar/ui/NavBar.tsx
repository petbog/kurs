import { Link } from 'react-router-dom'
import k from './NavBar.module.scss'
import { classNames } from 'helpers/classNames/classNames'
import { AppLink, AppLinkTheme } from 'app/shered/ui/AppLink/AppLink'
import { ThemeSwithers } from 'app/widgets/ThemeSwithers'



interface NavbarProps {
    className?: string
}

export const NavBar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(k.navbar,{},[className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink><br />
            <AppLink  to={'/about'}>о нас</AppLink>
        </div>

    )
}

