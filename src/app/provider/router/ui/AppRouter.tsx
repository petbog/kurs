import { routeConfig } from "app/shered/config/routeConfig/routeConfig"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { useTranslation } from "react-i18next"


const AppRouter = () => {
    const{t}=useTranslation()
    return (
        <Suspense fallback={<div>{t("Loading...")}</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">{element}</div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}



export default AppRouter