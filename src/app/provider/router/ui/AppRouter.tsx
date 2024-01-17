import { routeConfig } from "app/shered/config/routeConfig/routeConfig"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import React from "react"


const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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