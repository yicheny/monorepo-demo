import React from 'react';
import {Button,Space} from '@yc-ui'

export default function ButtonView() {
    return <div>
        <Space>
            <Button>默认按钮</Button>
            <Button type={'primary'}>主要按钮</Button>
        </Space>
    </div>

}

