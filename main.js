import { filter, filterBtn } from './filter'
import './style.scss'
import * as bootstrap from 'bootstrap'
import table from './table'

document.querySelector('#app').innerHTML = `

    <div class="container py-4 px-3 mx-auto">
      <h1>Gestion des utilisateurs</h1>
      ${filter()}
      <div id="table"></div>
    </div>
`
table();
filterBtn();