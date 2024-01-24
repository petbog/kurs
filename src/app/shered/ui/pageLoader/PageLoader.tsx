import { classNames } from 'helpers/classNames/classNames'
import cls from './pageLoader.module.scss'
import { Loader } from '../Loader/Loader'


interface pageLoaderProps {
    className?: string
}
export const PageLoader = ({ className }: pageLoaderProps) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}