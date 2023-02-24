import React from 'react';
import {HashRouter as Router} from "react-router-dom";
import './App.scss'
import {ErrorBoundary} from "./ErrorBoundary";
import Home from "./views/home";
import ButtonView from "./views/button";
import {Menu,RenderRoute} from "./base";
import SpaceView from "./views/space";

const VIEW_CONFIG = [
    {text: "home", to: "/home", element: <Home/>},
    {text: "buttonView", to: "/button", element: <ButtonView/>},
    {text: "spaceView", to: "/space", element: <SpaceView/>},
]

export default function App() {
    return<ErrorBoundary>
        <div className={'app'}>
            <Router>
                <Menu config={VIEW_CONFIG}/>
                <div className={'content'}>
                    <RenderRoute config={VIEW_CONFIG}/>
                </div>
            </Router>
        </div>
    </ErrorBoundary>
}


