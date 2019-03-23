var btnSlide = document.getElementById('sld');


var images = document.querySelectorAll('#eye img');

var i = 0;

btnSlide.onclick = function () {

    images[i].style.display = 'none';

    i++;

    if (i >= images.length) {

        i = 0;
    }

    images[i].style.display = 'block';

}