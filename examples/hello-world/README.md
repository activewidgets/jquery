
[Open fullscreen](https://jquery.activewidgets.com/hello-world/) | [Source on github](https://github.com/activewidgets/jquery/tree/master/examples/hello-world) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/jquery/tree/master/examples/hello-world?file=src/index.js)

This is a small example to get started with ActiveWidgets datagrid.

First, import the library:

```js
import '@activewidgets/jquery';
```

Then initialize or load the data array:

```js
let rows = [
    { message: 'Hello, World!' }
];
```

Finally, create the component and assign the data:

```js
$('ax-datagrid')
    .prop('rows', rows)
    .mount();
```

Thats all! 

Read more:

 - [jQuery Datagrid - Get started](https://activewidgets.com/guide/env/jquery/)