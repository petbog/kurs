/* eslint-disable i18next/no-literal-string */
import k from './NavBar.module.scss'
import { classNames } from 'helpers/classNames/classNames'
import { AppLink, AppLinkTheme } from 'app/shered/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'app/shered/ui/Button/Button'
import Modal from 'app/shered/ui/Modal/Modal'
import { useCallback, useState } from 'react'



interface NavbarProps {
    className?: string
}

export const NavBar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)


    const toggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])


    const { t } = useTranslation("navbar")
    return (
        <div className={classNames(k.navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                {t("Главная")}
            </AppLink><br />
            <AppLink to={'/about'}>{t('о нас')}</AppLink>
            <Button theme={ThemeButton.BACKGROUND} onClick={toggleModal} >{t('Вход')}</Button>
            <Modal isOpen={isAuthModal} onClose={toggleModal} >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dicta doloremque quae odit reprehenderit quod consectetur ipsam laborum ea eligendi rem modi harum accusantium totam omnis perspiciatis necessitatibus minima corrupti.
            </Modal>
        </div>

    )
}

