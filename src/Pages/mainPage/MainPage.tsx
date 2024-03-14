import { useTranslation } from "react-i18next"
import React from "react"
import { BugButton } from "app/provider/errorBaunderi"
import { Counter } from "app/enteties/Counter/ui/Counter"


const MainPage = () => {

    const {t} = useTranslation('main')
    
    return (
        <div className="">
            {t('Главная страница')}
            <BugButton/>
            <Counter/>
        </div>
    )
}


export default MainPage