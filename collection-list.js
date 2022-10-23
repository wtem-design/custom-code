<script>
gsap.registerPlugin(Flip);


// open pop up
$(".opis-icon").on("click", function () {
     let state = Flip.getState(this);
     $(this).siblings('.fullscreen-story_layer').addClass('visible');
     Flip.from(state, {
          targets: $(this).siblings('.fullscreen-story_layer').find('.fullscreen-story_outline'),
          duration: 1,
          fade: true,
          absolute: true,
          ease: "Expo.easeInOut"
     });
     $(this).removeClass("visible");
     gsap.fromTo($(this).siblings('.fullscreen-story_layer').find(".fullscreen-story_backdrop"), 
          {opacity: 0}, 
          {opacity: 0.87, duration: 0.7, delay: 0.3});
     gsap.fromTo($(this).siblings('.fullscreen-story_layer').find(".overflow-wrapper"), 
          {opacity: 0},
          {opacity: 1, delay: 0.7});
});

//close pop up
$(".fullscreen-story_close-button").on("click", function () {
     let state = Flip.getState($(this).closest(".opis-icon_wrapper").find(".opis-icon"));
     $(".opis-icon").addClass("visible");
     Flip.to(state, {
          targets: $(this).closest('.fullscreen-story_layer').find('.fullscreen-story_outline'),
          duration: 0.5,
          fade: true,
          absolute: true,
          ease: "Expo.easeInOut"
     });
     setTimeout(function() {
          $(".fullscreen-story_layer").removeClass("visible");
     }, 500);
     gsap.to($(this).closest('.fullscreen-story_layer').find(".fullscreen-story_backdrop"), {opacity: 0, duration: 0.5});
     gsap.to($(this).closest('.fullscreen-story_layer').find(".overflow-wrapper"), {opacity: 0, duration: 0.2});
     gsap.to($(this).closest('.fullscreen-story_layer').find('.fullscreen-story_outline'), {clearProps: true});
});
</script>