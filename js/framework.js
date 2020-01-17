
import adapter from '@activewidgets/frameworks/jquery';
import $ from 'jquery';
import * as preact from 'preact';
import htm from 'htm';

export const {h, build} = adapter($, preact);
export const tpl = htm.bind(h);
