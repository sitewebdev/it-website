

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


    
    var owl_part = $('#owl-carousel-partenaire');
    owl_part.owlCarousel(
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
    $('#part-action-left').click(function() { owl_part.trigger('prev.owl.carousel');})
    $('#part-action-right').click(function() { owl_part.trigger('next.owl.carousel');})

    loaTestimonial();
});

/*
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
*/



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

function scrollToTop(){
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
}

function startWow() {
    var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();
      console.log(wow)
}
///startWow();


function loaTestimonial() {
    tabcontent = document.getElementsByClassName("bloc-testimonial");
    for (i = 0; i <= tabcontent.length - 1; i++) {
        if(i == 0){
            openTestimonial(null, tabcontent[i].id)
            break;
        }
    }
}


function openTestimonial(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("bloc-testimonial");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    console.log(cityName)
    evt.currentTarget.className += " active";
}