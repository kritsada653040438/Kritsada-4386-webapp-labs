
var button = document.querySelector('button');

function randomColor(number) {
    return Math.floor(Math.random() * (number+1));
    
}
function bgChange() {
    var rndcol = 'rgb(' + randomColor(255) + ',' + randomColor(255) + ',' + randomColor(255) + ')';
    document.body.style.color = rndcol;
}
 
button.addEventListener('click', bgChange);
