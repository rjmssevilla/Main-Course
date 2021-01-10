"use strict";

function addToDisplay(message, displayScreen) {
    displayScreen.textContent = message;
}

function getDisplayMessage(key, displayScreen) {
    let action = key.dataset.action;
    switch (action) {
        case "hello":
            if (displayScreen.dataset.currentName) {
                return `Hello, ${displayScreen.dataset.currentName}!`;
            }
            else {
                return "Hello World!"
            }
        case "goodbye":
            if (displayScreen.dataset.currentName) {
                return `GoodBye, ${displayScreen.dataset.currentName}!`;
            }
            else {
                return "GoodBye World!"
            }
        case "submit":
            let inputName = document.querySelector(".input-name").value;
            if (inputName) {
                return inputName;
            }
            else{
                return displayScreen.textContent;
            }
        case "name":
            return key.textContent;
        case "clear":
            return "";
    }
}

function updateState(key, displayScreen) {
    let action = key.dataset.action;

    if (action === "goodbye") {
        key.dataset.action = "clear"
        key.textContent = "CLEAR";
    }
    if (action === "clear") {
        displayScreen.dataset.currentName = "";
        key.dataset.action = "goodbye"
        key.textContent = "SayGoodBye";
    }

    if (action === "submit") {
        let inputName = document.querySelector(".input-name");
        if (inputName.value) {
            displayScreen.dataset.currentName = inputName.value;
            inputName.value = "";
        }
    }

    if (action === "name") {
        displayScreen.dataset.currentName = key.textContent;
    }
}


//main

let keys = document.querySelectorAll("._key");
let displayScreen = document.querySelector(".display-screen-content");

keys.forEach((key) => {
    key.addEventListener("click", e => {
        displayScreen.textContent = getDisplayMessage(key, displayScreen);
        updateState(key, displayScreen);
    })
});
