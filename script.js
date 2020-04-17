function dropClick() {
    var txt = document.getElementById('demo')
    if (txt.className.indexOf ('w3-show')== -1) {
        txt.className += " w3-show"
    }
    else {
        txt.className = txt.className.replace(' w3-show','')
    }
}

var imageSlide = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName('myslide');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
    }
    imageSlide ++;
    if (imageSlide > x.length) {imageSlide = 1}
    x[imageSlide-1].style.display = 'block';
    setTimeout (carousel,4000)
}