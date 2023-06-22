gsap.registerPlugin(ScrollTrigger);


gsap.to(".video", {
  scale: 3.34,
  easy: "easy-in",
  y: 1000,
  scrollTrigger: {
    trigger: ".video",
    start: "850px 1200px",
    end: "1200px 0px",
    scrub: true,
  }
});
gsap.to("h1", {
  scale: -2,
  easy: "easy-in",
  x: -2500,
  scrollTrigger: {
    trigger: ".video",
    start: "850px 1200px",
    end: "1200px 0px",
    scrub: true,
  }
});
$(document).ready(function(){
  $(".strelka").mouseenter(function(){
    $(".strelka").addClass("none");
    $(".strelkagif").removeClass("none");
  });
  $(".zagugulya").mouseenter(function(){
    $(".zagugulya").addClass("none");
    $(".zagugulyagif").removeClass("none");
  });
});
$(".menu1").mouseover(function () {
      $(".kruggif").removeClass("none");
  });
$(".menu1").mouseleave(function () {
  $(".kruggif").addClass("none");
  });
  $(".menu2").mouseover(function () {
        $(".kruggif2").removeClass("none");
    });
  $(".menu2").mouseleave(function () {
    $(".kruggif2").addClass("none");
    });
    $(".menu3").mouseover(function () {
          $(".kruggif3").removeClass("none");
      });
    $(".menu3").mouseleave(function () {
      $(".kruggif3").addClass("none");
      });
      $(".menu4").mouseover(function () {
            $(".kruggif4").removeClass("none");
        });
      $(".menu4").mouseleave(function () {
        $(".kruggif4").addClass("none");
        });
        $(".menu5").mouseover(function () {
              $(".kruggif5").removeClass("none");
          });
        $(".menu5").mouseleave(function () {
          $(".kruggif5").addClass("none");
          });
