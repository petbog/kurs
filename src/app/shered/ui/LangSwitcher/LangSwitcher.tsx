import { classNames } from 'helpers/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '../Button/Button'

interface LangSwitcherProps {
    className?: string,
    short?:boolean
}

export const LangSwitcher = ({ className,short }: LangSwitcherProps) => {

    const { t, i18n } = useTranslation('Sidebar')

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}>
            {t(short ?'короткое название':"Язык")}
        </Button>
    )
}