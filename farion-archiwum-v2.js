var firstClick = true;

let filterOpen = gsap.timeline({defaults:{ease:"Expo.easeOut", duration: 1}});
let filterClose = gsap.timeline({defaults:{ease:"Expo.easeOut", duration: 0.7}});

$('#filter-button').click(function() {

     if(firstClick){
     	$(this).attr("aria-expanded","true")
      filterOpen.set(".filter-categories-wrapper", {display: "flex"})
      			.to(".full-width", {height: "auto"})
            .fromTo(".gsap-stagger", {yPercent:-15, opacity: 0}, {yPercent:0, opacity: 1, stagger:0.07}, "<")
            .to(".line-thin.filter", {width: "100%", backgroundColor: "#006aff"}, "<");
                
         firstClick = false;
     } else {
     	$(this).attr("aria-expanded","false")
      filterClose.to(".full-width", {height: 0})
        .fromTo(".gsap-stagger", {yPercent:0, opacity: 1}, {yPercent:-15, opacity: 0, stagger:{from: "end", each: 0.07}}, "<")
        .to(".line-thin.filter", {width: 150, backgroundColor: "#191919"}, "<+0.1")
        .to(".filter-categories-wrapper", {display: "none"});
        firstClick = true;
     }
});   


document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') {
    $('.lightbox-form_close-button, .fullscreen-story_close-button').click();
  }
});

$(".lightbox-form_close-button").on("click", function () { 
  gsap.to(".lightbox-form_cutter", {height: 0, ease: Expo.easeInOut, duration: 0.7, display: "none"});
}); 


gsap.registerPlugin(Flip);

$(".opis-icon").on("click", function () {
	lenis.stop();
  let popUp = $(this).siblings('.fullscreen-story_layer');
  let state = Flip.getState(this);
  popUp.addClass('visible');
  Flip.from(state, {
       targets: popUp.find('.fullscreen-story_outline'),
       duration: 1,
       fade: true,
       absolute: true,
       ease: "Expo.easeInOut"
  });
  $(this).removeClass("visible");
  $(this).addClass("invisible");
  gsap.fromTo(popUp.find(".fullscreen-story_backdrop"), 
       {opacity: 0}, 
       {opacity: 0.87, duration: 0.7, delay: 0.3});
  gsap.fromTo(popUp.find(".overflow-wrapper, p, .fullscreen-story_gradient-overlay"), 
       {opacity: 0},
       {opacity: 1, delay: 0.5});
  gsap.fromTo($(this).siblings('.fullscreen-story_layer').find(".fullscreen-story_close-button"), 
      {opacity: 0}, 
      {opacity: 1, delay: 0.5});
});


$(".fullscreen-story_close-button").on("click", function () {
	lenis.start();
  let popUp = $(this).closest('.fullscreen-story_layer');
  let state = Flip.getState(".opis-icon.invisible");

  $(".opis-icon.invisible").removeClass("invisible");
  $(".opis-icon").addClass("visible");
  Flip.to(state, {
       targets: popUp.find('.fullscreen-story_outline'),
       duration: 0.5,
       fade: true,
       absolute: true,
       ease: "Expo.easeInOut"
  });
  setTimeout(function() {
       popUp.removeClass("visible");
  }, 480);
  gsap.to(popUp.find(".fullscreen-story_backdrop"), {opacity: 0, duration: 0.5});
  gsap.to(popUp.find(".overflow-wrapper"), {opacity: 0, duration: 0.2});
  gsap.fromTo(popUp.find(".fullscreen-story_close-button, .fullscreen-story_gradient-overlay"), {opacity: 1}, {opacity: 0});
  gsap.to(popUp.find('.fullscreen-story_outline'), {clearProps: true});
});

	$('.lightbox-link').each(function(){
	var x = $(this).find('.hidden_data_value_class').text();
	$(this).attr('data-info',x);
});
// fancybox SETS CAPTION AND SRC OF MAIN IMAGE
$(".lightbox-link").each(function (index) {
  $(this).attr({
    "data-fancybox": "gallery",
    href: $(this).attr("src"),
    "data-thumb": $(this).attr("src")
  });
});


