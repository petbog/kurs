import { classNames } from 'helpers/classNames/classNames'
import cls from './ErrorPage.module.scss'
import { useTranslation } from 'react-i18next'


interface errorPageProps {
  className?: string
}

const ErrorPage = ({ className }: errorPageProps) => {

  const { t } = useTranslation('ErrorPage')

  const rerenderString = () => {
    location.reload()
  }


  return (
    <div className={classNames(cls.errorPage, {}, [className])}>

      <span>{t('Произошла ошибка')}</span>
      <button className={classNames(cls.errorPage_button, {}, [className])} onClick={rerenderString}>{t('Перезагрузить страницу')}</button>
    </div>
  )
}


export default ErrorPage