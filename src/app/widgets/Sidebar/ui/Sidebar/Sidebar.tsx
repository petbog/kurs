import cls from './Sidebar.module.scss'
import { classNames } from './../../../../../helpers/classNames/classNames';
import { useState } from 'react';
import { ThemeSwithers } from 'app/widgets/ThemeSwithers';
import { LangSwitcher } from 'app/shered/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ThemeButton } from 'app/shered/ui/Button/Button';



interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const { t } = useTranslation('Sidebar')

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                size={ButtonSize.XL}
                square
                theme={ThemeButton.BACKGROUND}
                className={cls.collapseBtn}
                onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.swithers}>
                <ThemeSwithers className={cls.themeButton} />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    )
}