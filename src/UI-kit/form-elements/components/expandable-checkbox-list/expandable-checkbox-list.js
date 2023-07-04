
let checkboxButtons = document.querySelectorAll('.expandable-checkbox-list__header')

checkboxButtons.forEach(el => {
    let item = el.nextElementSibling
    el.addEventListener('click', ()=>{
        el.classList.toggle('expandable-checkbox-list__header_active')
        item.classList.toggle('expandable-checkbox-list__items_active')
        // console.log(item)
    })

})
// console.log('123')