// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/provider/ThemeProvider";
import App from "./app/App";
import "app/shered/config/i18n/i18n";
import React from 'react';
import { ErrorBoundary } from "app/provider/errorBaunderi";
import { StoreProvider } from "app/provider/storeProvider";


render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>

    ,
    document.getElementById("root")

)