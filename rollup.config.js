
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import sourcemaps from 'rollup-plugin-sourcemaps';
import {terser} from 'rollup-plugin-terser';
import fs from 'fs';
import path from 'path';
import rootpkg from './package.json';


let name = 'ActiveWidgets.jQuery',
    framework = ['jquery'];


let globals = {
    'htm': 'htm',
    'preact': 'preact',
    'jquery': 'jQuery',
    '@activewidgets/frameworks/jquery': 'ActiveWidgets.Frameworks.jQuery',
    '@activewidgets/datagrid/js': 'ActiveWidgets.Components',
    '@activewidgets/datagrid/style': 'ActiveWidgets.Styles',
    '@activewidgets/datagrid/metadata': 'ActiveWidgets.Metadata',
    '@activewidgets/datagrid/dist/datagrid.css': '',
    '@activewidgets/datagrid/css': ''
};


let roots = {
    modules: ['', 'bundle', 'css', 'js'],
    bundles: ['', 'bundle']
};


let getBanner = name => `/**
 * ${name} ${rootpkg.version}
 * Copyright (C) 2020 ActiveWidgets SARL. All Rights Reserved.
 * This code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this package.
 */
`;


function keepBanner(node, comment){
    if (comment.type == "comment2") {
        return /\(C\) 2020 ActiveWidgets/.test(comment.value);
    }
}


let plugins = [
    postcss({
        extract: 'ax.css',
        sourceMap: true
    }),
    sourcemaps(),
    resolve(),
    babel({
        babelrc: false,
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [["@babel/env", {modules: false}]]
    }),
    terser({
        output: {comments: keepBanner}
    })
];


function read(filename){
    return String(fs.readFileSync(filename, {encoding:'utf8'}));
}


let modules = roots.modules.map(dir => {

    let pkg = JSON.parse(read(path.join(dir, 'package.json'))),
        input = path.join(dir, 'index.js'),
        main = path.join(dir, pkg.main),
        module = path.join(dir, pkg.module),
        sourcemap = true,
        banner = getBanner(pkg.name),
        compact = true;

    return {
        input,
        output: [
            {file: main, format: 'umd', sourcemap, banner, globals, name, compact},
            {file: module, format: 'esm', sourcemap, banner},
        ],
        external: Object.keys(globals),
        plugins
    };
});


let getCommercial = () => `/**
 * ${rootpkg.name} ${rootpkg.version}
 * Copyright (C) 2020 ActiveWidgets SARL. All Rights Reserved.
 * This code is licensed under the COMMERCIAL license.
 */
`;


let bundles = roots.bundles.map(dir => {

    let input = path.join(dir, 'index.js'),
        file = path.join('dist', (dir || 'ax') + '.js'),
        sourcemapPathTransform = s => {
            return s.replace(/^\.\../, '')
                .replace(/node_modules/, '..')
                .replace(/@activewidgets.(\w+)/, '$1@' + rootpkg.version);
         },
        sourcemap = true,
        banner = getCommercial(),
        compact = true;

    return {
        input,
        output: [
            {file, format: 'umd', sourcemap, sourcemapPathTransform, banner, globals, name, compact}
        ],
        external: framework,
        plugins
    };
});


export default [].concat(modules, bundles);
