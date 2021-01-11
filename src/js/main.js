"use strict";

window.addEventListener("load", init, false);

function init() {
  initAddParticipantListener();
}

function initAddParticipantListener() {
  const addButton = document.querySelector(".js-btnAdd");
  const list = document.querySelector(".js-list");
  const inputName = document.querySelector(".js-inputName");
  const inputEmail = document.querySelector(".js-inputEmail");

  addButton.addEventListener("click", function () {
    let nameNameValue = inputName.value;
    let nameEmailValue = inputEmail.value;
    const titleTable = document.querySelector(".js-title");

    titleTable.style.display = "flex";

    list.innerHTML += `<tr>`;
    list.innerHTML += `<td class="main__input-name">${nameNameValue}</td>`;
    list.innerHTML += `<td class="main__input-email">${nameEmailValue}</td>`;
    list.innerHTML += `</tr>`;

    document.querySelector(".js-inputName").value = "";
    document.querySelector(".js-inputEmail").value = "";
    document.querySelector(".js-inputName").focus();
  });
}
