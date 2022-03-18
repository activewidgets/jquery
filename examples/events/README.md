
[Open fullscreen](https://jquery.activewidgets.com/events/) | [Source on github](https://github.com/activewidgets/jquery/tree/master/examples/events) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/jquery/tree/master/examples/events?file=src/index.js)

The datagrid emits composite [mouse](https://activewidgets.com/api/datagrid/mouse-event/) event 
which makes it easier to find the elements affected by the user action -

```js
function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}

$('ax-datagrid')
    .prop({ columns, rows })
    .on('mouse', event => onMouse(event.detail))
    .mount();
```

Read more:

- [jQuery Datagrid - Get started](https://activewidgets.com/guide/env/jquery/#user-events)
- [API - mouse event](https://activewidgets.com/api/datagrid/mouse-event/)