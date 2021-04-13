let lsData = []; // array that holds localStorage data

const saveToLocalStorage = () => {
  const rows = document.querySelectorAll('.table-row');
  let array = [];
  
  rows.forEach(row => {
    
    const obj = {
      nrCrt: row.childNodes[0].innerHTML,
      denumireProdus: row.childNodes[1].innerHTML,
      um: row.childNodes[2].innerHTML,
      cantitate: row.childNodes[3].innerHTML,
      pretUnitar: row.childNodes[4].innerHTML,
      valoareLei: row.childNodes[5].innerHTML,
      valoareTVA: row.childNodes[6].innerHTML
    };

    array = [...array, obj];
  });

  localStorage.setItem('factura', JSON.stringify(array));
};

let isLoaded = false;
const loadLocalStorage = () => {
  // prevent duplicate data
  if(isLoaded) return 'Data from localstorage was already loaded';

 
  const localStorageData = localStorage.getItem('factura');
  lsData = JSON.parse(localStorageData);

  const table = document.getElementById("#invoice-table");  
  if(localStorageData !== undefined) {

    lsData.forEach(obj => {
       // get rows length
      const rows = document.querySelectorAll('.table-row');

      const row = table.insertRow(nrCrt + 2);
      row.className = 'table-row';

      const cell1 = row.insertCell(0);
      cell1.className = 'tabel-cell';

      const cell2 = row.insertCell(1);
      cell2.className = 'tabel-cell';
      cell2.colSpan = 2;

      const cell3 = row.insertCell(2);
      cell3.className = 'tabel-cell';

      const cell4 = row.insertCell(3);
      cell4.className = 'tabel-cell';

      const cell5 = row.insertCell(4);
      cell5.className = 'tabel-cell';

      const cell6 = row.insertCell(5);
      cell6.className = 'tabel-cell';

      const cell7 = row.insertCell(6);
      cell7.className = 'tabel-cell';

      cell1.innerHTML = rows.length == 0 ? obj.nrCrt : rows.length+1;
      cell2.innerHTML = obj.denumireProdus;
      cell3.innerHTML = obj.um;
      cell4.innerHTML = obj.cantitate;
      cell5.innerHTML = obj.pretUnitar;
      cell6.innerHTML = obj.valoareLei;
      cell7.innerHTML = obj.valoareTVA;
    })
  }
  isLoaded = true;
}

const calculateTotalPrice = () => {
  const pricesList = document.querySelectorAll(".pret");
  let totalPrice = 0;

  pricesList.forEach((price) => {
    totalPrice += parseInt(price.innerText);
  });

  document.getElementById("valoare-lei").innerHTML = totalPrice;

  // reset values after pressing submit button
  document.getElementById("produse-denumire").value = '';
  document.getElementById("um").value = 0;
  document.getElementById("produse-cantitate").value = 0;
  document.getElementById("produse-pret-unitar").value = 0;
};

var nrCrt = 0;
function addNewRow() {

  var table = document.getElementById("#invoice-table");
  var row = table.insertRow(nrCrt + 2);
  row.className = 'table-row';

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);

  cell1.innerHTML = ++nrCrt;
  cell1.className = 'tabel-cell';

  var denumire = document.getElementById("produse-denumire").value;
  cell2.innerHTML = denumire;
  cell2.className = 'tabel-cell';
  cell2.colSpan = "2";

  var um = document.getElementById("um").value;
  cell3.innerHTML = um;
  cell3.className = 'tabel-cell';

  var cantitate = document.getElementById("produse-cantitate").value;
  cell4.innerHTML = cantitate;
  cell4.className = 'tabel-cell';

  var pret_unitar = document.getElementById("produse-pret-unitar").value;
  cell5.innerHTML = pret_unitar;
  cell5.className = 'tabel-cell';

  
  cell6.classList.add("pret");
  cell6.className = 'tabel-cell';
  cell6.innerHTML = cantitate*pret_unitar;

  var valTVA =  0.1*cantitate*pret_unitar;
  cell7.className = 'tabel-cell';
  cell7.innerHTML = valTVA.toFixed(2);

  var button_stergere = document.createElement("button");
  cell8.appendChild(button_stergere);
  cell8.style.border = "0px none white";
  cell8.style.width = "10px";
  cell8.className = "adauga-elemente";
  
  // am creat butonul de stergere din dreapta fiecarei noi intrari pe care o adaugam cu ajutorul butonului "adauga"
  button_stergere.style.backgroundColor = "#ff4d4d";
  button_stergere.style.color = "#ffffff";
  button_stergere.innerHTML = "X";
  button_stergere.id = "#buton-de-stergere";

  //aici am facut ca, atunci cand apesi pe butonul "X" (cel creat deasupra), intrarea (randul) sa se stearga.
  button_stergere.onclick = function(){
      document.getElementsByTagName("tr")[this.parentNode.parentNode.rowIndex].remove();
  };

  calculateTotalPrice();
}

//functie care valideaza denumirea produsului (sa fie formata doar din litere)
function validationDenumireProdus(r) {
  let denumire_produs = /[^a-zA-Z]/;
  r.value = r.value.replace(denumire_produs, "");
}

//functie care valideaza um (doar cifre)
function validationUM(r) {
  let um = /[^1-9]/;
  r.value = r.value.replace(um, "");
}

//functie care valideaza cantitatea (doar cifre)
function validationCantitate(r) {
  let cantitate = /[^1-9]/;
  r.value = r.value.replace(cantitate, "");
}

//functie care valideaza pretul unitar (doar cifre)
function validationPretUnitar(r) {
  let pret_unitar = /[^1-9]/;
  r.value = r.value.replace(pret_unitar, "");
}