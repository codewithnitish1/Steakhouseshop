const figureImg = document.querySelector('figure img');
const Imgs = document.querySelectorAll('.slide img');

Imgs.forEach(function(img){
    img.addEventListener('click',function(e){
        figureImg.src = e.target.src;
    })
})