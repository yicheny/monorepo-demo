import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    button:{
        color:"red"
    }
})

export function Button({children}) {
    const classes = useStyles()
    return <span className={classes.button}>
             {children}
         </span>
}
