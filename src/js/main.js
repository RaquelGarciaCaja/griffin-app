"use strict";

const list = document.querySelector(".main__list");
const addButton = document.querySelector(".js-btnAdd");
const titleContacts = document.querySelector(".main__title");

let allContacts = [];

const newContact = () => {
  const inputName = document.querySelector(".js-inputName");
  const inputEmail = document.querySelector(".js-inputEmail");
  let inputNameValue = inputName.value;
  let inputEmailValue = inputEmail.value;

  function Contact(name, email) {
    this.name = name;
    this.email = email;
  }
  let newObjContacts = new Contact(inputNameValue, inputEmailValue);
  initAddParticipantListener(newObjContacts);
};

function initAddParticipantListener(newObjContacts) {
  // const inputName = document.querySelector(".js-inputName");
  // const inputEmail = document.querySelector(".js-inputEmail");
  // let inputNameValue = inputName.value;
  // let inputEmailValue = inputEmail.value;
  const list = document.querySelector(".js-list");
  allContacts.push(newObjContacts);

  list.innerHTML = "";
  for (let i = 0; i < allContacts.length; i++) {
    const newTr = document.createElement("tbody");
    const newTdName = document.createElement("td");
    const newTdEmail = document.createElement("td");
    const newButton = document.createElement("button");

    const textButton = document.createTextNode("X");
    console.log(allContacts[i]);
    const newContactName = document.createTextNode(allContacts[i].name);
    const newContactEmail = document.createTextNode(allContacts[i].email);

    newTr.appendChild(newTdName);
    newTr.appendChild(newTdEmail);
    newTr.appendChild(newButton);
    newTdName.appendChild(newContactName);
    newTdEmail.appendChild(newContactEmail);
    newButton.appendChild(textButton);

    newTr.classList.add("main__name-email");
    newTdName.classList.add("main__input-name");
    newTdEmail.classList.add("main__input-name");
    newButton.classList.add("main__delete");

    newButton.onclick = function (ev) {
      deleteEachItem(ev);
    };

    newButton.id = allContacts[i];
    list.appendChild(newTr);

    // if (inputNameValue.length == 0 || inputEmailValue.length == 0) {
    //   // list.appendChild(newP);
    //   preventDefault();
    // } else {
    //   newButton.id = allContacts[i];
    //   list.appendChild(newTr);
    // }
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
