import '../../fonts/fonts.scss';
import './search-room.pug';
import './search-room.scss';

import '../../UI-kit/form-elements/components/datepicker/datepicker';
// import '../../UI-kit/form-elements/components/pagination/pagination';
import '../../UI-kit/form-elements/components/card-room/card-room';
import '../../UI-kit/form-elements/components/slider/slider';
import '../../UI-kit/form-elements/components/expandable-checkbox-list/expandable-checkbox-list';

import {Dropdown} from '../../UI-kit/form-elements/components/dropdown/dropdown'
let newDropdown = new Dropdown(
    {
        containerClass: '.search-room__dropdown-guests',
        newContainerClass: 'dropdown__container',
        headerText: 'Сколько гостей',
        elementWidth: 'narrow', // narrow=266 or wide=320
        itemsArray: ['взрослые','дети','младенцы', 'жулики', 'доходяги'],
        formsArray: 
            [
                {f1:'взрослый',f2:'взрослых',f3:'взрослых'},
                {f1:'ребенок',f2:'ребенка',f3:'детей'},
                {f1:'младенец',f2:'младенца',f3:'младенцев'},
                {f1:'жулик',f2:'жулика',f3:'жуликов'},
                {f1:'доходяга',f2:'доходяги',f3:'доходяг'}
            ],
            // важно либо правильно заполнить массив, либо оставить его пустым
        mergeArray: [['взрослые', 'дети']],
        mergeForms: [{f1:'гость',f2:'гостя',f3:'гостей'}]
    })

newDropdown.createDropdown();

let newDropdownRooms = new Dropdown(
    {
        containerClass: '.search-room__dropdown-rooms',
        newContainerClass: 'dropdown__container',
        headerText: 'Сколько гостей',
        elementWidth: 'narrow', // narrow=266 or wide=320
        itemsArray: ['взрослые','дети','младенцы', 'жулики', 'доходяги'],
        formsArray: 
            [
                {f1:'взрослый',f2:'взрослых',f3:'взрослых'},
                {f1:'ребенок',f2:'ребенка',f3:'детей'},
                {f1:'младенец',f2:'младенца',f3:'младенцев'},
                {f1:'жулик',f2:'жулика',f3:'жуликов'},
                {f1:'доходяга',f2:'доходяги',f3:'доходяг'}
            ],
            // важно либо правильно заполнить массив, либо оставить его пустым
        mergeArray: [['взрослые', 'дети']],
        mergeForms: [{f1:'гость',f2:'гостя',f3:'гостей'}]
    })

newDropdownRooms.createDropdown();

import {Paginator} from '../../UI-kit/form-elements/components/pagination/pagination'
let constructPagination = new Paginator(
    {
    element: ".pagination__container",
    totalPages: 20,
    currentPage: 9,
    })

constructPagination.element()