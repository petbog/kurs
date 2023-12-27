import { AboutPageAsync } from 'Pages/aboutPage/AboutPage.async';
import { MainPageAsync } from '../../../../Pages/mainPage/MainPage.async';
import { RouteProps } from "react-router-dom"



export enum AppRoutes{
    MAIN='main',
    ABOUT='about'
}


export const RoutePath:Record<AppRoutes,string>={
    [AppRoutes.MAIN]:'/',
    [AppRoutes.ABOUT]:'/about'
}


export const routeConfig:Record<AppRoutes,RouteProps>={
    [AppRoutes.MAIN]:{
        path:RoutePath.main,
        element:<MainPageAsync />
    },
    [AppRoutes.ABOUT]:{
        path:RoutePath.about,
        element:<AboutPageAsync />
    }
}