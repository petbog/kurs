import slc from './Sidebar.module.scss'
import { classNames } from './../../../../../helpers/classNames/classNames';
import { useState } from 'react';
import { ThemeSwithers } from 'app/widgets/ThemeSwithers';



interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(slc.Sidebar, { [slc.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={slc.swithers}>
                <ThemeSwithers />
            </div>
        </div>
    )
}