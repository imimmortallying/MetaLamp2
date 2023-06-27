// import './pagination.pug';
// import './pagination.js'

import {Paginator} from './pagination.js'
let constructPagination = new Paginator(
    {
    element: ".pagination__container",
    totalPages: 20,
    currentPage: 9,
    })

constructPagination.element()