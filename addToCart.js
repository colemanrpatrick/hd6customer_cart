var vActivityDate_1991 = ["03/24/2020", "03/31/2020", "04/07/2020", "04/14/2020", "04/21/2020", "04/28/2020", "05/05/2020", "05/12/2020", "05/19/2020", "05/26/2020", "06/02/2020", "06/09/2020", "06/16/2020", "06/23/2020", "06/30/2020", "07/07/2020", "07/14/2020", "07/21/2020", "07/28/2020", "08/04/2020", "08/11/2020", "08/18/2020", "08/25/2020", "09/01/2020", "09/08/2020", "09/15/2020", "09/22/2020", "09/29/2020", "10/06/2020", "10/13/2020", "10/20/2020", "10/27/2020", "11/03/2020", "11/10/2020", "11/17/2020", "11/24/2020", "12/01/2020", "12/08/2020", "12/15/2020", "12/22/2020", "12/29/2020", "01/05/2021", "01/12/2021", "01/19/2021", "01/26/2021", "02/02/2021", "02/09/2021", "02/16/2021", "02/23/2021", "03/02/2021", "03/09/2021", "03/16/2021", "03/21/2020", "03/28/2020", "04/04/2020", "04/11/2020", "04/18/2020", "04/25/2020", "05/02/2020", "05/09/2020", "05/16/2020", "05/23/2020", "05/30/2020", "06/06/2020", "06/13/2020", "06/20/2020", "06/27/2020", "07/04/2020", "07/11/2020", "07/18/2020", "07/25/2020", "08/01/2020", "08/08/2020", "08/15/2020", "08/22/2020", "08/29/2020", "09/05/2020", "09/12/2020", "09/19/2020", "09/26/2020", "10/03/2020", "10/10/2020", "10/17/2020", "10/24/2020", "10/31/2020", "11/07/2020", "11/14/2020", "11/21/2020", "11/28/2020", "12/05/2020", "12/12/2020", "12/19/2020", "12/26/2020", "01/02/2021", "01/09/2021", "01/16/2021", "01/23/2021", "01/30/2021", "02/06/2021", "02/13/2021", "02/20/2021", "02/27/2021", "03/06/2021", "03/13/2021", "03/20/2021", "06/09/2019", "10/31/2019"];
$(function() {
  $('#datepicker').datepicker({
    beforeShowDay: function(date) {
      var string = jQuery.datepicker.formatDate('mm/dd/yy', date);
      return [vActivityDate_1991.indexOf(string) == -1]
    }
  });
  // $('.ui-icon-circle-triangle-e').html("<span class="material-icons">arrow_forward_ios<\/span>");
  // $('.ui-icon-circle-triangle-w').html("<span class='material-icons'>chevron_left<\/span>");
});
$("#datepicker").on("change", function() {
  // //console.log($(this).val());
  var pickerValue = $("#datepicker").val();
  $("#test-input").val(pickerValue);

})
// $('.ui-icon-circle-triangle-e').html("TEST W");
/*radio buttons*/
var $radioBtn = document.getElementsByName("updateProductOrder");
var $parent;
var $label;
(function() {
  for (var i = 0; i < $radioBtn.length; i++) {
    $parent = document.getElementById("update-cart");
    $div = document.createElement("div");
    $div.setAttribute("class", "update-option");
    $parent = $radioBtn[i].parentElement;
    $parent.insertBefore($div, $radioBtn[i]);
    $div.appendChild($radioBtn[i]);
    $parent = $radioBtn[i].parentElement;
    $label = document.createElement("label");
    $label.setAttribute('class', 'update-label');
    $parent.insertBefore($label, $radioBtn[i]);
    $label = $radioBtn[i].previousElementSibling;
    $label.setAttribute("for", $radioBtn[i].getAttribute("name"));
  };
}())
/*===== checkboxes checked ======*/
function checkBoxChecked() {
  for (var i = 0; i < $radioBtn.length; i++) {
    ////console.log("checked", this);
    $radioBtn[i].previousElementSibling.className = "update-label";
    if (this.checked === true) {
      this.previousElementSibling.className = "update-label-active";
    }
  };
};
for (var i = 0; i < $radioBtn.length; i++) {
  if ($radioBtn[i].checked === true) {
    $radioBtn[i].previousElementSibling.className = "update-label-active";
  } else {
    $radioBtn[i].previousElementSibling.className = "update-label";
  };
  $radioBtn[i].addEventListener("change", checkBoxChecked);
};
/*============*/
$('.numberSpinner').spinner();
var numberSpinner = document.getElementsByClassName('numberSpinner');
var indexNumber = 0;
for (var i = 0; i < numberSpinner.length; i++) {
  var $test = document.createElement('div');
  numberSpinner[i].setAttribute('id', 'input' + indexNumber++);
  var plusButton = document.createElement("BUTTON");
  var minusButton = document.createElement("BUTTON");
  plusButton.setAttribute("class", "numberPlus");
  minusButton.setAttribute("class", "numberMinus");
  plusButton.setAttribute("type", "button");
  minusButton.setAttribute("type", "button");
  plusButton.innerHTML = "<i class='material-icons'>add</i>";
  minusButton.innerHTML = "<i class='material-icons'>remove</i>";
  numberSpinner[i].parentElement.parentElement.insertBefore(minusButton, numberSpinner[i].parentElement);
  numberSpinner[i].parentElement.parentElement.insertBefore(plusButton, numberSpinner[i].parentElement.nextElementSibling);
  ////console.log(numberSpinner[i].parentElement);
};
function numIncrement(inputObj, increase) {
  var myInputObject = inputObj;
  if (increase) {
    myInputObject.value++;
  } else {
    myInputObject.value--;
  };
  if (myInputObject.value > 999) {
    myInputObject.value = 999;
  };
  if (myInputObject.value <= 0) {
    myInputObject.value = 0;
  };
};
function buttonEvents() {
  var numPlus = document.getElementsByClassName("numberPlus");
  var numMinus = document.getElementsByClassName("numberMinus");
  for (var i = 0; i < numPlus.length; i++) {
    numPlus[i].onclick = (function() {
      var buttonAssociation = this.previousElementSibling.children[0];
      numIncrement(buttonAssociation, true);
      ////console.log(buttonAssociation);
      ////console.log(buttonAssociation.value)
    })
  };
  for (var i = 0; i < numMinus.length; i++) {
    numMinus[i].onclick = (function() {
      var buttonAssociation = this.nextElementSibling.children[0];
      ////console.log(buttonAssociation);
      numIncrement(buttonAssociation, false);
    })
  };
};
buttonEvents();
//===================================================================//
//===================================================================//
//===================================================================//
// cart description styling (removal of - and replacing with <span>) //
//===================================================================//
//===================================================================//
//===================================================================//
(function() {
  var objs = document.getElementsByClassName("p-desc");
  for (var i = 0; i < objs.length; i++) {
    var strings = objs[i].innerHTML;
    while (strings.indexOf("- ") !== -1) {
      ////console.log(strings);
      strings = strings.replace("- ", "<span>");
      strings = strings.concat("</span>");
      objs[i].innerHTML = strings;
      break;
    };
  };
}());
(function() {
  'use strict'
  // seperate groups ================================================================
  var productOptions;
  productOptions = document.getElementsByClassName("price-single");
  var optionsArray = [];
  var sortedArray;
  for (var i = 0; i < productOptions.length; i++) {
    if (productOptions[i].getAttribute("data-group") !== "") {
      var optionsGroup = productOptions[i].getAttribute("data-group");
      var optionsDisplay = productOptions[i].getAttribute("data-display");
      var optionHolder;
      optionHolder = [optionsGroup, optionsDisplay];
      optionsArray.push(optionHolder);
      //console.log("options array" , optionsArray);
      //optionsArray.push(options);
    };
  };
  //
  // function sortByDisplayOrder(a, b) {
  //   //console.log(a[1],b[1]);
  //   if (a[1] === b[1]) {
  //     return 0;
  //   } else {
  //     return (a[1] < b[1]) ? -1 : 1;
  //   }
  // }
  optionsArray.sort((a,b) => (b - a)).reverse();

  //console.log("sorted?" , optionsArray);
  for (var i = 0; i < optionsArray.length; i++) {
    optionsArray[i].pop([i][1])
  };
  var flattenedArray = [].concat.apply([], optionsArray);
  sortedArray = new Set(flattenedArray);
  optionsArray = [...sortedArray];

// create group template =========================================================
  var groupContainer = document.getElementById("group-container");
  var optionContainer = document.createElement("div");
  optionContainer.setAttribute("class", "group-btn-container");

   var oCHeader = document.createElement("header");
   oCHeader.innerHTML = "<span>select a package</span>";

  optionContainer.appendChild(oCHeader);
  groupContainer.appendChild(optionContainer);


  var oCHeaderBtn = document.createElement("button");
  oCHeaderBtn.setAttribute("type","button");
  oCHeaderBtn.setAttribute("id","backToDate");
  oCHeaderBtn.innerHTML = "<span class='material-icons'>date_range</span><span> back to calender</span>";
  oCHeader.appendChild(oCHeaderBtn);


  optionsArray.forEach(function(item, index) {
    //console.log(item);
    //------- create container for price buttons ----//

    var optionContainerButton = document.createElement("button");
    optionContainerButton.setAttribute("type", "button");
    optionContainerButton.setAttribute("class","optButton");

    var optionContainerButtonP = document.createElement("p");
    optionContainerButtonP.innerHTML = "" + item.replace("_"," ") + "";
    optionContainerButton.appendChild(optionContainerButtonP);


    var optionContainerButtonSpan = document.createElement('span');
    optionContainerButtonSpan.setAttribute("class","pspan-1");
    optionContainerButton.appendChild(optionContainerButtonSpan);
    optionContainer.appendChild(optionContainerButton);


    //----- create container for prices ----//
  });
  var groupPricesContainerWrapper;
  var groupPricesContainer;
  groupPricesContainerWrapper = document.createElement("div");
  groupPricesContainerWrapper.setAttribute("id","prices-wrapper");

  optionsArray.forEach(function(item,index){
    groupPricesContainer = document.createElement("div");

    groupPricesContainer.setAttribute('id',item);
    groupPricesContainer.setAttribute("class","price-group-category");

    var returnToPackages = document.createElement("button");
    returnToPackages.setAttribute("type","button");
    returnToPackages.setAttribute("class","returnToPackages");
    returnToPackages.innerHTML = "return to packages";

    groupPricesContainer.appendChild(returnToPackages)
    // groupPricesContainer.style.border = "2px solid gold";
    groupPricesContainerWrapper.appendChild(groupPricesContainer);

  });

  var pricesContainers = document.getElementsByClassName("price-group-category");

  // for (var i = 0; i < pricesContainers.length; i++) {
  //   //console.log(pricesContainers[i].getAttribute("id"),optionsArray);
  // }


  // groupPricesContainerWrapper.style.border = "2px solid blue";
  groupContainer.appendChild(groupPricesContainerWrapper);

  for (var i = 0; i < pricesContainers.length; i++) {
    // alert(pricesContainers[i].getAttribute("id") + productOptions[i].getAttribute("data-group"))
    for (var ii = 0; ii < productOptions.length; ii++) {
      if(pricesContainers[i].getAttribute("id") === productOptions[ii].getAttribute("data-group")){
        pricesContainers[i].appendChild(productOptions[ii]);
      }
    }
  };

  var goToNext = document.createElement("button");
  goToNext.setAttribute("type", "button");
  goToNext.setAttribute("class","next");
  goToNext.innerHTML = "book now";
  groupPricesContainerWrapper.appendChild(goToNext);

  var optButton = document.getElementsByClassName("optButton");

  for (var i = 0; i < pricesContainers.length; i++) {
    pricesContainers[i].setAttribute("data-from","" + pricesContainers[i].childNodes[1].getAttribute("data-price") + "");
    optButton[i].children[1].innerHTML = "<span class='pspan-2'> from $</span>" + pricesContainers[i].getAttribute("data-from"); + ""
  }

  //--- button function ---//

  for (var i = 0; i <  optButton.length; i++) {
     optButton[i].addEventListener("click",function(){
      var arg1 = this.childNodes[0].innerHTML.replace(" ","_");
      priceToggle("price-group-category",arg1)
    })
  }
  //---------------------//

}());
(function() {
  'use strict'
  var productClass = document.querySelectorAll(".price-single");

  var sCollectors = document.getElementById("schedules-collectors");

  productClass.forEach(function(item, index) {
    if (item.getAttribute("data-group") !== "") {
      item.className = "price-group";
    }else{
      sCollectors.insertBefore(item,document.getElementById("participants-names-ages"));
    }
  });

  var scheduleHead = document.createElement("div");
  scheduleHead.setAttribute("id","schedules-collectors-header");


  var sCHheader = document.createElement("header");
  sCHheader.innerHTML = "additional options (reword this)"

  var sCBtn = document.createElement("button");
  sCBtn.setAttribute("id","sCBtn");
  sCBtn.setAttribute("type","button");
  sCBtn.innerHTML = "back to options";

  scheduleHead.appendChild(sCBtn);
  scheduleHead.appendChild(sCHheader);

  sCollectors.insertBefore(scheduleHead,document.getElementById("output-carrier"))

}())


