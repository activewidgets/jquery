
[Open fullscreen](/cdn-es5/) | [Source on github](https://github.com/activewidgets/jquery/tree/master/examples/cdn-es5) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/jquery/tree/master/examples/cdn-es5)

For quick prototyping you can use files on ActiveWidgets CDN:

```html
<script src="https://cdn.activewidgets.com/jquery"></script>
```

If you support ie11 you should also include Promise polyfill:

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=Promise"></script>
```

Create and initialize the component:

```js
var rows = [
    { framework: 'jQuery', source: 'CDN', language: 'ES5'}
];

$('ax-datagrid')
    .prop('rows', rows)
    .mount();
```