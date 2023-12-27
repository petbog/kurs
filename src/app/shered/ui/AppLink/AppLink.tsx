import { classNames } from "helpers/classNames/classNames"
import { Link } from "react-router-dom"
import k from './AppLink.module.scss'
import { FC } from "react"
import { LinkProps } from "react-router-dom"


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface NavbarProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink: FC<NavbarProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps } = props
    return (
        <Link to={to} className={classNames(k.AppLink, { }, [className ,k[theme]])} {...otherProps}>
            {children}
        </Link>
    )
}