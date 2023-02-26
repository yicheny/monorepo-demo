import React, {useState} from 'react';
import _ from 'lodash';
import {Radio} from './Radio'

export function RadioGroup(props){
    const {options,onChange,defaultValue} = props;
    const [value,setValue] = useState(defaultValue);
    return <>
        {
            _.map(options,(x,i)=>{
                return <Radio key={i} active={value} {...x}/>
            })
        }
    </>
}

