import k from './NavBar.module.scss'
import { classNames } from 'helpers/classNames/classNames'
import { AppLink, AppLinkTheme } from 'app/shered/ui/AppLink/AppLink'



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

