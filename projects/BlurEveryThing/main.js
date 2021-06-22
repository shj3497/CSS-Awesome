const layer1 = document.querySelector(".js-layer1");
const layer2 = document.querySelector('.js-layer2');
let count = 1;

function layerImg(count){
  layer1.style.backgroundImage = `url(./imgs/bg${count}.jpg)`;
  layer2.style.backgroundImage = `url(./imgs/bg${count}.jpg)`;
}
layerImg(count);

function prevImg() {
  count--;
  if(count === 0){
    count = 5;
  }
  layerImg(count);
}

function nextImg() {
  count++;
  if(count === 6){
    count = 1;
  }
  layerImg(count);
}