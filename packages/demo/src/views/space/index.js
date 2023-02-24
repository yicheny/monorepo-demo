import React from 'react';
import {Space,Button} from '@yc-ui'

export default function SpaceView() {
    return <div>
        <Space direction={'vertical'} size={'middle'}>
            <Space>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </Space>
            <Space size={'middle'}>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </Space>
            <Space size={'large'}>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </Space>
        </Space>
    </div>;
}