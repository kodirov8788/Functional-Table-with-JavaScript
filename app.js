const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");

function onAddForm(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const surname = document.querySelector("#surname").value;
    const mail = document.querySelector("#mail").value;
    const address = document.querySelector("#address").value;
    const hobbies = document.querySelector("#hobbies").value;
    const phonenumber = document.querySelector("#phonenumber").value;


    tbodyEl.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${surname}</td>
            <td>${mail}</td>
            <td>${address}</td>
            <td>${hobbies}</td>
            <td>${phonenumber}</td>
       <td><button class="deleteBtn">Delete</button><button class="addBtn">Add</button></td>
               </tr>
    `;
}

function onDeleteRow(e) {
    if (!e.target.classList.contains("deleteBtn")) {
        return;
    }

    const btn = e.target;
    btn.closest("tr").remove();
}

function onAddRow(e) {
    if (!e.target.classList.contains("addBtn")) {
        return;
    }

    const btn = e.target;
    btn.closest("tr").style.backgroundColor = '#000';
    btn.closest("tr").style.color = '#FFF';
}

formEl.addEventListener("submit", onAddForm);
tableEl.addEventListener("click", onDeleteRow);
tableEl.addEventListener("click", onAddRow);