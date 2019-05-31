$(document).ready(function(){
    init();
})

/**
 * init初始化方法
 */
function init(){
    watchScroll();
    bannerMouseenter();
}

/**
 * 监听滚轮事件，改变nav位置
 */
function watchScroll(){
    $(document).scroll(function(){
        var scroH = $(document).scrollTop();  //滚动高度
        var viewH = $(window).height();  //可见高度 
        var contentH = $(document).height();  //内容高度
        if(scroH>45){
            $('nav').addClass('navbar-fixed-top')
        }
        if(scroH<45){
            $('nav').removeClass('navbar-fixed-top')
        }
        console.log(scroH);
        console.log(viewH);
        console.log(contentH);
    })
}

/**
 * banner mouseenter事件
 */

 function bannerMouseenter(){
    $(".bg").mouseenter(function() {
        var thisPX = $(this).offset().left;
        var thisPY = $(this).offset().top;
        var boxWidth = $(this).outerWidth();
        var boxHeight = $(this).outerHeight();
        $(this).addClass("threeD");
        $(".threeD").mousemove(function(event) {
          var mouseX = event.pageX - thisPX;
          var mouseY = event.pageY - thisPY;
          var X;
          var Y;
          if (mouseX > boxWidth / 2) {
            X = mouseX - boxWidth/2;
          } else {
            X = mouseX - boxWidth/2;
          }
          if (mouseY > boxHeight / 2) {
            Y = boxHeight/2 - mouseY;
          } else {
            Y = boxHeight/2 - mouseY;
          }
          $(".threeD").css({
            "-webkit-transform": "rotateY(" + X / 300 + "deg) " + "rotateX(" + Y / 3000 + "deg)"
          });
          
          // console.log(X + "," + Y);
        });
      });
      $(".bg").mouseleave(function() {
        $(this).removeClass("threeD");
        $(this).css({
          "-webkit-transform": "rotateY(0deg) rotateX(0deg)"
        });
      });
 }

 function pageScroll(){
    $("html,body").animate({"scrollTop":'0px'},300)
 }


 $("#bar .hover").hover(function(){
    $(this).find('.code').show();
 },function(){
    $(this).find('.code').hide();
 })

 function openGongzhonghao() {
     alert("功能还在开发中");
 }

 function openXiaochengxu() {
    alert("功能还在开发中");
}

function openTaobao() {
    alert("功能还在开发中");
}