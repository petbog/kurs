import { classNames } from 'helpers/classNames/classNames'
import './Loader.scss'
interface LoaderProps {
    className?: string
}
export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('loader', {}, [className])}>
            <div ></div>
        </div>
    )
}