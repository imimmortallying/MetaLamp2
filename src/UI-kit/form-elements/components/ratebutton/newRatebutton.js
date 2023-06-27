import {RateButton} from './ratebutton.js'
let constructRatebutton = new RateButton(
    {
        quantityStars: 5,
        quantityStarsFull: 4,
        containerClass: '.form-elements__rate-button-container',
        newContainerClass: 'rate-button__container',
    })

constructRatebutton.createStars();

let constructRatebutton2 = new RateButton(
    {
        quantityStars: 5,
        quantityStarsFull: 5,
        containerClass: '.form-elements__rate-button-container',
        newContainerClass: 'rate-button__container',
    })

    constructRatebutton2.createStars();

