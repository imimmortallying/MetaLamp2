

// // //selecting required elements

export class Paginator{
    // containerTag;
    constructor(options){
        this.containerTag = document.querySelector(options.element);
        this.totalPages = options.totalPages;
        this.page = options.currentPage;
    }

    // создать контейнер
    element(){
        let itemTag = '';
        let beforePages = this.page - 1;
        let afterPages = this.page + 1;
        let activeClass;
        
        if (this.page>1){ // if page value > 1 then add previous button
            itemTag += '<div class="pagination__item pagination__item_arrowed pagination_previous"></div>';
        }
        // 1, 2 and dots
        if (this.page>2){
            itemTag += `<div class="pagination__item pagination__item_edge" data-number='1'>1</div>`;
            if (this.page >3 && this.page <5){
                itemTag += `<div class="pagination__item pagination__item_edge" data-number='2'>2</div>`;
            }
                if (this.page>4){
                    itemTag += `<div class="pagination__item ">...</div>`;
                }    
        }
    
        // // middle pages
    
            for (let i = beforePages; i <= afterPages; i++){
                // проверка, чтобы не создавались 0 или тотал +1 элементы, что вызовет ошибку при попытка навешать листенер ниже
                if (i == this.totalPages + 1){
                    break;
                }
                if (i == 0){
                    continue;
                }
    
                //assign active class
                if (i == this.page){
                    activeClass = 'pagination__item_active';
                } else {
                    activeClass = ''; 
                }
                itemTag += `<div class="pagination__item pagination__item-number ${activeClass}"  data-number=${i}>${i}</div>`;
            } 
            
        //     // 15 and dots
            if (this.page<this.totalPages-3){
                itemTag += `<div class="pagination__item ">...</div>`;
            }
            if (this.page<this.totalPages-2 && this.page>this.totalPages-4){
                itemTag += `<div class="pagination__item" data-number=${this.totalPages-1}>${this.totalPages-1}</div>`;
            }
            if (this.page<this.totalPages-1){
                itemTag += `<div class="pagination__item pagination__item_edge" data-number=${this.totalPages}>${this.totalPages}</div>`;
            }
            
            // next button
            if (this.page<this.totalPages){ // if page value < totalPages then add next button
                itemTag += '<div class="pagination__item pagination__item_arrowed pagination_next"></div> '
            }
    
        // // filling inner html of pagination container
        this.containerTag.innerHTML = itemTag;
    

        // на этом момент возникает проблема. element был функцией, которая сама себе вешала и вызывала с определенными
        // параметрами для данного EventListener. Но сейчас element это стрелочная функция, не принимающая параметров
        // как задать параметры для функции element внизу? как это делается правильно? нужен метод, в который я буду передавать параметры?

        // // add event listener on back button
        let buttonPrevious = document.querySelector('.pagination_previous');
        if (this.page > 1){
            
            buttonPrevious.addEventListener('click', (e)=>{
                this.page = this.page - 1;
                this.element();
                    // console.log(this.totalPages, this.page)
            })
        }
    
        // add event listener on next button
        let buttonNext = document.querySelector('.pagination_next');
        if (this.page < this.totalPages)
        buttonNext.addEventListener('click', (e)=>{
            this.page = this.page + 1;
            this.element();
        })
    
        //add event listener on middle buttons
        let itemNumbers = document.querySelectorAll('.pagination__item-number');
        for (let itemNumber of itemNumbers){
            itemNumber.addEventListener('click', ()=>{
                this.page = +itemNumber.dataset.number;
                this.element();
                })
        }
    
        // add event listener on the first and the last buttons
        let edgeButtons = document.querySelectorAll('.pagination__item_edge');
        for (let edgeButton of edgeButtons){
            edgeButton.addEventListener('click', ()=>{
                this.page = +edgeButton.dataset.number
                this.element();
            })
        }
        
}

}





