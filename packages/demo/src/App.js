import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Menu from "./Menu";
import './App.scss'
import {ErrorBoundary} from "./ErrorBoundary";
import Home from "./views/home";
import ButtonView from "./views/button";

const VIEW_CONFIG = [
    {text: "home", to: "/home"},
]

export default function App() {
    return <ErrorBoundary>
        <Home/>
        <ButtonView/>
        {/*<Menu config={VIEW_CONFIG}/>*/}
    </ErrorBoundary>

}

