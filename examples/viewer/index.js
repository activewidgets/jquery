
import {Viewer} from '@activewidgets/examples';
import '../../';
import $ from 'jquery';
import * as pages from './examples.js';
import readme from '../README.md';
import logo from './jquery.svg';
import pkg from '../../package.json';


let framework = 'jQuery',
    container = document.getElementById('app');


function mount(component, props){

    let target = document.createElement(component);

    container.innerHTML = '';
    container.appendChild(target);

    $(target).prop(props).mount();
}


function clean(){
    container.innerHTML = '';
}


container.innerHTML = '';


const viewer = new Viewer({
    target: document.body,
    props: {framework, pkg, logo, readme, pages, mount, clean}
});
