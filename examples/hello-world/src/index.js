
import $ from 'jquery';
import '@activewidgets/jquery';
import './styles.css';


const rows = [
    { message: 'Hello, World!' }
];


$('ax-datagrid')
    .prop('rows', rows)
    .mount();