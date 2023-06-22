gsap.registerPlugin(ScrollTrigger);


gsap.to(".bottle", {
  rotation: 45,
  easy: "easy-in",
  y: 500,
  scrollTrigger: {
    trigger: ".bottle",
    start: "350px 500px",
    end: "400px 0px",
    scrub: true,

  }
});
gsap.to(".star10", {
  rotation: 30,
  easy: "easy-in",
  y: 150,
  x: 100,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star0",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star11", {
  rotation: -60,
  easy: "easy-in",
  y: 280,
  x: -100,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star0",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star12", {
  rotation:  40,
  easy: "easy-in",
  y: 380,
  x: 50,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star0",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star0", {
  rotation: 90,
  easy: "easy-in",
  y: 550,
  x: 20,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star0",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star1", {
  rotation: 90,
  easy: "easy-in",
  y: 500,
  x: 90,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star1",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star2", {
  rotation: -90,
  easy: "easy-in",
  y: 500,
  x: -50,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star2",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star3", {
  rotation: 90,
  easy: "easy-in",
  y: 520,
  x: 200,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star3",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star4", {
  rotation: -90,
  easy: "easy-in",
  y: 520,
  x: -150,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star4",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star5", {
  rotation: 90,
  easy: "easy-in",
  y: 620,
  x: 180,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star5",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star6", {
  rotation: -90,
  easy: "easy-in",
  y: 620,
  x: -140,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star6",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star7", {
  rotation: 90,
  easy: "easy-in",
  y: 710,
  x: 130,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star7",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star8", {
  rotation: -90,
  easy: "easy-in",
  y: 710,
  x: -90,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star8",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
gsap.to(".star9", {
  rotation: 90,
  easy: "easy-in",
  y: 780,
  x: 20,
  opacity: 100,
  scrollTrigger: {
    trigger: ".star0",
    start: "350px 500px",
    end: "100px 0px",
    scrub: true,

  }
});
$(document).ready(function(){

 $(".z1").mouseenter(function(){
   $(".z1").addClass("none");
   $(".z1gif").removeClass("none");
 });
  });
  $(".z2").mouseenter(function(){
   $(".z2").addClass("none");
   $(".z2gif").removeClass("none");
});
