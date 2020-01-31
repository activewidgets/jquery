
import $ from 'jquery';
import '@activewidgets/jquery';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}


$('ax-datagrid')
    .prop({ columns, rows })
    .on('mouse', event => onMouse(event.detail))
    .mount();