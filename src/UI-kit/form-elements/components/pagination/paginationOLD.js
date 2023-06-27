// import './pagination.pug';

// // //selecting required elements


let containerTag = document.querySelector(".pagination__container");
let totalPages = 20;

function element(totalPages, page){
    let itemTag = '';
    let beforePages = page - 1;
    let afterPages = page + 1;
    let activeClass;

    if (page>1){ // if page value > 1 then add previous button
        itemTag += '<div class="pagination__item pagination__item_arrowed pagination_previous"></div>';
    }
    // 1, 2 and dots
    if (page>2){
        itemTag += `<div class="pagination__item pagination__item_edge" data-number='1'>1</div>`;
        if (page >3 && page <5){
            itemTag += `<div class="pagination__item pagination__item_edge" data-number='2'>2</div>`;
        }
            if (page>4){
                itemTag += `<div class="pagination__item ">...</div>`;
            }    
    }

    // middle pages

        for (let i = beforePages; i <= afterPages; i++){
            // проверка, чтобы не создавались 0 или тотал +1 элементы, что вызовет ошибку при попытка навешать листенер ниже
            if (i == totalPages + 1){
                break;
            }
            if (i == 0){
                continue;
            }

            //assign active class
            if (i == page){
                activeClass = 'pagination__item_active';
            } else {
                activeClass = ''; 
            }
            itemTag += `<div class="pagination__item pagination__item-number ${activeClass}"  data-number=${i}>${i}</div>`;
        } 
        
        // 15 and dots
        if (page<totalPages-3){
            itemTag += `<div class="pagination__item ">...</div>`;
        }
        if (page<totalPages-2 && page>totalPages-4){
            itemTag += `<div class="pagination__item" data-number=${totalPages-1}>${totalPages-1}</div>`;
        }
        if (page<totalPages-1){
            itemTag += `<div class="pagination__item pagination__item_edge" data-number=${totalPages}>${totalPages}</div>`;
        }
        
        // next button
        if (page<totalPages){ // if page value < totalPages then add next button
            itemTag += '<div class="pagination__item pagination__item_arrowed pagination_next"></div> '
        }

    // filling inner html of pagination container
    containerTag.innerHTML = itemTag;

    // add event listener on back button
    let buttonPrevious = document.querySelector('.pagination_previous');
    if (page > 1){

        buttonPrevious.addEventListener('click', (e)=>{
                element(totalPages, page-1);
        })
    }

    // add event listener on next button
    let buttonNext = document.querySelector('.pagination_next');
    if (page < totalPages)
    buttonNext.addEventListener('click', (e)=>{
        element(totalPages, page+1);
    })

    // add event listener on middle buttons
    let itemNumbers = document.querySelectorAll('.pagination__item-number');
    for (let itemNumber of itemNumbers){
        itemNumber.addEventListener('click', ()=>{
            element(totalPages, +itemNumber.dataset.number);
            })
    }

    // add event listener on the first and the last buttons
    let edgeButtons = document.querySelectorAll('.pagination__item_edge');
    for (let edgeButton of edgeButtons){
        edgeButton.addEventListener('click', ()=>{
            element(totalPages, +edgeButton.dataset.number);
        })
    }

}

// не забудь исправить middle buttons, которые, при движении больше/меьше на -1 и +1 перезапишут крайние кнопки 1 и 15
// если они дойдут до них, то перезапишут их классы. Нужно либо ограничить это движение, либо добавить ему иф, чтобы оно тоже 
// записывало классы крайним элементам



element(totalPages,6)

