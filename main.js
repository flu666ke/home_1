var btnSlide = document.getElementById('sld');


var images = document.querySelectorAll('#eye img');

var i = 0;

var slideLines = document.querySelectorAll('.slider #slide');

var j = 0;

btnSlide.onclick = function () {

    images[i].style.display = 'none';

    i++;

    if (i >= images.length) {

        i = 0;
    }

    images[i].style.display = 'block';

    slideLines[j].style.borderBottom = '2px solid white';

    j++;

    if ( j >=slideLines.length / 2) {

        j = 0;
    }

    slideLines[j].style.borderBottom = '2px solid #f4bd50';

}


