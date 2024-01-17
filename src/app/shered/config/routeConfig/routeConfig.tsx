import AboutPage from 'Pages/aboutPage/AboutPage';
import { RouteProps } from "react-router-dom"
import React from 'react';
import MainPage from 'Pages/mainPage/MainPage';



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
        element:< MainPage />
    },
    [AppRoutes.ABOUT]:{
        path:RoutePath.about,
        element:<AboutPage/>
    }
}