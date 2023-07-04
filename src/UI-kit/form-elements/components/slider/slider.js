// import './slider.pug';

const rangeInput = document.querySelectorAll('.slider__range');
const progress = document.querySelector('.slider__progress');
const sliderValues = document.querySelector('.slider__values');

rangeInput.forEach(input =>{
    input.addEventListener('input', ()=>{
        render();
    })

});

let render = function(){
            
    let minVal, maxVal;
    let inp1value = Number(rangeInput[0].value);
    let inp2value = Number(rangeInput[1].value);
    
    if (inp1value < inp2value){
        maxVal = inp2value;
        minVal = inp1value;
    } else {
        maxVal = inp1value;
        minVal = inp2value; 
    }

    progress.style.left = ((minVal-rangeInput[0].min) / (rangeInput[0].max - rangeInput[0].min)) * 100 + '%';
    progress.style.right = 100-((maxVal-rangeInput[1].min) / (rangeInput[1].max - rangeInput[1].min)) * 100 + '%';
    
    sliderValues.innerHTML = `${minVal}₽ - ${maxVal}₽`;
};

render();