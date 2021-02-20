$(window).on('scroll', function (){

    var elem = $('.js-section');
    var selectContent = "kv";
    var elemOffsetMax = 0;
    
    elem.each(function () {
    
      var elemOffset = $(this).offset().top;
      var content = $(this).attr("id");
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
      
      if(scrollPos > elemOffset - wh + (wh / 2) ){
          if (elemOffsetMax < elemOffset) {
            elemOffsetMax = elemOffset;
            selectContent = content;
          }
      }
    });
    $(".nav-active").removeClass("nav-active");
    $(`[nav=${selectContent}]`).addClass("nav-active");
});