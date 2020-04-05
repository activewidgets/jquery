
[Open fullscreen](/hello-world/) | [Source on github](https://github.com/activewidgets/jquery/tree/master/examples/hello-world) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/jquery/tree/master/examples/hello-world)

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

 - [Get started](https://docs.activewidgets.com/guide/starting/jquery/)