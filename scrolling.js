
var _cartWindow = document.getElementById("cartWindow");
var _cart = document.getElementById("cart");
var _dateBloc = document.getElementById("date-bloc");
var _groupContainer = document.getElementById("group-container");
var _pricesWrapper = document.getElementById("prices-wrapper");
var _backToDate = document.getElementById("backToDate");
var _schedules = document.getElementById("schedules-collectors");
var _top = _cart.clientTop;
var _pricesContainer = document.getElementById("prices-container");
//src: https://stackoverflow.com/a/11634823
//======= defines offset element =======//
function scrollOffset(arg){
  var el = arg;
  console.log("element to return offset" , el);
  var elPosition = el.offset();
  var elParentPosition = el.parent().offset();
  var elOffset = {
    top: elPosition.top - elParentPosition.top,
  }
  return elOffset.top;
}
//======== element passed and scrolls cart =====//
function scrollCart(whereArg){
  _cart.style.transition = "0.3s";
  console.log("scroll Cart where argument" , whereArg);
  var where = $(whereArg);
  console.log("scroll Cart where element", where);
  _cart.style.transition = "0.3s";
  _cart.style.transform = "translateY(-" + scrollOffset(where)+ "px)";
}
//========== scrolls cart top the top ==========//
(function() {
  'use strict';
  scrollCart('#date-bloc');
}());
//================== check if functionality is in the modal =========================//
function checkForModal(){
  if($("#cart-bg").hasClass('active')){
    return true;
  }else{
    return false;
  }
}
//===================================================//
$("#packages").on("click",function(){
  var x = checkForModal();
  if(x === true){
    $("#cart-window").scrollTop(scrollOffset($("#group-container")));
  }else{
    console.log(x);
    scrollCart("#group-container");
  }
});
//===================================================//
$("#backToDate").on("click",function(){
  var y = checkForModal();
  if(y === true){
    $("#cart-window").scrollTop(scrollOffset($("#date-bloc")));
  }else{
    console.log(y);
    scrollCart("#date-bloc");
  }
});
//===================================================//
$(".optButton").on("click",function(){
  var z = checkForModal();
  if(z === true){
    $("#cart-window").scrollTop(scrollOffset($("#prices-wrapper")));
  }else{
    console.log(z);
    scrollCart("#prices-wrapper");
  }
});
//===================================================//
// $('.returnToPackages').on("click",function(){
//   var x = checkForModal();
//   if(x === true){
//     var obj = $("#group-container");
//     $("#cart-window").scrollTop(scrollOffset(obj));
//   }else{
//     scrollCart(obj);
//   }
// });
//


$('.returnToPackages').on("click",function(){
  var zx = checkForModal();
  if(zx === true){
    $("#cart-window").scrollTop(scrollOffset($("#group-container")));
  }else{
    console.log(zx);
    scrollCart("#group-container");
  }
});
//===================================================//
$("#sCBtn").on("click",function(){
  var x = checkForModal();
  if(x === true){
    var obj = $("#prices-wrapper");
    $("#cart-window").scrollTop(scrollOffset(obj));
  }else{
    scrollCart(obj);
  }
});
//===================================================//
//toggle popup cart
// $('.next').on("click",function(event){
//     $(this).hide();
// });
$(document).ready(function(){
    $("#book-now-button").show();
    $("#next").hide();
});
$(".book-package-now").on("click",function(){
  _cart.style.transform = "translateY(0)";
  idToggle("cart-bg","active");
  var obj = $("#date-bloc");
  $("#cart-window").scrollTop(scrollOffset(obj));
  //=================//
  $("#next").show();
  $("#book-now-button").hide();
});
$("#book-now-button").on("click",function(){
    // scrollCart(_pricesContainer.clientHeight );
    _cart.style.transform = "translateY(0)";
    idToggle("cart-bg","active");
    var obj = $("#schedules-collectors");
    $("#cart-window").scrollTop(scrollOffset(obj));
    //=================//
    $("#next").show();
    $(this).hide();
});
$("#next").on("click",function(){
  var obj = $("#schedules-collectors");
  $("#cart-window").scrollTop(scrollOffset(obj));
});
//===================================================//
$("#close-cart").on("click",function(){
    closeCart();
});
function closeCart(){
  $("#cart-window").scrollTop( 0 );
  idToggle("cart-bg","active");
  $("#book-now-button").show();
  $("#next").hide();
  _cart.style.transform = "translateY(0)";
}
//===================================================//
var innerCart = document.getElementById("cart-window");
var outerCart = document.getElementById("cart-bg");
////console.log(settings.offsetWidth);
document.addEventListener($eventListener, function (event) {
    if(outerCart.getAttribute("class") === " active"){
      console.log("check 1")
      if (!innerCart.contains(event.target) && visible(innerCart) && event.target.className !== 'bookNow' && event.target.className !== 'book-package-now' ) {
        closeCart();
      }else{
        console.log("no check 2", visible(innerCart));
      }
    }

})
function visible(elem) {
    return elem && (elem.style.position !== 'fixed');
};
$(window).resize(function(){
  _cart.style.transform = "translateY(0)";
})
//===================================================//
//schedules_
// $("#packages").on("click",function(){
//   scrollCart(_dateBloc.clientHeight);
// });

// $("#bookNow").on("click",function(){
//   scrollCart(_pricesContainer.clientHeight );
//   idToggle("cart-bg","active");
//   $(this).hide();
// });
// (function() {
//   'use strict';
//   // _cartWindow.scrollTop(0);
//   // _cart.scrollTop(0);
//   scrollCart('#date-bloc');
// }());
//======= figure this out =========//
//toggle popup cart
// $('#next').on("click",function(event){
//     var obj = $("#schedules-collectors");
//     $("#cart-window").scrollTop(scrollOffset(obj));
// });
// //===================================================//
// $("#bookNow").on("click",function(){
//   _cart.style.transform = "translateY(0)";
//   idToggle("cart-bg","active");
//   var obj = $("#date-bloc");
//   $("#cart-window").scrollTop(scrollOffset(obj));
// })
// //===================================================//
// $("#book-now").on("click",function(){
//   console.log("clicked");
//   _cart.style.transform = "translateY(0)";
//   idToggle("cart-bg","active");
//   var obj = $("#schedules-collectors");
//   $("#cart-window").scrollTop(scrollOffset(obj));
// })
// //===================================================//
// function toggleBookNow(){
//   var y = checkForModal();
//   if(y === true){
//     $("#book-now").hide();
//     $("#next").show();
//   }else{
//     $("#book-now").show();
//     $("#next").hide();
//   }
// }
//
// (function() {
//   'use strict';
//   toggleBookNow();
// }());
//
// //===================================================//
