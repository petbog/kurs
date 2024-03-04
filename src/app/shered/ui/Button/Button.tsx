import { classNames } from "helpers/classNames/classNames"
import { ButtonHTMLAttributes, FC } from "react"
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',

}
export enum ButtonSize{
    M='size_m',
    L='size_l',
    XL='size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?:ButtonSize;
}



export const Button: FC<ButtonProps> = (props) => {
    const { children, className, theme, square,size=ButtonSize.M, ...otherProps } = props

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]:true
    };

    return (
        <button {...otherProps} className={classNames(cls.Button, mods, [className])}>
            {children}
        </button>
    )
}