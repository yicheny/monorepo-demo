import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Menu from "./Menu";
import './App.scss'
import {ErrorBoundary} from "./ErrorBoundary";
import Home from "./views/home";
import ButtonView from "./views/button";

const VIEW_CONFIG = [
    {text: "home", to: "/home", element: <Home/>},
    {text: "buttonView", to: "/view-button", element: <ButtonView/>},
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

function RenderRoute({config}){
    return <Switch>
        {
            config.map(c => {
                return <Route key={c.to} path={c.to} children={c.element}/>
            })
        }
    </Switch>
}

