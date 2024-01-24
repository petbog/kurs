import AboutPage from 'Pages/aboutPage/AboutPage';
import { RouteProps } from "react-router-dom"
import React from 'react';
import MainPage from 'Pages/mainPage/MainPage';
import { NotFoundPage } from 'Pages/notFoundPage';



export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'error'
}


export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*'
}


export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: < MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.error,
        element: <NotFoundPage />
    }
}