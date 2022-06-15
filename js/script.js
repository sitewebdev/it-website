

$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel(
        {
            margin: 10,
            nav: true,
            navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        }
    );

    $('#article-action-left').click(function() { owl.trigger('prev.owl.carousel');})
    $('#article-action-right').click(function() { owl.trigger('next.owl.carousel');})
});

let el = document.querySelector('#satisfaction') 
let myAnimation = new LazyLinePainter(el, {
  strokeWidth: 2,
  ease: 'easeInOutExpo'
});
el.addEventListener('click', paint, false);

function paint(){ 
   myAnimation.paint();
}

paint();