import {Dropdown} from './dropdown.js'
let newDropdown2 = new Dropdown(
    {
        containerClass: '.form-elements__dropdown-container-rooms',
        newContainerClass: 'dropdown__container1',
        itemsArray: ['спальни','кровати','ванные комнаты'],
        formsArray: 
            [
                {f1:'спальня',f2:'спальни',f3:'спален'},
                {f1:'кровать',f2:'кровати',f3:'кроватей'},
                {f1:'ванная комната',f2:'ванные комнаты',f3:'ванных комнат'},

            ],
            // важно либо правильно заполнить массив, либо оставить его пустым
        mergeArray: [['спальни', 'кровати']],
        mergeForms: [{f1:'гость',f2:'гостя',f3:'гостей'}]
    })

newDropdown2.createDropdown();

let newDropdown3 = new Dropdown(
    {
        containerClass: '.form-elements__dropdown-container-rooms2',
        newContainerClass: 'dropdown__container2',
        itemsArray: ['спальни','кровати','ванные комнаты'],
        formsArray: 
            [
                {f1:'спальня',f2:'спальни',f3:'спален'},
                {f1:'кровать',f2:'кровати',f3:'кроватей'},
                {f1:'ванная комната',f2:'ванные комнаты',f3:'ванных комнат'},

            ],
            // важно либо правильно заполнить массив, либо оставить его пустым
        mergeArray: [],
        mergeForms: []
    })

newDropdown3.createDropdown();

let newDropdown4 = new Dropdown(
    {
        containerClass: '.form-elements__dropdown-container-guests2',
        newContainerClass: 'dropdown__container',
        itemsArray: ['взрослые','дети','младенцы'],
        formsArray: 
            [
                {f1:'взрослый',f2:'взрослых',f3:'взрослых'},
                {f1:'ребенок',f2:'ребенка',f3:'детей'},
                {f1:'младенец',f2:'младенца',f3:'младенцев'},

            ],
            // важно либо правильно заполнить массив, либо оставить его пустым
        mergeArray: [['взрослые', 'дети']],
        mergeForms: [{f1:'гость',f2:'гостя',f3:'гостей'}]
    })

newDropdown4.createDropdown();