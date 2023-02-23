import React from 'react';
import clsx from 'clsx'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    button: {
        fontSize: 14,
        height: 36,
        padding: '7px 15px',
        border: "1px solid transparent",
        borderRadius: '5px',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        cursor: "pointer",
        userSelect: 'none',
        transition: 'all .2s cubic-bezier(.645,.045,.355,1)',
        '&:focus-visible': {
            outline: '2px solid #91caff',
            outlineOffset: '1px',
            transition: 'outline-offset 0s,outline 0s',
        }
    },
    default: {
        backgroundColor: '#fff',
        borderColor: '#d9d9d9',
        boxShadow: '0 2px 0 rgb(0 0 0 / 2%)',
        '&:hover':{
            color: '#4096ff',
            borderColor: '#4096ff',
        },
        '&:active':{
            color: '#0958d9',
            borderColor: '#0958d9',
        }
    },
    primary: {
        color: '#fff',
        backgroundColor: '#1677ff',
        boxShadow: '0 2px 0 rgb(5 145 255 / 10%)',
        '&:hover': {
            backgroundColor: '#4096ff',
        },
        '&:active': {
            backgroundColor: '#0958d9'
        },
    }
})

const TYPE = Object.freeze({
    default: 'default',
    primary: 'primary',
})

export function Button({children, type = TYPE.default}) {
    const classes = useStyles()
    return <span className={clsx(classes.button, {[classes.primary]: type === TYPE.primary, [classes.default]:type===TYPE.default})}>
             {children}
         </span>
}
