
import {getQueriesForElement} from '@testing-library/dom';
import '@activewidgets/components';
import $ from 'jquery';


export function render(component, props){

    let baseElement = document.body,
        container = baseElement.appendChild(document.createElement('div')),
        el = container.appendChild(document.createElement(component));

    let i, $el = $(el);

    for (i in props){
        if (i.slice(0, 2) == 'on'){
            $el.on(i.slice(2).toLowerCase(), event => props[i](event.detail));
        }
        else {
            $el.prop(i, props[i]);
        }
    }

    $el.mount();

    return {
        container,
        baseElement,
        ...getQueriesForElement(baseElement)
    }
};


export function cleanup(){
    document.body.innerHTML = '';
};


if (typeof afterEach === 'function') {
    afterEach(cleanup);
}
