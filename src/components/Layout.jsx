import {Outlet, useLocation} from "react-router-dom"
import {Header} from "./Header"
import {Footer} from "./Footer"
import {Leadership} from './Leadeship'
import { useState, useEffect } from "react";

const Layout = () => {
    const locaton = useLocation();
    const currentPath = locaton.pathname;
    let componentToRender;

    let backgroundImageClass = 'mainWrapper'
    let triangleClass = 'triangleWrapper'

    if (currentPath === "/leadership") componentToRender = <Leadership/>
    else if (currentPath === "/clients") {
        backgroundImageClass += ' privateClientsPage'
        triangleClass = ''
    }
    else if(currentPath === "/corporations") {
        backgroundImageClass += ' corporationsPage'
        triangleClass = ''
    }


    return(
        <>
        <div className={backgroundImageClass}>
            <div className={triangleClass}>
            <main>
                <Header/>
                <Outlet/>
            </main>
            </div>
            {componentToRender}
            <Footer/>
        </div>
        </>
    )
}

export {Layout}