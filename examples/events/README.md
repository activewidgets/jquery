
[Open fullscreen](/events/) | [Source on github](https://github.com/activewidgets/jquery/tree/master/examples/events) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/jquery/tree/master/examples/events)

The datagrid emits composite [mouse](https://docs.activewidgets.com/api/datagrid/mouse-event/) event 
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

- [jQuery Datagrid - Get started](https://docs.activewidgets.com/guide/env/jquery/#user-events)
- [API - mouse event](https://docs.activewidgets.com/api/datagrid/mouse-event/)