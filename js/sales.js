gsap.registerPlugin(ScrollTrigger);


gsap.to("h303", {
  rotation: -15,
  easy: "easy-in",
  scrollTrigger: {
    trigger: "h303",
    start: "350px 1000px",
    end: "400px 0px",
    scrub: true,
  }
});
gsap.to("h306", {
  rotation: 15,
  easy: "easy-in",
  scrollTrigger: {
    trigger: "h306",
    start: "350px 1000px",
    end: "400px 0px",
    scrub: true,
  }
});
gsap.to("h307", {
  rotation: 10,
  easy: "easy-in",
  scrollTrigger: {
    trigger: "h307",
    start: "350px 1000px",
    end: "400px 0px",
    scrub: true,
  }
});
gsap.to(".bottle1", {
  rotation: 25,
  easy: "easy-in",
  scrollTrigger: {
    trigger: ".bottle1",
    start: "350px 1000px",
    end: "400px 0px",
    scrub: true,
  }
});
gsap.to(".bottle2", {
  rotation: -25,
  easy: "easy-in",
  scrollTrigger: {
    trigger: ".bottle2",
    start: "350px 1000px",
    end: "400px 0px",
    scrub: true,
  }
});
gsap.to("h309", {
  rotation: 15,
  easy: "easy-in",
  scrollTrigger: {
    trigger: "h309",
    start: "350px 1000px",
    end: "400px 0px",
    scrub: true,
  }
});
gsap.to("h313", {
  rotation: -15,
  easy: "easy-in",
  scrollTrigger: {
    trigger: "h313",
    start: "350px 1000px",
    end: "400px 0px",
    scrub: true,
  }
});
gsap.to(".bottle3", {
  rotation: 25,
  easy: "easy-in",
  scrollTrigger: {
    trigger: ".bottle3",
    start: "350px 1000px",
    end: "400px 0px",
    scrub: true,
  }
});
gsap.to("h316", {
  rotation: -15,
  easy: "easy-in",
  scrollTrigger: {
    trigger: "h316",
    start: "350px 1000px",
    end: "400px 0px",
    scrub: true,
  }
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
