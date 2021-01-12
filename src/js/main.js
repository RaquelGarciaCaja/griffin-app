"use strict";

const list = document.querySelector(".main__list");
const addButton = document.querySelector(".js-btnAdd");
const titleContacts = document.querySelector(".js-title");

let allContacts = [];

const newContact = () => {
  const inputName = document.querySelector(".js-inputName");
  const inputEmail = document.querySelector(".js-inputEmail");
  let inputNameValue = inputName.value;
  let inputEmailValue = inputEmail.value;
  allContacts.push(inputNameValue + inputEmailValue);
  initAddParticipantListener();
};

function initAddParticipantListener() {
  const list = document.querySelector(".js-list");
  const inputName = document.querySelector(".js-inputName");
  const inputEmail = document.querySelector(".js-inputEmail");
  let inputNameValue = inputName.value;
  let inputEmailValue = inputEmail.value;

  list.innerHTML = "";
  for (let i = 0; i < allContacts.length; i++) {
    const newTr = document.createElement("tr");
    const newTd = document.createElement("td");
    const newP = document.createElement("p");
    const newButton = document.createElement("button");

    const textInputs = document.createTextNode("Rellena los campos requeridos");
    const textButton = document.createTextNode("X");
    const newContact = document.createTextNode(allContacts[i]);

    newTr.appendChild(newTd);
    newTr.appendChild(newTd);

    newTr.appendChild(newButton);
    newTd.appendChild(newContact);
    newTd.appendChild(newContact);
    newButton.appendChild(textButton);
    newP.appendChild(textInputs);

    newTr.classList.add("main__name-email");
    newTd.classList.add("main__input-name");
    newButton.classList.add("main__delete");
    newP.classList.add("main__requiered");

    newButton.onclick = function (ev) {
      deleteEachItem(ev);
    };

    if (inputNameValue.length == 0 || inputEmailValue.length == 0) {
      console.log("no escrito");
      list.appendChild(newP);
      // location.reload();
    } else {
      console.log("escrito");
      newButton.id = allContacts[i];
      list.appendChild(newTr);
    }
  }
  document.querySelector(".js-inputName").value = "";
  document.querySelector(".js-inputEmail").value = "";
  document.querySelector(".js-inputName").focus();
}

function deleteEachItem(ev) {
  const task = ev.target.id;
  const index = allContacts.indexOf(task);
  allContacts.splice(index, 1);
  initAddParticipantListener();
}
function listenTrashItem() {
  const deleteItems = document.querySelectorAll(".main__delete");
  for (const deleteItem of deleteItems) {
    deleteItem.addEventListener("click", deleteEachItem);
  }
}

// function check() {
//   const inputName = document.querySelector(".js-inputName");
//   const inputEmail = document.querySelector(".js-inputEmail");
//   let inputNameValue = inputName.value;
//   let inputEmailValue = inputEmail.value;

//   if (inputNameValue.length == 0 || inputEmailValue.length == 0) {
//     return false;
//   }
// }

addButton.addEventListener("click", newContact);