Fancybox.bind("[data-fancybox]", {
  groupAttr: null,
  click: false,
  Toolbar: {
    display: [
      {
        id: "counter",
        position: "center",
      },
      "zoom",
      "fullscreen",
      "close"
    ],
  },
  trapFocus: false,
  Thumbs: {
    autoStart: false
    },
  
  on: {
    
    initLayout: (fancybox) => {
      lenis.stop();

      const $leftCol = document.createElement("div");
      $leftCol.classList.add("fancybox__leftCol");

      while (fancybox.$container.firstChild) {
        $leftCol.appendChild(fancybox.$container.firstChild);
      }

      // Create right column
      const $rightCol = document.createElement("div");
      $rightCol.classList.add("fancybox__rightCol");

      $rightCol.innerHTML =
        '<p class="lightbox-form_text">Znasz historię tego zdjęcia?</p><button class="lightbox-button">Napisz do nas</button>';

      // Create info-box
      const $info = document.createElement("div");
      $rightCol.appendChild($info);
      fancybox.$info = $info;

      // Add elements to DOM
      fancybox.$container.appendChild(fancybox.$backdrop);

      fancybox.$container.appendChild($leftCol);
      fancybox.$container.appendChild($rightCol);

      fancybox.$leftCol = $leftCol;
      fancybox.$rightCol = $rightCol;

      $(".lightbox-button").on("click", function () {
        gsap.fromTo(".lightbox-form_cutter", 
          {height: "0vh", display: "none"},  
          {height: "100vh", ease: Expo.easeInOut, duration: 0.7, display: "block"});
      });
    },

    "Carousel.ready Carousel.change": (fancybox, carousel, slideIndex) => {
      // Update info-box
      // ===

      // Get index of the current gallery item
      slideIndex =
        slideIndex === undefined ? carousel.options.initialPage : slideIndex;

      // Get link related to current item
      const $trigger = fancybox.items[slideIndex].$trigger;

      // Get data from `data-info` attribute
      const data = $trigger.dataset.info || "";

      // Update info
      $('input[name="kod-zdjecia"]').val(data);
      
    },
    closing: (fancybox) => {
      lenis.start();
    },
  },
});

  
document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') {
    $('.lightbox-form_close-button').click();
    $(body).css('overflow','auto')
  }
});

$(".lightbox-form_close-button").on("click", function () { 
  gsap.to(".lightbox-form_cutter", {height: 0, ease: Expo.easeInOut, duration: 0.7, display: "none"});
}); 

$(".nav_button").on("click", function () {
	$(this).attr("aria-expanded","true");
  gsap.fromTo(".nav-menu_cutter", {height: "0vh"},{height: "100vh", ease: Expo.easeInOut, duration: 0.7, display: "flex"});
});

$(".nav-menu_close-button").on("click", function () {
	$(".nav_button").attr("aria-expanded","false");
  gsap.to(".nav-menu_cutter", {height: 0, ease: Expo.easeInOut, duration: 0.7, display: "none"});
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') {
    $('.nav-menu_close-button').click();
  }
});

