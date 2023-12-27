import { AboutPageAsync } from "Pages/aboutPage/AboutPage.async"
import { MainPageAsync } from "Pages/mainPage/MainPage.async"
import { routeConfig } from "app/shered/config/routeConfig/routeConfig"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"


const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element,path})=>(
                    <Route 
                    key={path}
                    path={path}
                    element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}



export default AppRouter