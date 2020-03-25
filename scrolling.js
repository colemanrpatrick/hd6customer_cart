

var _cart = document.getElementById("cart");
var _dateBloc = document.getElementById("date-bloc");
var _groupContainer = document.getElementById("group-container");
var _pricesWrapper = document.getElementById("prices-wrapper");
var _backToDate = document.getElementById("backToDate");
var _top = _cart.clientTop;
var _pricesContainer = document.getElementById("prices-container");

// var scrollTo = _dateBloc.clientHeight;



function scrollCart(where){
  _cart.style.transition = "0.3s";
  _cart.style.transform = "translateY(-" + where + "px)";
  //=== polyfill
  // if()
  // transform;
  // -moz-transform;
  // -ms-transform;
  // -o-transform;
  // -webkit-transform;
}
(function() {
  'use strict';
  scrollCart(0);
}());
//schedules_


$("#packages").on("click",function(){
  scrollCart(_dateBloc.clientHeight);

});
$(".optButton").on("click",function(){
  scrollCart(_groupContainer.clientHeight);
});
$("#backToDate").on("click",function(){
  scrollCart(0);
});
$('.returnToPackages').on("click",function(){
  scrollCart(_dateBloc.clientHeight);
});

$('.next').on("click",function(){
    scrollCart(_pricesContainer.clientHeight );
    idToggle("cart-bg","active");
    $(this).hide();
});

$("#sCBtn").on("click",function(){
    scrollCart(_groupContainer.clientHeight );
});


$("#close-cart").on("click",function(){
  $("#cart-window").scrollTop( 0 );
  _cart.scrollTop = 0;
  _cart.style.transform = "translateY(0)";
  idToggle("cart-bg","active");
  $('.next').show();
});



//optButton
//prices-wrapper
//#prices-wrapper
