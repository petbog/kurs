import { useTranslation } from "react-i18next"



const AboutPage = () => {

    const {t} = useTranslation('about')
    return (
        <div className="">
            {t('о сайте')}
        </div>
    )
}

export default AboutPage