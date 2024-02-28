import { useTranslation } from "react-i18next"
import React from "react"
import { BugButton } from "app/provider/errorBaunderi"


const MainPage = () => {

    const {t} = useTranslation('main')
    
    return (
        <div className="">
            {t('Главная страница')}
            <BugButton/>
        </div>
    )
}


export default MainPage