// //===================================================================//
// // cart description styling (removal of - and replacing with <span>) //
(function() {
  'use strict';
  var $cost = document.getElementsByClassName("cost");
  for (var i = 0; i < $cost.length; i++) {
    $cost[i].style.display = "none";
  };
  var $list = document.querySelectorAll(".list span");
  for (var i = 0; i < $list.length; i++) {
    $list[i].innerHTML = "Retail";
  };
  var $price = document.querySelectorAll(".price span");
  for (var i = 0; i < $price.length; i++) {
    $price[i].innerHTML = "discount";
  };
  var $obj = document.getElementById("product-h1");
  var $string = $obj.innerHTML;
  while ($string.indexOf("- ") !== -1) {
    $string = $string.replace("- ", "<span>");
    $string = $string.concat("</span>");
    $obj.innerHTML = $string;
    break;
  };
  var objs = document.getElementsByClassName("p-desc");
  for (var i = 0; i < objs.length; i++) {
    var strings = objs[i].innerHTML;
    while (strings.indexOf("- ") !== -1) {
      strings = strings.replace("- ", "<span>");
      strings = strings.concat("</span>");
      objs[i].innerHTML = strings;
      break;
    }
  };
}())
// //======== total calculator ================
var priceElement = document.getElementsByClassName("price"),
  totalPriceElement = document.getElementById("total");
var arrayOfPrices = [];
(function() {
  'use strict';
  for (var i = 0; i < priceElement.length; i++) {
    var priceAttr = priceElement[i].innerHTML;
    priceAttr = priceAttr.substr(1, priceAttr.length);
    priceElement[i].setAttribute("value", priceAttr)
  }
  //   // ========================================================
  for (var i = 0; i < priceElement.length; i++) {
    arrayOfPrices.push(priceElement[i].getAttribute('value'))
  }
}());
function recalcTotal() {
  var total = 0;
  for (var i = 0; i < priceElement.length; i++) {
    var count = document.getElementById("input" + (i + 1) + "").value;
    var pricePerUnit = priceElement[i].getAttribute('value');
    total += count * pricePerUnit;
  }
  totalPriceElement.innerHTML = "$" + total + "";
}
//==== add participants =====
function addParticipant() {
  var x = document.getElementById("participants");
  var participant = document.getElementsByClassName("participant");
  for (var i = 0; i < participant.length; i++) {
    var markup = participant[i].innerHTML;
  }
  var newParticipant = document.createElement('div');
  newParticipant.setAttribute("class", "participant");
  newParticipant.innerHTML = markup;
  x.appendChild(newParticipant);
}
