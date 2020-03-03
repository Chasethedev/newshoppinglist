let btnAddList = document.getElementById("btn-add-list");

function addRow() {
  let tbl = document.getElementById("tbl");
  let items = document.getElementById("user-input").value;
  let qty = document.getElementById("quantity-input").value;
  // console.log(items, qty);
  btnNotChecked = document.createElement("button");

  btnNotChecked.classList.add("btn-not-checked");
  btnDelRow = document.createElement("button");
  btnDelRow.classList.add("btn-del-row");

  let tblRow = tbl.insertRow();
  let cell1 = tblRow.insertCell();
  let cell2 = tblRow.insertCell();
  let cell3 = tblRow.insertCell();
  let cell4 = tblRow.insertCell();

  cell1.innerHTML = items;
  cell2.innerHTML = qty;
  cell3.appendChild(btnNotChecked);
  cell4.appendChild(btnDelRow);

  btnNotChecked.addEventListener("click", function() {
    this.classList.toggle("btn-checked");
  });

  btnDelRow.addEventListener("click", function() {
    tblRow.remove();
  });
}

btnAddList.addEventListener("click", function() {
  addRow();
});
