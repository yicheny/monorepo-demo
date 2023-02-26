import React, {useMemo} from "react";
import {createUseStyles} from 'react-jss'

const ICON_SIZE = 16;

const useStyles = createUseStyles({
    radio: {
        fontSize:14,
        display:'inline-flex',
        alignItems:'center',
        marginRight:8,
        cursor:'pointer',
    },
    icon:{
        display:'inline-block',
        width:ICON_SIZE,
        height:ICON_SIZE,
        border:"1px solid rgb(217,217,217)",
        borderRadius:'50%',
        boxSizing:'border-box'
    },
    text: {
        padding:'0 8px'
    }
})

export function Radio(props) {
    const {text, value, active} = props;
    const classes = useStyles(props);

    return <label className={classes.radio}>
        <span className={classes.icon}/>
        <span className={classes.text}>{text}</span>
    </label>
}
