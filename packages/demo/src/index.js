import init from './init.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import {test} from '@shared/utils';
import {print} from '@shared/base'

print.setState(false);
print.log("测试共享模块方法:test", test(1,2));

ReactDOM.render(React.createElement(App),document.querySelector('#root'));
