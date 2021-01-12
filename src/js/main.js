"use strict";

window.addEventListener("load", init, false);

const list = document.querySelector(".main__list");
const addButton = document.querySelector(".js-btnAdd");
const titleContacts = document.querySelector(".js-title");

let allContacts = [];

function init() {
  initAddParticipantListener();
}

function initAddParticipantListener() {
  const list = document.querySelector(".js-list");
  const inputName = document.querySelector(".js-inputName");
  const inputEmail = document.querySelector(".js-inputEmail");
  const newButton = document.querySelector(".js-btnAdd");

  let nameNameValue = inputName.value;
  let nameEmailValue = inputEmail.value;
  allContacts.push(nameNameValue + nameEmailValue);

  list.innerHTML = "";
  for (let i = 0; i < allContacts.length; i++) {
    const newTr = document.createElement("tr");
    const newTd = document.createElement("td");
    const newButton = document.createElement("button");
    const newContact = document.createTextNode(allContacts[i]);

    newTr.appendChild(newTd);
    newTr.appendChild(newButton);
    newTd.appendChild(newContact);
    newTd.appendChild(newContact);

    newTr.classList.add("main__name-email");
    newTd.classList.add("main__input-name");
    newButton.classList.add("main__delete");

    newButton.onclick = function (ev) {
      deleteEachItem(ev);
    };
    newButton.id = allContacts[i];
    list.appendChild(newTr);
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
  const deleteItems = document.querySelectorAll(".js-delete");
  for (const deleteItem of deleteItems) {
    deleteItem.addEventListener("click", deleteEachItem);
  }
}

addButton.addEventListener("click", initAddParticipantListener);
