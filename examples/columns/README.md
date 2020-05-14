
[Open fullscreen](/columns/) | [Source on github](https://github.com/activewidgets/jquery/tree/master/examples/columns) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/jquery/tree/master/examples/columns)

This example shows how to configure datagrid columns:

```js
import $ from 'jquery';
import '@activewidgets/jquery';
import { northwind } from "@activewidgets/examples/data";

const columns = [
  {header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true},
  {header: 'Company Name', field: 'companyName', width: 160},
  {header: 'Contact', field: 'contactName', width: 120},
  {header: 'Title', field: 'contactTitle', width: 120},
  {header: 'Address', field: 'address', width: 120},
  {header: 'City', field: 'city'},
  {header: 'Zip', field: 'postalCode', align: 'right'},
  {header: 'Phone', field: 'phone'},
  {header: 'Fax', field: 'fax'},
  {header: 'Country', field: 'country'}
];

const rows = northwind.customers;

$('ax-datagrid')
    .prop({ columns, rows })
    .mount();
```

Assign an array of column descriptor objects to the [columns](https://docs.activewidgets.com/api/datagrid/columns/) property.

Read more:

- [jQuery Datagrid - Get started](https://docs.activewidgets.com/guide/env/jquery/#data-properties)
- [API - columns](https://docs.activewidgets.com/api/datagrid/columns/)
- [API - rows](https://docs.activewidgets.com/api/datagrid/rows/)