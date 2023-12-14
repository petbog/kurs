import { resolve } from "path";
import React, { lazy } from "react";


export const MainPageAsync = React.lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        //@ts-ignore
        resolve(import('./MainPage')), 1000
    })
}))