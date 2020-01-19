﻿
import $ from 'jquery';
import {tpl} from '../';
import * as pages from './index.js';
import * as northwind from './northwind.js';


let el = document.querySelector('#app'),
    templates = {},
    data = {northwind},
    lookup = {},
    links = [],
    key = 1,
    obj;


function path(s){
    return '/' + s.replace(/^\W+|\W+$/g, '').replace(/\W+/g, '-').toLowerCase();
}


Object.keys(pages).forEach(section => {
    links.push(`<div class="menu-header">${section}</div>`);
    Object.keys(pages[section]).forEach(name => {
        let url = path(section) + path(name);
        lookup[url] = pages[section][name];
        links.push(`<div class="menu-item"><a href="#view${url}">${name}</a></div>`);
    });
});


function index(name){
    el.innerHTML = name ? 'not found ' + name : links.join('');
}


function render(component, props){

    el.innerHTML = '';
    let target = document.createElement(component);

    el.appendChild(target);

    props.key = ++key;

    $(target).prop(props).mount();
}


function refresh(){

    let name = location.hash.replace(/^#(\w+)/, ''),
        mode = RegExp.$1;

    if (name && typeof lookup[name] == 'function') {
        lookup[name]({render}, templates, data);
    }
    else {
        index(name);
    }
}


window.addEventListener("hashchange", refresh, false);
refresh();
