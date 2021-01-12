"use strict";

const list = document.querySelector(".main__list");
const addButton = document.querySelector(".js-btnAdd");
const titleContacts = document.querySelector(".js-title");

let allContacts = [];
let addContact = true;

const newContact = () => {
  const inputName = document.querySelector(".js-inputName");
  const inputEmail = document.querySelector(".js-inputEmail");
  let nameNameValue = inputName.value;
  let nameEmailValue = inputEmail.value;
  allContacts.push(nameNameValue + nameEmailValue);
  initAddParticipantListener();
};

function initAddParticipantListener() {
  const list = document.querySelector(".js-list");

  list.innerHTML = "";
  for (let i = 0; i < allContacts.length; i++) {
    const newTr = document.createElement("tr");
    const newTd = document.createElement("td");
    const newButton = document.createElement("button");

    const textButton = document.createTextNode("X");
    const newContact = document.createTextNode(allContacts[i]);

    newTr.appendChild(newTd);
    newTr.appendChild(newButton);
    newTd.appendChild(newContact);
    newTd.appendChild(newContact);
    newButton.appendChild(textButton);

    newTr.classList.add("main__name-email");
    newTd.classList.add("main__input-name");
    newButton.classList.add("main__delete");
    if (addContact == true) {
      newButton.onclick = function (ev) {
        deleteEachItem(ev);
      };
      newButton.id = allContacts[i];
      list.appendChild(newTr);
    } else if (addContact == false) {
      list.appendChild("");
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

addButton.addEventListener("click", newContact);
