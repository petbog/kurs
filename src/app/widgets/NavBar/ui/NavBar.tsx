/* eslint-disable i18next/no-literal-string */
import k from './NavBar.module.scss'
import { classNames } from 'helpers/classNames/classNames'
import { AppLink, AppLinkTheme } from 'app/shered/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'



interface NavbarProps {
    className?: string
}

export const NavBar = ({ className }: NavbarProps) => {

    const { t } = useTranslation("navbar")
    return (
        <div className={classNames(k.navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                {t("Главная")}
            </AppLink><br />
            <AppLink to={'/about'}>{t('о нас')}</AppLink>
        </div>

    )
}

