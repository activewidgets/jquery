/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var rows = [
    { framework: 'jQuery', source: 'CDN', language: 'ES5'}
];


$('ax-datagrid')
    .prop('rows', rows)
    .mount();