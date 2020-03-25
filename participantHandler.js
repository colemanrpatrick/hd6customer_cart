var container = document.getElementById("participants"),
	participant = document.getElementsByClassName("participant"),
    outputCarrier = document.getElementById("output-carrier"),
	carrier = document.getElementById("carrierInput");
var participantsValue,
	participantsArr,
	num;

function getParticipants() {
    'use strict';
    var carrier_value = outputCarrier.innerText;
    carrier.value = outputCarrier.innerText;
    participantsValue = carrier_value;
    console.log("get participants", outputCarrier.innerText);
};

function showParticipants() {
    getParticipants();
    var count;
    if (participantsValue !== null) {
        container.innerHTML = "";
        participants = participantsValue.split(",");
        participantsArr = [];
        participants.forEach(function (item, index) {
            var newItem = item.split('|');
            participantsArr.push(newItem);
            createParticipant();
        })
        var nameInput = document.querySelectorAll(".input-name");
        var ageInput = document.querySelectorAll(".input-age");
        for (var i = 0; i < nameInput.length; i++) {
            nameInput[i].value = "" + participantsArr[i][0] + "";
            ageInput[i].value = "" + participantsArr[i][1] + "";
        }
    } else {
        createParticipant();
    }
}
var removeBtn = document.getElementsByClassName('button');

function removeParticipant() {
    this.parentElement.setAttribute("data-delete", "delete");
}

var newParticipant;

function createParticipant() {
    newParticipant = document.createElement('div');
    newParticipant.setAttribute("class", "participant");
    var inputText = ["name", "age"];
    inputText.forEach(function (el) {
        var labels = document.createElement('label');
        labels.htmlFor = el;
        labels.innerHTML = el;
        newParticipant.appendChild(labels);
    })
    inputText.forEach(function (el,index) {
        var inputs = document.createElement('input');
        inputs.type = 'text';
        inputs.setAttribute("class", "input-" + el + "");
        inputs.setAttribute("placeholder", "" + el + "");
        newParticipant.appendChild(inputs);
    })
    var removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.setAttribute("class", "removeBtn");
    removeBtn.innerHTML = '<i class="material-icons">cancel</i>';
    removeBtn.addEventListener('click', removeParticipant, false);
    newParticipant.appendChild(removeBtn);
    container.appendChild(newParticipant);
}
function addParticipant() {
    container.appendChild(newParticipant);
}
function storeParticipants(e) {
    getParticipants();
    var participantStr;
    var participantArr = [];
    var collectionArr = [];
    for (var i = 0; i < participant.length; i++) {
        var participantName = participant[i].querySelectorAll(".input-name")[0].value.trim();
        var participantAge = participant[i].querySelectorAll(".input-age")[0].value;

        //var $noName = " ";
        var $noAge = " ";

        var $nameValue;
        var $ageValue;

        if (!participantName || participantName === 'undefined' || participantName === " " || participantName === "" || participantName.length === 0) {
            participant[i].setAttribute("data-delete", "delete");
        } else {
            $nameValue = participantName;
        }

        if (!participantAge || participantAge === 'undefined' || participantAge === " " || participantAge === "" || participantAge.length === 0) {
            $ageValue = $noAge;
        } else {
            $ageValue = participantAge;
        }

        participantStr = $nameValue + "|" + $ageValue;

        if (!participant[i].getAttribute("data-delete")) {
            participantStr = participantStr.trim();
            participantArr.push(participantStr);
        }
    }
    for (var i = 0; i < participantArr.length; i++) {
        collectionArr.push(participantArr[i]);
    }
    //for (var i = 0; i < collectionArr.length; i++) {
    //    if (collectionArr[i].includes("undefined")) {
    //        //console.log("includes undefined", collectionArr[i]);
    //        collectionArr[i].replace("undefined"," ");
    //    } 
    //}
    carrier.value = collectionArr;
    //alert("after post" + collectionArr + "");
    //event.preventDefault();
};
(function () {
    'use strict';
    showParticipants();
}());
























