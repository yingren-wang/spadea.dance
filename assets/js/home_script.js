const main = document.getElementById('main');
const backgroundImage = new Image();
backgroundImage.src = getComputedStyle(main).backgroundImage.slice(4, -1).replace(/"/g, "");

backgroundImage.onload = function() {
  main.style.height = backgroundImage.height + 'px';
}
