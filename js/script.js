

$(document).ready(function(){
    var owl = $('#owl-carousel-article');
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



    var owl_nr = $('#owl-carousel-nr');
    owl_nr.owlCarousel(
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
    $('#nr-action-left').click(function() { owl_nr.trigger('prev.owl.carousel');})
    $('#nr-action-right').click(function() { owl_nr.trigger('next.owl.carousel');})
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


function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
      console.log('hi')
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    document.getElementById(`${cityName}-x`).style.display = "block";
    evt.currentTarget.className += " active";
  }