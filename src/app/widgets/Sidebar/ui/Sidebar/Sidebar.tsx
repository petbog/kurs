import cls from './Sidebar.module.scss'
import { classNames } from './../../../../../helpers/classNames/classNames';
import { useState } from 'react';
import { ThemeSwithers } from 'app/widgets/ThemeSwithers';
import { LangSwitcher } from 'app/shered/ui/LangSwitcher/LangSwitcher';



interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.swithers}>
                <ThemeSwithers className={cls.themeButton} />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}