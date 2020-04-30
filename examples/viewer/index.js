/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Viewer} from '@activewidgets/examples';
import '@activewidgets/jquery';
import $ from 'jquery';
import * as pages from './examples.js';
import readme from '../demo/README.md';
import logo from './jquery.svg';
import pkg from '../../package.json';


let framework = 'jQuery',
    container = document.getElementById('app');


function wrap(handler){
    return function(event){
        handler(event.detail);
    };
}


function mount(component, props){

    let target = document.createElement(component);

    container.innerHTML = '';
    container.appendChild(target);

    Object.keys(props).forEach(i => {
        if (i.indexOf('on') === 0){
            $(target).on(i.slice(2).toLowerCase(), wrap(props[i]));
        }
        else {
            $(target).prop(i, props[i]);
        }
    });

    $(target).mount();
}


function clean(){
    container.innerHTML = '';
}


container.innerHTML = '';


const viewer = new Viewer({
    target: document.body,
    props: {framework, pkg, logo, readme, pages, mount, clean}
});
