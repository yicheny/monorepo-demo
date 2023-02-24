import {Route, Switch} from "react-router-dom";
import React from "react";

export function RenderRoute({config}){
    return <Switch>
        {
            config.map(c => {
                return <Route key={c.to} path={c.to} children={c.element}/>
            })
        }
    </Switch>
}
