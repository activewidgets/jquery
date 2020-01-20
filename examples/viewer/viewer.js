
import {Viewer} from '@activewidgets/examples';
import * as pages from '../index.js';
import {tpl} from '../../';
import $ from 'jquery';


function mount(component, props){

    let container = document.getElementById('app'),
        target = document.createElement(component);

    container.innerHTML = '';
    container.appendChild(target);

    $(target).prop(props).mount();
}


function clean(){
    let container = document.getElementById('app');
    container.innerHTML = '';
}


const viewer = new Viewer({
    target: document.body,
    props: {pages, mount, clean}
});
