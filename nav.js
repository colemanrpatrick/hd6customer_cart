var btn = document.getElementsByClassName("mobile-drop-down");
var i;
//(function () {
//  'use strict';
//  for (var i = 0; i < btn.length; i++) {
//      btn[i].nextElementSibling.style.maxHeight = 0;
//  }
//}());
if (matchMedia) {
    const mediaQ = window.matchMedia("(max-width:1000px)");
    mediaQ.addListener(mediaChange);
    mediaChange(mediaQ);
}
function mediaChange(mediaQ) {
    for (var i = 0; i < btn.length; i++) {
        if (mediaQ.matches) {
            btn[i].nextElementSibling.style.maxHeight = 0;
        } else {
            btn[i].nextElementSibling.style.maxHeight = "initial";
        }
    }
}
for (var i = 0; i < btn.length; i++) {

  btn[i].addEventListener("click",function(){
      toggleThis(this, "active");
      var childNav = this.nextElementSibling;
      var childNavClass = document.getElementsByClassName("" + childNav.className + "");
      //console.log(childNavClass);
      for (var i = 0; i < childNavClass.length; i++) {
          childNavClass[i].style.maxHeight = "0";
      }
      if (this.classList.contains("active")) {
        btn[i].className = "mobile-drop-down";
        childNav.style.maxHeight = childNav.scrollHeight + "px";
      } else {
         childNav.style.maxHeight = childNav.scrollHeight + "0";
      }
  });
}
//============================================================================================================================//
var $eventListener = (function () {
    'use strict';
    if ("ontouchstart" in document.documentElement === true) {
        return "touchstart"
    } else {
        return "click";
    }
}());
//============================================================================================================================//
var navMain = document.getElementById("main-nav");
var navBtn = document.getElementById("menu-btn");
////console.log(settings.offsetWidth);
document.addEventListener($eventListener, function (event) {
    if (!navMain.contains(event.target) && !visible(navMain)) {
        navMain.className = "main-nav";
        navBtn.className = "menu-btn";
    }
})
function visible(elem) {
    return elem && (elem.offsetWidth === 0);
};
//============================================================================================================================//
