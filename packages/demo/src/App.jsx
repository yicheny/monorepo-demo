import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Menu from "./Menu.jsx";
import './App.scss'
import {ErrorBoundary} from "./ErrorBoundary.jsx";

const menuConfig = [
    {text: "home", to: "/home"},
]

export default function App() {
    return <ErrorBoundary>
        ErrorBoundary
    </ErrorBoundary>

}

