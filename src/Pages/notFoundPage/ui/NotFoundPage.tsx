
import { classNames } from 'helpers/classNames/classNames'
import cls from './notFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
interface notFoundPageProps {
    className?: string
}
export const NotFoundPage = ({ className }: notFoundPageProps) => {

    const { t } = useTranslation("notFoundPage")

    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    )
}