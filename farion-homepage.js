let intro = gsap.timeline({defaults:{ease: Expo.easeOut}});
intro
  .from(".main-wrapper", {autoAlpha:0})
  .set(".homepage_link-image-small.first, .homepage_link-image-big.first", {xPercent: -130, scale: 1.5}, "<")
  .to(".homepage_link-image-small.first, .homepage_link-image-big.first", {xPercent: 0, scale: 1, duration: 3, stagger: 0.1}, "<")
  .from(".homepage_link-text, .homepage_subheading", {opacity:0, duration: 3, stagger: 0.1}, "<");


let studio = gsap.timeline({defaults:{ease: Expo.easeOut, duration: 3}, onComplete: () => {studio.restart();}});

studio.startTime(1);

studio
  .fromTo("#studio-2", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
  .fromTo("#studio-1", 
    {filter: "brightness(100%)", zIndex:2},
    {xPercent: 50, filter: "brightness(40%)"}, 
    "<")

  .fromTo("#studio-3", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
  .fromTo("#studio-2", 
    {filter: "brightness(100%)", zIndex:2},
    {xPercent: 50, filter: "brightness(40%)"}, 
    "<")

  .set("#studio-1", {zIndex:4, xPercent: -130, filter: "brightness(100%)", scale: 1.5})  
  .fromTo("#studio-1", {zIndex:4, xPercent: -130, scale: 1.5}, {zIndex:4, xPercent: 0, scale: 1, delay: 2})
  .fromTo("#studio-3", 
    {filter: "brightness(100%)", zIndex:2},
    {xPercent: 50, filter: "brightness(40%)"},
    "<");
      

  let kontakt = gsap.timeline({defaults:{ease: Expo.easeOut, duration: 3}, onComplete: () => {kontakt.restart();}});

  kontakt.startTime(2.15);
    
  kontakt
      .fromTo("#kontakt-2", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
      .fromTo("#kontakt-1", 
        {filter: "brightness(100%)", zIndex:2},
        {xPercent: 50, filter: "brightness(40%)"}, 
        "<")
    
      .fromTo("#kontakt-3", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
      .fromTo("#kontakt-2", 
        {filter: "brightness(100%)", zIndex:2},
        {xPercent: 50, filter: "brightness(40%)"}, 
        "<")
    
      .set("#kontakt-1", {zIndex:4, xPercent: -130, filter: "brightness(100%)", scale: 1.5})  
      .fromTo("#kontakt-1", {zIndex:4, xPercent: -130, scale: 1.5}, {zIndex:4, xPercent: 0, scale: 1, delay: 2})
      .fromTo("#kontakt-3", 
        {filter: "brightness(100%)", zIndex:2},
        {xPercent: 50, filter: "brightness(40%)"},
        "<");


let slad = gsap.timeline({defaults:{ease: Expo.easeOut, duration: 3}, onComplete: () => {slad.restart();}});

slad.startTime(3.3);     
                      
slad
    .fromTo("#slad-2", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#slad-1", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"}, 
      "<")            
                      
    .fromTo("#slad-3", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#slad-2", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"}, 
      "<")
                      
    .set("#slad-1", {zIndex:4, xPercent: -130, filter: "brightness(100%)", scale: 1.5})  
    .fromTo("#slad-1", {zIndex:4, xPercent: -130, scale: 1.5}, {zIndex:4, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#slad-3", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"},
      "<");    



  let archiwum = gsap.timeline({defaults:{ease: Expo.easeOut, duration: 3}, onComplete: () => {archiwum.restart();}});

  archiwum.startTime(4.45);
          
  archiwum
        .fromTo("#archiwum-2", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
        .fromTo("#archiwum-1", 
              {filter: "brightness(100%)", zIndex:2},
              {xPercent: 50, filter: "brightness(40%)"}, 
              "<")
          
        .fromTo("#archiwum-3", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
        .fromTo("#archiwum-2", 
              {filter: "brightness(100%)", zIndex:2},
              {xPercent: 50, filter: "brightness(40%)"}, 
              "<")
          
        .set("#archiwum-1", {zIndex:4, xPercent: -130, filter: "brightness(100%)", scale: 1.5})  
        .fromTo("#archiwum-1", {zIndex:4, xPercent: -130, scale: 1.5}, {zIndex:4, xPercent: 0, scale: 1, delay: 2})
        .fromTo("#archiwum-3", 
              {filter: "brightness(100%)", zIndex:2},
              {xPercent: 50, filter: "brightness(40%)"},
              "<");
            

let wstep = gsap.timeline({defaults:{ease: Expo.easeOut, duration: 4}, onComplete: () => {wstep.restart();}});

wstep.startTime(5.6);     
                      
wstep
    .fromTo("#wstep-2", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#wstep-1", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"}, 
      "<")            
                      
    .fromTo("#wstep-3", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#wstep-2", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"}, 
      "<")
                      
    .set("#wstep-1", {zIndex:4, xPercent: -130, filter: "brightness(100%)", scale: 1.5})  
    .fromTo("#wstep-1", {zIndex:4, xPercent: -130, scale: 1.5}, {zIndex:4, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#wstep-3", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"},
      "<");  


let zycie = gsap.timeline({defaults:{ease: Expo.easeOut, duration: 3}, onComplete: () => {zycie.restart();}});

zycie.startTime(6.75);     
                      
zycie
    .fromTo("#zycie-2", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#zycie-1", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"}, 
      "<")            
                      
    .fromTo("#zycie-3", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#zycie-2", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"}, 
      "<")
                      
    .set("#zycie-1", {zIndex:4, xPercent: -130, filter: "brightness(100%)", scale: 1.5})  
    .fromTo("#zycie-1", {zIndex:4, xPercent: -130, scale: 1.5}, {zIndex:4, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#zycie-3", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"},
      "<");    



let projekt = gsap.timeline({defaults:{ease: Expo.easeOut, duration: 3}, onComplete: () => {projekt.restart();}});

projekt.startTime(7.9);     
                      
projekt
    .fromTo("#projekt-2", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#projekt-1", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"}, 
      "<")            
                      
    .fromTo("#projekt-3", {zIndex:3, xPercent: -130, scale: 1.5}, {zIndex:3, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#projekt-2", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"}, 
      "<")
                      
    .set("#projekt-1", {zIndex:4, xPercent: -130, filter: "brightness(100%)", scale: 1.5})  
    .fromTo("#projekt-1", {zIndex:4, xPercent: -130, scale: 1.5}, {zIndex:4, xPercent: 0, scale: 1, delay: 2})
    .fromTo("#projekt-3", 
      {filter: "brightness(100%)", zIndex:2},
      {xPercent: 50, filter: "brightness(40%)"},
      "<");


// letters
gsap.from(".heading-style-h1_v2", {xPercent: -100, ease: Expo.easeInOut, duration: 4, stagger: 0.15});

let letters = gsap.timeline({defaults:{ease: Expo.easeInOut, duration: 4, stagger: 0.15}, repeat: -1});
letters.startTime(5.5); 
letters
  .to(".heading-style-h1_v2", {xPercent: 100}, ">1")
  .from(".heading-style-h1", {xPercent: -100}, "<0.75")
  .to(".heading-style-h1", {xPercent: 100}, ">1")
  .fromTo(".heading-style-h1_v2", {xPercent: -100}, {xPercent: 0}, "<0.75");


// menu open
$(".nav_button").on("click", function () {
	$(this).attr("aria-expanded","true");
  gsap.to(".nav-menu_cutter", {height: "100vh", ease: Expo.easeInOut, duration: 0.7, display: "block"});
});

// menu close
$(".nav-menu_close-button").on("click", function () {
	$(".nav_button").attr("aria-expanded","false");
  gsap.to(".nav-menu_cutter", {height: 0, ease: Expo.easeInOut, duration: 0.7, display: "none"});
});
const KEYCODES = {
  ESC: 27,
  TAB: 9,
  RETURN: 13
};

const btn = document.querySelector("#btn");
const modal = document.querySelector("#modal");
const focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const closers = document.querySelectorAll('[wb-data="close"]');
let previousActiveElement;

const openModal = (event) => {
  previousActiveElement = document.activeElement; // store the element used to open the modal for later.
  const focusableContent = modal.querySelectorAll(focusableElements);
  modal.classList.add("is-open");
  document.addEventListener("keydown", (e) => keyPressed(e, focusableContent));
  closers.forEach((closer) => {
    closer.addEventListener("click", closeModal);
  });
  focusableContent[0].focus();
};

const closeModal = () => {
  modal.classList.remove("is-open");
  closers.forEach((closer) => {
    closer.removeEventListener("click", closeModal);
  });
  document.removeEventListener("keydown", keyPressed);
  previousActiveElement.focus(); // return user focus to element used to open the modal
};

const keyPressed = (event, focusableContent) => {
  // Close modal on pressing escape
  if (event.keyCode === KEYCODES.ESC) {
    closeModal();
  }

  if (event.keyCode !== KEYCODES.TAB) {
    return;
  }

  // We know user has pressed tab key as this point.
  if (event.shiftKey) {
    // Go to last focusable element if focused on the first one
    if (document.activeElement === focusableContent[0]) {
      focusableContent[focusableContent.length - 1].focus();
      event.preventDefault();
    }
  } else {
    // Go to first focusable element if focused on the last one
    if (
      document.activeElement === focusableContent[focusableContent.length - 1]
    ) {
      focusableContent[0].focus();
      event.preventDefault();
    }
  }
};

btn.addEventListener("click", openModal);
