import init from './init';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
// import {test} from '@shared/utils';
// import {print} from '@shared/base';
import {Test} from '@shared/components';

// print.setState(false);
// print.log("测试共享模块方法:test", test(1,2));

ReactDOM.render(React.createElement(Test),document.querySelector('#root'));
