$(document).ready(function(){
  $(".plusfloor1").mouseover(function () {
      $(".plusfloor1.pluscontainerfloors").animate({ width: "18vw" }, "slow");
      $(".plusfloor1 p").animate({ opacity: "1" }, "slow");
    });
  });
  $(".plusfloor1").mouseleave(function () {
      $(".plusfloor1.pluscontainerfloors").animate({ width: "4vw" }, "slow");
      $(".plusfloor1 p").animate({ opacity: "0" }, "slow");
    });
  $(".plusfloor2").mouseover(function () {
      $(".plusfloor2.pluscontainerfloors").animate({ width: "19vw" }, "slow");
      $(".plusfloor2 p").animate({ opacity: "1" }, "slow");
    });
  $(".plusfloor2").mouseleave(function () {
      $(".plusfloor2.pluscontainerfloors").animate({ width: "4vw" }, "slow");
      $(".plusfloor2 p").animate({ opacity: "0" }, "slow");
    });
  $(".plusfloor3").mouseover(function () {
      $(".plusfloor3.pluscontainerfloors").animate({ width: "17vw" }, "slow");
      $(".plusfloor3 p").animate({ opacity: "1" }, "slow");
    });
  $(".plusfloor3").mouseleave(function () {
      $(".plusfloor3.pluscontainerfloors").animate({ width: "4vw" }, "slow");
      $(".plusfloor3 p").animate({ opacity: "0" }, "slow");
    });
  $(".plusfloor4").mouseover(function () {
      $(".plusfloor4.pluscontainerfloors").animate({ width: "17vw" }, "slow");
      $(".plusfloor4 p").animate({ opacity: "1" }, "slow");
    });
  $(".plusfloor4").mouseleave(function () {
      $(".plusfloor4.pluscontainerfloors").animate({ width: "4vw" }, "slow");
      $(".plusfloor4 p").animate({ opacity: "0" }, "slow");
    });
    $(".plusfloor5").mouseover(function () {
        $(".plusfloor5.pluscontainerfloors").animate({ width: "17vw" }, "slow");
        $(".plusfloor5 p").animate({ opacity: "1" }, "slow");
      });
    $(".plusfloor5").mouseleave(function () {
        $(".plusfloor5.pluscontainerfloors").animate({ width: "4vw" }, "slow");
        $(".plusfloor5 p").animate({ opacity: "0" }, "slow");
      });
      $(".plusfloor6").mouseover(function () {
          $(".plusfloor6.pluscontainerfloors").animate({ width: "12vw" }, "slow");
          $(".plusfloor6 p").animate({ opacity: "1" }, "slow");
        });
      $(".plusfloor6").mouseleave(function () {
          $(".plusfloor6.pluscontainerfloors").animate({ width: "4vw" }, "slow");
          $(".plusfloor6 p").animate({ opacity: "0" }, "slow");
        });
      $(".zdanie").tilt({
        reset: false
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
