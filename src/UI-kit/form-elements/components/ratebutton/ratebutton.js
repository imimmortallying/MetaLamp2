
export class RateButton{
    constructor(options){
        this.quantityStars = options.quantityStars;
        this.quantityStarsFull = options.quantityStarsFull;
        this.containerClass = options.containerClass;
        this.newContainerClass = options.newContainerClass;
    }

    createStars(){
        let newContainerElem = document.createElement('div');
        newContainerElem.className = this.newContainerClass
        let containerElem = document.querySelector(`${this.containerClass}`);
        containerElem.append(newContainerElem);
        
        // устанавливаю дата-атрибут с кол-вом закрашенных звезд в контейнер
        containerElem.setAttribute('raiting', this.quantityStarsFull)

        for (let i = 0; i < this.quantityStars; i++){
            let newStarElem = document.createElement('div');
            newStarElem.className = 'rate-button__star';
            if (i < this.quantityStarsFull){
                newStarElem.classList.add('rate-button__star-full') 
            }
            newContainerElem.append(newStarElem);
        }

        let starsArray = newContainerElem.querySelectorAll('.rate-button__star');

        starsArray.forEach((starElem, index) => {
            starElem.addEventListener('click', () => {
            
            // обновление дата-параметра кол-ва звезд контейнера
            this.quantityStarsFull = index + 1;
            containerElem.setAttribute('raiting', this.quantityStarsFull)

            //добавляет классы закрашенных звезд до нажатой + нажатая
            for (let i = 0; i<=index; i++ ){
                if (!starsArray[i].classList.contains('rate-button__star-full')){
                    starsArray[i].classList.toggle('rate-button__star-full')
                }
            }
            // убирает классы закрашенных звезд после нажатой
            for (let i=index+1; i<starsArray.length; i++){
                starsArray[i].classList.remove('rate-button__star-full')
            }
            })            
           })

    }
}