//pagination for converted site
document.body.addEventListener('pagination-end', () => {
document.querySelector('.archiwum_collection-wrapper').scrollIntoView({behavior: "smooth", block: 'start'}); // to scroll to list start
// add cutom attributes to cms item
	$('.lightbox-link').each(function(){
	var x = $(this).find('.hidden_data_value_class').text();
	$(this).attr('data-info',x);
});
// fancybox SETS CAPTION AND SRC OF MAIN IMAGE
$(".lightbox-link").each(function (index) {
  $(this).attr({
    "data-fancybox": "gallery",
    href: $(this).attr("src"),
    "data-thumb": $(this).attr("src")
  });
});

Fancybox.bind("[data-fancybox]", {
  groupAttr: null,
  click: false,
  Toolbar: {
    display: [
      {
        id: "counter",
        position: "center",
      },
      "zoom",
      "fullscreen",
      "close"
    ],
  },
  trapFocus: false,
  Thumbs: {
    autoStart: false
    },
  
  on: {
    
    initLayout: (fancybox) => {
      lenis.stop();
      // Create elements
      // ===

      // Create left column
      const $leftCol = document.createElement("div");
      $leftCol.classList.add("fancybox__leftCol");

      while (fancybox.$container.firstChild) {
        $leftCol.appendChild(fancybox.$container.firstChild);
      }

      // Create right column
      const $rightCol = document.createElement("div");
      $rightCol.classList.add("fancybox__rightCol");

      $rightCol.innerHTML =
        '<p class="lightbox-form_text">Znasz historię tego zdjęcia?</p><button class="lightbox-button">Napisz do nas</button>';

      const $info = document.createElement("div");
      $rightCol.appendChild($info);
      fancybox.$info = $info;

      // Add elements to DOM
      fancybox.$container.appendChild(fancybox.$backdrop);

      fancybox.$container.appendChild($leftCol);
      fancybox.$container.appendChild($rightCol);

      fancybox.$leftCol = $leftCol;
      fancybox.$rightCol = $rightCol;

      $(".lightbox-button").on("click", function () {
        gsap.fromTo(".lightbox-form_cutter", 
          {height: "0vh", display: "none"},  
          {height: "100vh", ease: Expo.easeInOut, duration: 0.7, display: "block"});
      });
    },

    "Carousel.ready Carousel.change": (fancybox, carousel, slideIndex) => {

      slideIndex =
        slideIndex === undefined ? carousel.options.initialPage : slideIndex;

      const $trigger = fancybox.items[slideIndex].$trigger;

      // Get data from `data-info` attribute
      const data = $trigger.dataset.info || "";

      // Update info
      $('input[name="kod-zdjecia"]').val(data);
      
    },
    closing: (fancybox) => {
      lenis.start();
    },
  },
  });
  
  gsap.registerPlugin(Flip);

  $(".opis-icon").on("click", function () {
    lenis.stop();
    let popUp = $(this).siblings('.fullscreen-story_layer');
    let state = Flip.getState(this);
    popUp.addClass('visible');
    Flip.from(state, {
        targets: popUp.find('.fullscreen-story_outline'),
        duration: 1,
        fade: true,
        absolute: true,
        ease: "Expo.easeInOut"
    });
    $(this).removeClass("visible");
    $(this).addClass("invisible");
    gsap.fromTo(popUp.find(".fullscreen-story_backdrop"), 
        {opacity: 0}, 
        {opacity: 0.87, duration: 0.7, delay: 0.3});
    gsap.fromTo(popUp.find(".overflow-wrapper, p, .fullscreen-story_gradient-overlay"), 
        {opacity: 0},
        {opacity: 1, delay: 0.5});
    gsap.fromTo($(this).siblings('.fullscreen-story_layer').find(".fullscreen-story_close-button"), 
        {opacity: 0}, 
        {opacity: 1, delay: 0.5});
  });


  $(".fullscreen-story_close-button").on("click", function () {
    lenis.start();
    let popUp = $(this).closest('.fullscreen-story_layer');
    let state = Flip.getState(".opis-icon.invisible");

    $(".opis-icon.invisible").removeClass("invisible");
    $(".opis-icon").addClass("visible");
    Flip.to(state, {
        targets: popUp.find('.fullscreen-story_outline'),
        duration: 0.5,
        fade: true,
        absolute: true,
        ease: "Expo.easeInOut"
    });
    setTimeout(function() {
        popUp.removeClass("visible");
    }, 480);
    gsap.to(popUp.find(".fullscreen-story_backdrop"), {opacity: 0, duration: 0.5});
    gsap.to(popUp.find(".overflow-wrapper"), {opacity: 0, duration: 0.2});
    gsap.fromTo(popUp.find(".fullscreen-story_close-button, .fullscreen-story_gradient-overlay"), {opacity: 1}, {opacity: 0});
    gsap.to(popUp.find('.fullscreen-story_outline'), {clearProps: true});
  });
});

(function() {
  if( window.innerWidth > 991 ) {
    (function($) {
      $(function(){
        $('.pagination_button').on('click', function(e) {
          const href = this.href;
          const url = new URL(href);      
          
          if (window.location.origin === url.origin) {
            e.preventDefault();
    
            setTimeout(function() {
              window.location.href = href;
            }, 1100);
          }
        });
      });
    })(jQuery);
  }
  })();


$('.pagination_button').on('click', function() {
  lenis.scrollTo("#anchor", {easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2)})
});
