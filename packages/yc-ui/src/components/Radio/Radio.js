import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    radio: {},
    icon: {}
})

export function Radio(props) {
    const {text, value} = props;
    const classes = useStyles();

    return <span className={classes.radio}>
        <span className={classes.icon}/>
        {text}
    </span>
}