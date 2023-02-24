import React from 'react';
import _ from 'lodash';
import {Radio} from './Radio'

export function RadioGroup(props){
    const {options} = props;
    return <>
        {
            _.map(options,(x,i)=>{
                return <Radio key={i} {...x}/>
            })
        }
    </>
}

