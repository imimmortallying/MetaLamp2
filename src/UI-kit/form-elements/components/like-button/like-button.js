import './like-button.pug';

let likeButtons = document.querySelectorAll('.like-button');

for (let likeButton of likeButtons){

    likeButton.addEventListener('click', function(){
        let toggleClassLiked = function(){
            likeButton.classList.toggle('like-button_liked')
        };

        let changeCounter = function(){
            let isLiked = likeButton.classList.contains('like-button_liked')

            if (isLiked){
                likeButton.dataset.like = +likeButton.dataset.like + 1;
            } else {
                likeButton.dataset.like = +likeButton.dataset.like -1;
            }

            likeButton.querySelector('.like-button__numb').innerHTML = likeButton.dataset.like;
        }

        toggleClassLiked();
        changeCounter();
    })
}
