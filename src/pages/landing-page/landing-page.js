import '../../fonts/fonts.scss';
import './landing-page.pug';
import './landing-page.scss';

import '../../UI-kit/form-elements/components/datepicker/datepicker';

import {Dropdown} from '../../UI-kit/form-elements/components/dropdown/dropdown'
let newDropdown = new Dropdown(
    {
        containerClass: '.card-find__dropdown',
        newContainerClass: 'dropdown__container',
        headerText: 'Сколько гостей',
        elementWidth: 'wide', // narrow=266 or wide=320
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