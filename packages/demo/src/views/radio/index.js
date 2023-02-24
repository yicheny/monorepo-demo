import React from 'react';
import {RadioGroup} from '@yc-ui'

const options = [
    {text:"A",value:1},
    {text:"B",value:2},
    {text:"C",value:3},
    {text:"D",value:4},
]

export default function ButtonView() {
    return <div>
        <RadioGroup options={options}/>
    </div>

}

