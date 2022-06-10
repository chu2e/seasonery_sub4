/*header-nav-sub*/

$(function(){
  $(".nav>li:nth-child(1)").mouseenter(function(){
    $(".sub1").stop().slideDown(300);
  });
  $(".nav>li:nth-child(1)").mouseleave(function(){
    $(".sub1").stop().slideUp(300);
  });
});
$(function(){
  $(".nav>li:nth-child(2)").mouseenter(function(){
    $(".sub2").stop().slideDown(300);
  });
  $(".nav>li:nth-child(2)").mouseleave(function(){
    $(".sub2").stop().slideUp(300);
  });
});


/*header-menubar*/

$(function(){
  $(".menu").mouseenter(function(){
    $(".menubar_sub").stop().slideDown(300);
  });
  $(".menu").mouseleave(function(){
    $(".menubar_sub").stop().slideUp(300);
  });
});


/*con1 장바구니 아이콘 hover*/

$(function(){
  $(".con1_product li:nth-child(1) .con1_cart").mouseenter(function(){
    $(".con1_product li:nth-child(1) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $(".con1_product li:nth-child(1) .con1_cart").mouseleave(function(){
    $(".con1_product li:nth-child(1) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});

$(function(){
  $(".con1_product li:nth-child(2) .con1_cart").mouseenter(function(){
    $(".con1_product li:nth-child(2) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $(".con1_product li:nth-child(2) .con1_cart").mouseleave(function(){
    $(".con1_product li:nth-child(2) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});

$(function(){
  $(".con1_product li:nth-child(3) .con1_cart").mouseenter(function(){
    $(".con1_product li:nth-child(3) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $(".con1_product li:nth-child(3) .con1_cart").mouseleave(function(){
    $(".con1_product li:nth-child(3) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});


/*con2,con3 장바구니 아이콘 hover*/

$(function(){
  $("#con2_wrap2 li:nth-child(1) .con1_cart").mouseenter(function(){
    $("#con2_wrap2 li:nth-child(1) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $("#con2_wrap2 li:nth-child(1) .con1_cart").mouseleave(function(){
    $("#con2_wrap2 li:nth-child(1) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});

$(function(){
  $("#con2_wrap2 li:nth-child(2) .con1_cart").mouseenter(function(){
    $("#con2_wrap2 li:nth-child(2) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $("#con2_wrap2 li:nth-child(2) .con1_cart").mouseleave(function(){
    $("#con2_wrap2 li:nth-child(2) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});

$(function(){
  $("#con2_wrap2 li:nth-child(3) .con1_cart").mouseenter(function(){
    $("#con2_wrap2 li:nth-child(3) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $("#con2_wrap2 li:nth-child(3) .con1_cart").mouseleave(function(){
    $("#con2_wrap2 li:nth-child(3) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});

$(function(){
  $("#con2_wrap2 li:nth-child(4) .con1_cart").mouseenter(function(){
    $("#con2_wrap2 li:nth-child(4) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $("#con2_wrap2 li:nth-child(4) .con1_cart").mouseleave(function(){
    $("#con2_wrap2 li:nth-child(4) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});


$(function(){
  AOS.init({
    duration: 1200
  });
});