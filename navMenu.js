console.log("navMenu.js Ready");
/*========*/
/* ======= accordion menu script ========== */
/*========*/
//var parentItem = document.getElementsByClassName("parent-item"),
//    accList = document.getElementsByClassName("child-list");
/*========*/
/* ===== toggle between hover and click functionality ======= */
/*========*/
//if (matchMedia) {
//    const mediaQ = window.matchMedia("(max-width:800px)");
//    mediaQ.addListener(mediaChange);
//    mediaChange(mediaQ);
//}
//function mediaChange(mediaQ) {
//    for (var idx = 0; idx < accList.length; idx++) {
//        if (mediaQ.matches) {
//            navHide();
//            for (var i = 0; i < parentItem.length; i++) {
//                parentItem[i].addEventListener("click", toggleList, false)
//            }
//            // console.log(document.body.clientWidth, "less than 800px")
//            accList[idx].setAttribute("style", "display:none")
//        } else {
//            // console.log(document.body.clientWidth, "more than 800px")
//            accList[idx].setAttribute("style", "");
//        }
//    }
//}
/*===== outside closing ====*/
//function navHide() {
//    var navMain = document.getElementById("nav-main"),
//    mainList = document.getElementsByClassName("main-list")[0];
//    document.addEventListener("click", function checkTarget(e) {
//        //var innerTarget = navMain.contains(e.target);

//        if (e.target !== navMain && !navMain.contains(e.target)) {
//            console.log("outside");
//            mainList.style.display = "none";
//        } else {

//            console.log("inside");
//        }
//    });
//}
/*========*/
/* ===== toggleList fucntion ======= */
/*========*/
//function toggleList() {
//    // console.log("clicked", this);
//    /*=== ie9 polyfil ===*/
//    if (this.classList) {
//        this.classList.toggle("active");
//    } else {
//        var polyClass = this.className.split(" ");
//        var idx = polyClass.indexOf("active");
//        if (i >= 0) {
//            polyClass.splice(i, 1);
//        } else {
//            polyClass.push("active");
//            this.className = polyClass.join(" ");
//        }
//    }
//    /*==*/
//    var accList = this.nextElementSibling;

//    if (accList.style.display === "none") {
//        accList.style.display = "block";
//    } else {
//        accList.style.display = "none"
//        accList.style.background = "rgb(111, 155, 60)"
//    }
//}
/*========*/

/*========*/
/* ======== scrolling ======*/
/*========*/
/*========*/
var scrollBtn = document.getElementsByClassName("scrollTop")[0];

scrollBtn.addEventListener("click", scroll, false);

function scroll() {
    window.scrollTo(0, 0);
}
/*========*/
/*========*/