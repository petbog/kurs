import { classNames } from "helpers/classNames/classNames"
import { ButtonHTMLAttributes, FC } from "react"


export enum ThemeButton {
    CLEAR = 'clear',

}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}


export const Button: FC<ButtonProps> = (props) => {
    const { children, className, theme, ...otherProps } = props
    return (
        <button {...otherProps} className={classNames('Button', { [theme]: true }, [className])}>
            {children}
        </button>
    )
}