import { useTranslation } from "react-i18next"
import React from "react"


const MainPage = () => {

    const {t} = useTranslation('main')
    
    return (
        <div className="">
            {t('Главная страница')}
        </div>
    )
}


export default MainPage