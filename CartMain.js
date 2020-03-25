// console.log("cart script ready");
//========================================================//
//========================| remove |======================//
//========================================================//

//========================================================//
//=================|Radio button styling|=================//
//========================================================//
// var $radioBtn = document.getElementsByName("updateProductOrder");
// var $parent;
// var $label;
// (function () {
//     for (var i = 0; i < $radioBtn.length; i++) {
//         $parent = document.getElementById("update-cart");
//         $div = document.createElement("div");
//         $div.setAttribute("class", "update-option");
//         $parent = $radioBtn[i].parentElement;
//         $parent.insertBefore($div, $radioBtn[i]);
//         $div.appendChild($radioBtn[i]);
//         $parent = $radioBtn[i].parentElement;
//         $label = document.createElement("label");
//         $label.setAttribute('class', 'update-label');
//         $parent.insertBefore($label, $radioBtn[i]);
//         $label = $radioBtn[i].previousElementSibling;
//         $label.setAttribute("for", $radioBtn[i].getAttribute("name"));
//     };
// }())
// function checkBoxChecked() {
//     for (var i = 0; i < $radioBtn.length; i++) {
//         //console.log("checked", this);
//         $radioBtn[i].previousElementSibling.className = "update-label";
//         if (this.checked === true) {
//             this.previousElementSibling.className = "update-label-active";
//         }
//     };
// };
// for (var i = 0; i < $radioBtn.length; i++) {
//     if ($radioBtn[i].checked === true) {
//         $radioBtn[i].previousElementSibling.className = "update-label-active";
//     } else {
//         $radioBtn[i].previousElementSibling.className = "update-label";
//     };
//     $radioBtn[i].addEventListener("change", checkBoxChecked);
// };
//====================================================================//
//=======================|number spinner styling|=====================//
//====================================================================//
// $('.numberSpinner').spinner();
// 'use strict';
// var numberSpinner = document.getElementsByClassName('numberSpinner');
// var indexNumber = 0;
// for (var i = 0; i < numberSpinner.length; i++) {
//    var $test = document.createElement('div');
//    numberSpinner[i].setAttribute('id', 'input' + indexNumber++);
//    var plusButton = document.createElement("BUTTON");
//    var minusButton = document.createElement("BUTTON");
//    plusButton.setAttribute("class", "numberPlus");
//    minusButton.setAttribute("class", "numberMinus");
//    plusButton.setAttribute("type", "button");
//    minusButton.setAttribute("type", "button");
//    plusButton.innerHTML = "<i class='material-icons'>add</i>";
//    minusButton.innerHTML = "<i class='material-icons'>remove</i>";
//    numberSpinner[i].parentElement.parentElement.insertBefore(minusButton, numberSpinner[i].parentElement);
//    numberSpinner[i].parentElement.parentElement.insertBefore(plusButton, numberSpinner[i].parentElement.nextElementSibling);
// }
// function numIncrement(inputObj, increase) {
//    var myInputObject = inputObj;
//    if (increase) {
//        myInputObject.value++;
//    } else {
//        myInputObject.value--;
//    }
//    if (myInputObject.value > 999) {
//        myInputObject.value = 999;
//    }
//    if (myInputObject.value <= 0) {
//        myInputObject.value = 0;
//    }
// };
// function buttonEvents() {
//    var numPlus = document.getElementsByClassName("numberPlus");
//    var numMinus = document.getElementsByClassName("numberMinus");
//    for (var i = 0; i < numPlus.length; i++) {
//        numPlus[i].onclick = (function () {
//            var buttonAssociation = this.previousElementSibling.children[0];
//            numIncrement(buttonAssociation, true);
//        })
//    };
//    for (var i = 0; i < numMinus.length; i++) {
//        numMinus[i].onclick = (function () {
//            var buttonAssociation = this.nextElementSibling.children[0];
//            numIncrement(buttonAssociation, false);
//        })
//    };
// };
// //buttonEvents();

//=============================================================================================//
//=======================/// reorganzing for the sake of demonstration ///====================//
//===========================================================================================//
//(function () {
//    var $cart = document.getElementById("cart-options");
//    var options = document.getElementsByClassName("product-option");
//    var optionGroupA;
//    var optionGroupB;
//    var optionGroupC;
//    var optionGroupD;
//    var optionName;

//    for (var i = 0; i < options.length; i++) {
//        optionName = options[i].querySelector('.p-desc').innerText;
//        if (optionName.indexOf("Alo") !== -1) {
//            options[i].classList += " Aloha-option";
//        }
//        else if (optionName.indexOf("Par") !== -1) {
//            options[i].classList += " paradise-option";
//        }
//        else if (optionName.indexOf("Roy") !== -1) {
//            options[i].classList += " Royal-option";
//        }
//        else {
//            options[i].classList += " misc-option";
//        }
//    }

//    optionGroupA = document.createElement("div");
//    optionGroupA.setAttribute("id", "optionGroupA");
//    optionGroupA.setAttribute("class", "groupOption");

//    optionGroupB = document.createElement("div");
//    optionGroupB.setAttribute("id", "optionGroupB");
//    optionGroupB.setAttribute("class", "groupOption");

//    optionGroupC = document.createElement("div");
//    optionGroupC.setAttribute("id", "optionGroupC");
//    optionGroupC.setAttribute("class", "groupOption");

//    optionGroupD = document.createElement("div");
//    optionGroupD.setAttribute("id", "optionGroupD");


//    Array.prototype.forEach.call(document.querySelectorAll(".Aloha-option"), function (e) {
//        optionGroupA.appendChild(e);
//    });
//    Array.prototype.forEach.call(document.querySelectorAll(".paradise-option"), function (e) {
//        optionGroupB.appendChild(e);
//    });
//    Array.prototype.forEach.call(document.querySelectorAll(".Royal-option"), function (e) {
//        optionGroupC.appendChild(e);
//    });
//    Array.prototype.forEach.call(document.querySelectorAll(".misc-option"), function (e) {
//        optionGroupD.appendChild(e);
//    });

//    $cart.appendChild(optionGroupA);
//    $cart.appendChild(optionGroupB);
//    $cart.appendChild(optionGroupC);
//    $cart.appendChild(optionGroupD);

//    var _eL = (function () {
//        'use strict';
//        if ("ontouchstart" in document.documentElement === true) {
//            return "touchstart"
//        } else {
//            return "click";
//        }
//    }());

//})();

/*================ toggle options ====================*/
//function toggleA() {
//   pageToggle('1', 'groupOption');
//};
//function toggleB() {
//   pageToggle('2', 'groupOption');
//};
//function toggleC() {
//console.log("clicked");
//   pageToggle('3', 'groupOption');
//};
