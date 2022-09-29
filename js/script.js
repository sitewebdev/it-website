


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.opacity = "1";
    document.getElementById("mySidenavForm").style.width = "750px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.opacity = "0";
    document.getElementById("mySidenavForm").style.width = "0";
  }

function scrollToBlock(x, y){
    window.scrollTo(x, y)

}

function openPostCandidate() {
    document.getElementById("post-candidate-overlay").style.display = "flex";
    document.getElementById("post-candidate-overlay").style.top = window.pageYOffset;
    window.scrollTo(0,0)
}
  
  /* Set the width of the side navigation to 0 */
function closePostCandidate() {
    document.getElementById("post-candidate-overlay").style.display = "none";
}

  
$(document).ready(function(){

    try{
        var input = document.getElementById("phone");
        window.intlTelInput(input, {
            // any initialisation options go here
        });
    }
    catch(e){

        console.log(e)
    }

    $('#sPrev').click(function() {
        const items = document.getElementsByClassName('caption');
        for( let i = 0; i<= items.length - 1; i++){
            const item = items[i];
            item.style.display = 'none';
            setTimeout(()=>{
                item.style.display = 'block';

            },1000)
        }

    })
    $('#sNext').click(function() { 
        const items = document.getElementsByClassName('caption');
        for( let i = 0; i<= items.length - 1; i++){
            const item = items[i];
            item.style.display = 'none';
            setTimeout(()=>{
                item.style.display = 'block';

            },1000)
        }
    })


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
            loop: true,
            navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1200: {
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

    var owl_vid = $('#owl-carousel-vid');
    owl_vid.owlCarousel(
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

    $('#vid-action-left').click(function() { owl_vid.trigger('prev.owl.carousel');})
    $('#vid-action-right').click(function() { owl_vid.trigger('next.owl.carousel');})

    startWow();
    try {
        $('[data-fancybox]').fancybox({
            youtube : {
                controls : 0,
                showinfo : 0
            },
            vimeo : {
                color : 'f00'
            }
        })
    }
    catch(e){
        console.log(e)
    }
    

    loadDevTabContent();



try{
    const ulx = document.getElementsByClassName("enjeux-secteur-title-bar");
    ul = ulx[0];
    console.log(ulx)
    
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {stickyEnjeuxFunc()};
 
    
    
    
    // Get the offset position of the navbar
    var sticky = ul.offsetTop;
}
catch(e){
    console.log(e);
}
// Get the navbar


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyEnjeuxFunc() {
        try{
            if (window.pageYOffset >= sticky) {
                ul.classList.add("sticky-enjeux-menu")
            } else {
                ul.classList.remove("sticky-enjeux-menu");
            }
        }
        catch(e){}
        
    }
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
        tablinks[i].className="tablinks"
      tablinks[i].className = tablinks[i].className.replace("active", "");
      console.log('hi')
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    document.getElementById(`${cityName}-x`).style.display = "block";
    document.getElementById(`${cityName}-d`).style.display = "block";
    document.getElementById(`${cityName}-v`).style.display = "block";
    document.getElementById(`${cityName}-t`).style.display = "block";
    if(evt.currentTarget) evt.currentTarget.className += " active";

    try{
        //Active testimonial
        switch(cityName){
            case 'forunisseur-energie':{
                openTestimonial(evt,'edf-t');
                break;
            }
            case 'gestion-reseau-distribution':{
                openTestimonial(evt,'');
                break;
            }
            case 'metier-eau-dechet':{
                openTestimonial(evt,'suez-t');
                break;
            }
        }

    }
    catch(e){
        console.log(e)
    }
    
}

function loadDevTabContent() {
    tabcontent = document.getElementsByClassName("dev-tab-content");
    for (i = 0; i <= tabcontent.length - 1; i++) {
        if(i == 0){
            openDevTab({}, tabcontent[i].id)
            break;
        }
    }
}
function openDevTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("dev-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    } 
    
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("dev-tab-link");
    for (i = 0; i < tablinks.length; i++) {
        if(evt.view){
            tablinks[i].className = tablinks[i].className.replace("dev-tab-active", "");
        }
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    if(evt.currentTarget) evt.currentTarget.className += " dev-tab-active";
    console.log('hioooi');

}

function scrollToTop(){
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
}

function startWow() {
    try{
        var wow = new WOW(
            {
              boxClass:     'wow',      // animated element css class (default is wow)
              animateClass: 'animated', // animation css class (default is animated)
              offset:       0,          // distance to the element when triggering the animation (default is 0)
              mobile:       true,       // trigger animations on mobile devices (default is true)
              live:         true,       // act on asynchronously loaded content (default is true)
              callback:     function(box) {

                if(box.id=="x"){
                    try{
                        console.log(document.getElementById('xsatisfaction').contentWindow)
                        document.getElementById('xsatisfaction').contentWindow.location.reload(true);
                    }
                    catch(e){
                        console.log(e)
                    }
                }
                // the callback is fired every time an animation is started


                // the argument that is passed in is the DOM node being animated
              },
              scrollContainer: null,    // optional scroll container selector, otherwise use window,
              resetAnimation: true,     // reset animation on end (default is true)
            }
          );
          wow.init();
    }
    catch(e){
        console.log(e)
        
    }

}


function loaTestimonial() {
    tabcontent = document.getElementsByClassName("bloc-testimonial");
    for (i = 0; i <= tabcontent.length - 1; i++) {
        if(i == 0){
            console.log(tabcontent[i].id)
            openTestimonial({}, tabcontent[i].id)
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
    if(evt.currentTarget) evt.currentTarget.className += " active";
}

let menuIsOpened = false;
function openMenu(){
    const Mx = document.getElementsByClassName("bloc-menu");
    const m = Mx[0];

    const Bx = document.getElementsByClassName("center-top-button");
    const b = Bx[0];


    console.log(Mx, m)
    if(menuIsOpened){
        menuIsOpened = false;
        m.classList.add("menu-closed")
        m.classList.remove("menu-opened");
    }
    else{
        menuIsOpened = true;
        m.classList.add("menu-opened")
        m.classList.remove("menu-closed");
    }
}