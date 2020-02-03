
### 

# ActiveWidgets/jQuery • Datagrid 

[![npm version](https://img.shields.io/npm/v/@activewidgets/jquery)](https://www.npmjs.com/package/@activewidgets/jquery "View this project on npm")
[![npm downloads](https://img.shields.io/npm/dm/@activewidgets/jquery)](https://www.npmjs.com/package/@activewidgets/jquery "npm package downloads/month")
[![Github issues](https://img.shields.io/github/issues/activewidgets/jquery)](https://github.com/activewidgets/jquery/issues "See Github issues")
[![Github repo](https://img.shields.io/github/stars/activewidgets/jquery?label=GitHub&style=social)](https://github.com/activewidgets/jquery "Open Github repo")

ActiveWidgets is a multi-framework UI component library. This package provides **datagrid component** for **jQuery**.

[Live demo](https://jquery.activewidgets.com) / [Developer guide](https://docs.activewidgets.com/guide/) / [API reference](https://docs.activewidgets.com/api/)

[![Datagrid demo](https://cdn.activewidgets.com/assets/screens/demo.png)](https://jquery.activewidgets.com)

- [Installation](#installation)
- [Usage](#usage)
- [CDN links](#cdn-links)
- [Data properties](#data-properties)
- [User events](#user-events)


## Installation

Add [@activewidgets/jquery](https://docs.activewidgets.com/api/packages/jquery/) to your project dependencies -

```sh
> npm i --save @activewidgets/jquery
```


## Usage

Import the library into your app - 

```js
import "@activewidgets/jquery";
```

It will add `mount` function to jQuery. Now, assuming that you've added a placeholder `ax-datagrid` tag to the page

```html
<ax-datagrid>Loading...</ax-datagrid>
```

Assign properties and mount an actual ActiveWidgets component at the placeholder position -

```js
const rows = [
    { message: 'Hello, World!' }
];

$('ax-datagrid')
    .prop('rows', rows)
    .mount();
```

[Live example](https://jquery.activewidgets.com/examples/local/hello-world/) | [Source on github](https://github.com/activewidgets/jquery/tree/master/examples/hello-world) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/jquery/tree/master/examples/hello-world)


## CDN links

For quick prototyping the package is also available over ActiveWidgets CDN -

```html
<script src="https://cdn.activewidgets.com/jquery"></script>
```

[Live example](https://jquery.activewidgets.com/examples/local/cdn-es5/) | [Source on github](https://github.com/activewidgets/jquery/tree/master/examples/cdn-es5) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/jquery/tree/master/examples/cdn-es5)


## Mount function

The `mount` function does not require any arguments - it uses element tagName as a component ID.

```html
<ax-datagrid id="my-grid-1"> ... </ax-datagrid>
```

You can apply any selector to find the placeholder element (but the tag must be `ax-datagrid`)

```js
$('#my-grid-1')
    .prop('rows', rows)
    .mount();
```


## Data properties

You have to provide [columns](https://docs.activewidgets.com/api/datagrid/columns/) and [rows](https://docs.activewidgets.com/api/datagrid/rows/) properties to the datagrid to show some data. The properties of each `column` object define how the data will be rendered -

- [field](https://docs.activewidgets.com/api/datagrid/columns/#field) - where the cell data comes from (string|function)
- [header](https://docs.activewidgets.com/api/datagrid/columns/#header) - column header (string|object)
- [width](https://docs.activewidgets.com/api/datagrid/columns/#width) - column width (number, in pixels)
- [align](https://docs.activewidgets.com/api/datagrid/columns/#align) - cell text alignment (left|right|center)
- [format](https://docs.activewidgets.com/api/datagrid/columns/#format) - number/date format (string|function)
- [fixed](https://docs.activewidgets.com/api/datagrid/columns/#fixed) - fixed (true/false) for columns on the left or right side

The `style` (string|object) or `className` properties allow to change the styling of the column and cell elements.

```js
const columns = [
  {header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true},
  {header: 'Company Name', field: 'companyName', width: 160},
  {header: 'Contact', field: 'contactName', width: 120},
  {header: 'Title', field: 'contactTitle', width: 120},
  {header: 'Address', field: 'address', width: 120, align: 'right'}
];

const rows = northwind.customers;

$('ax-datagrid')
    .prop({ columns, rows })  // use $.prop() to assign properties
    .mount();
```

[Live example](https://jquery.activewidgets.com/examples/local/columns/) | [Source on github](https://github.com/activewidgets/jquery/tree/master/examples/columns) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/jquery/tree/master/examples/columns)


## User events

In addition to the standard DOM keyboard and mouse events the datagrid emits composite 
[mouse](https://docs.activewidgets.com/api/datagrid/mouse-event/) event which makes it easier to find the elements affected by the user action.

```js
function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}

$('ax-datagrid')
    .prop({ columns, rows })
    .on('mouse', event => onMouse(event.detail))  // pass event.detail to your handler
    .mount();
```

[Live example](https://jquery.activewidgets.com/examples/local/events/) | [Source on github](https://github.com/activewidgets/jquery/tree/master/examples/events) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/jquery/tree/master/examples/events)

When assigning an event handler, note that the event data is passed in the `event.detail` property (we are using DOM CustomEvent class).  

ActiveWidgets custom events do not bubble, so you should always add an event handler at the component itself, not at some parent element.


## More info

- [Live demo](https://react.activewidgets.com) 
- [Developer guide](https://docs.activewidgets.com/guide/) 
- [API reference](https://docs.activewidgets.com/api/)
- [Licensing](https://activewidgets.com/licenses/)
- [Support forum](https://activewidgets.com/messages/)


---

[![ActiveWidgets](https://activewidgets.com/include/logo/aw-logo-40.png)](https://activewidgets.com) 


