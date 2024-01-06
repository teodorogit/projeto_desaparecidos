const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('.img_container')

let idx = 0;

function carrossel() {
    idx++;

   if(idx > img.length - 1) {
        idx = 0;
   }
    imgs.style.transform = `translateX(${-idx * 300}px)`;
}

setInterval(carrossel,3800);