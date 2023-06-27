

export class Dropdown{
    constructor(options){
        this.containerClass = options.containerClass;
        this.newContainerClass = options.newContainerClass;
        this.itemsArray = options.itemsArray;
        this.formsArray = options.formsArray;
        this.mergeArray = options.mergeArray;
        this.mergeForms = options.mergeForms;
        this.titleText = options.titleText;
    }

    createDropdown(){
        let newContainerElem = document.createElement('div');
        newContainerElem.className = this.newContainerClass
        let containerElem = document.querySelector(`${this.containerClass}`);
        containerElem.append(newContainerElem);
        //header
        let header = document.createElement('div');
        header.classList.add('dropdown__header');
        header.innerText = 'Сколько гостей';
        newContainerElem.append(header);



        // items container
        let itemsContainer = document.createElement('div');
        itemsContainer.classList.add('dropdown__items-container');
        newContainerElem.append(itemsContainer);
            
        // create items

        // create and fill obj
        let arrayOfObj = [];
        for (let i=0; i<this.itemsArray.length; i++){
            let objItems = {};
            objItems.name = this.itemsArray[i];
            objItems.activeForm = '';
            objItems.count = 0;
            objItems.form1 = this.formsArray[i].f1;
            objItems.form2 = this.formsArray[i].f2;
            objItems.form3 = this.formsArray[i].f3;
            arrayOfObj.push(objItems)
        }
        // console.log(arrayOfObj)

        let isArray = false;
        if (this.mergeArray != null){
            isArray = true
        }
        console.log(isArray)
        // console.log(arrayOfObj);
        // если включено слияние элементов, то создается дополнительный промежуточный объект, который будет формировать хэдер

            let mergedArray = [];
  

            ///////

            let mergeArrayForHeader = ()=> {
                // при mergeArray = [['взрослые', 'дети', 'младенцы'], ['жулики', 'доходяги']]
                mergedArray = [...arrayOfObj]; // копирование
  
                // console.log(result)
                this.mergeArray.forEach((item) => {
                const [firstItem, ...itemsWithoudFirst] = item;
                // console.log(firstItem ) // взрослые, жулики
                // console.log(itemsWithoudFirst) // ... => ['дети', 'младенцы'], ['доходяги']

                const entities = itemsWithoudFirst.map(i => mergedArray.find(kek => kek.name === i));
                // console.log(entities) // [{name: 'дети'}, {name: 'младенцы'}], [{name: 'доходяги'}]
                
                const sum = entities.reduce((sum, current) => sum + current.count, 0);
                // console.log(sum) // сумма count объектов из entities, т.е. от непервых объектов

                mergedArray = mergedArray.map((arrItem) => {
                    if(firstItem === arrItem.name) {
                            return {
                                ...arrItem, count: arrItem.count + sum, 
                            }
                    }
                    if(itemsWithoudFirst.includes(arrItem.name)) {
                        return null;
                    }
                    for (let i=0; i<this.mergeArray.length; i++){
                        if (arrItem.name == this.mergeArray[i][0]){
                            arrItem.form1 = this.mergeForms[i].f1
                            arrItem.form2 = this.mergeForms[i].f2
                            arrItem.form3 = this.mergeForms[i].f3
                        }
                    }

                        return arrItem;
                }).filter(i => i)
                })

                // меняю формы склонения в новом объекте
                
    
         
    
            // console.log(arrayOfObj);
            console.log(mergedArray);
        }
        // mergeArrayForHeader()
        ////////


        for (let i=0; i<this.itemsArray.length; i++){
            // li container
            let newItem = document.createElement('div');
            newItem.classList.add('dropdown__item');
            // li inner
            let newItemTitle = document.createElement('div');
            newItemTitle.classList.add('dropdown__title');
            newItemTitle.innerText = this.itemsArray[i];
            //btns block
            let newItemButtonsContainer = document.createElement('div');
            newItemButtonsContainer.classList.add('dropdown__buttons-block');
            let btnMinus = document.createElement('div');
            btnMinus.innerText = '-';
            btnMinus.classList.add('dropdown__btn-minus')
            let count = document.createElement('div');
            count.innerText = '0';
            count.classList.add('dropdown__count')
            let btnPlus = document.createElement('div');
            btnPlus.innerText = '+';
            btnPlus.classList.add('dropdown__btn-plus')
            
            newItemButtonsContainer.append(btnMinus, count, btnPlus);
            
            
            // append inner into container
            newItem.append(newItemTitle);
            newItem.append(newItemButtonsContainer);
            
            //append li into dropdown container
            itemsContainer.append(newItem)
            


        }

        // footer
        let footer = document.createElement('div');
        footer.classList.add('dropdown__footer');
        itemsContainer.append(footer);
        // footer buttons
        let buttonClean = document.createElement('div');
        buttonClean.classList.add('dropdown__clean-btn');
        buttonClean.innerText = 'очистить';
        
        let buttonApply = document.createElement('div');
        buttonApply.classList.add('dropdown__apply-btn');
        buttonApply.innerText = 'применить';
        footer.append(buttonApply, buttonClean);

        
        //footer listener
        buttonApply.addEventListener('click', ()=>{
            itemsContainer.classList.toggle('dropdown__items_active')
            header.classList.toggle('dropdown__header_active')
        })

        buttonClean.addEventListener('click', ()=>{
            for (let i=0; i<arrayOfObj.length; i++){
                arrayOfObj[i].count = 0;
                countElemsArray[i].innerText = arrayOfObj[i].count;
                headerArr = [];
                header.innerText = 'Сколько гостей';
                buttonClean.classList.remove('dropdown__clean-btn_active')
            }
        })

        //button (header) listener
        header.addEventListener('click', ()=>{
            itemsContainer.classList.toggle('dropdown__items_active')
            header.classList.toggle('dropdown__header_active')
        })

        // функция проверки пустоты текста хэдера
        function checkCount(){
            // console.log(headerArr);
            if (headerArr.filter(i=>i).length == 0){
                header.innerText = 'Сколько гостей';
            }else if (headerArr.filter(i=>i).length != 0 && !buttonClean.classList.contains('dropdown__clean-btn_active')){
                buttonClean.classList.add('dropdown__clean-btn_active')
            }
        }

        // функция заполнения хэдера
        let fillheader = (index) =>{
            // console.log(array, index)
            header.innerText = '';
            if (isArray){
                // console.log(headerArr);
                for (let i=0; i<mergedArray.length; i++){
                    if (mergedArray[i].count !=0){
                        headerArr[i] = `${mergedArray[i].count} ${mergedArray[i].activeForm}`;
                    }
                    if (mergedArray[i].count == 0){
                        headerArr[i] = '';   
                    }
                }
                // console.log(mergedArray, 1)

            } else {
                headerArr[index] = `${arrayOfObj[index].count} ${arrayOfObj[index].activeForm}`;
                // console.log(headerArr)
                if (arrayOfObj[index].count == 0){
                    headerArr[index] = '';   
                }
            }

                    // str for removing last ,
                    let str = '';
                    for (let i=0; i<headerArr.length; i++){
                        if ( headerArr[i] != undefined  && headerArr[i] != ''){
                            str = header.innerText += '   ' + headerArr[i] + ',';
                        } 
                    }
                    header.innerText = str.slice(0,-1);
        }

        // массив чисел и имен для header
        let headerArr = [];



        // фунция склонения имен
        function changeWordForm(){
            
            // функция проверки склонения в зависимости от числа
            function returnWord(num, obj){
                if (num % 10 == 1 && num != 11){
                    obj.activeForm = obj.form1;
                    
                } else if (num % 10 > 1 && num % 10 < 5 && (num < 12 || num > 14)){
                    obj.activeForm = obj.form2;
                    
                } else if (num % 10 > 4 || num % 10 == 0 && (num < 15 || num > 20)){
                    obj.activeForm = obj.form3;
                    
                } else if (num > 5 && num < 21){
                    obj.activeForm = obj.form3;
                    
                }
            }
            // получаю из любого числа 2 последних цифры, чтобы на них проверить склонение
            
            // выбор рабочего массива из двух - если есть слияние, то mergedArray, если нет - arrayOfObj
            let currentArray = [];
            if (isArray){
                currentArray = mergedArray;
            } else currentArray = arrayOfObj;
            console.log(currentArray)
            for (let obj of currentArray){
                // console.log(obj)
                let num;
                if (obj.count.toString().length > 2){
                    num = +obj.count.toString().slice(-2);
                    returnWord(num, obj);
                } else {
                    num = +obj.count;
                    returnWord(num, obj);
                }
            }
            // console.log(currentArray)
            // console.log(mergedArray)
            
        }

        







        // working with + and - buttons
            //btns + array
        let buttonsPlus = document.querySelectorAll('.dropdown__btn-plus');
            // count elems array
        let countElemsArray = document.querySelectorAll('.dropdown__count');

        for (let i=0; i<buttonsPlus.length; i++){
            buttonsPlus[i].addEventListener('click', ()=>{
                arrayOfObj[i].count++;
                countElemsArray[i].innerText = arrayOfObj[i].count;

                if (isArray) {mergeArrayForHeader();}
                changeWordForm()
                // console.log(arrayOfObj)
                fillheader(i)
                checkCount()
 
            })
        }

        // working with - and - buttons
            //btns - array
        let buttonsMinus = document.querySelectorAll('.dropdown__btn-minus');
        for (let i=0; i<buttonsPlus.length; i++){
            buttonsMinus[i].addEventListener('click', ()=>{
                if (arrayOfObj[i].count > 0){
                    --arrayOfObj[i].count;
                    countElemsArray[i].innerText = arrayOfObj[i].count;
                }

                if (isArray) {mergeArrayForHeader();}
                changeWordForm()
                // console.log(arrayOfObj)
                fillheader(i)
                checkCount()
                
            })
            
            // проверка count чтобы изменить text header
            

        }
    }
}