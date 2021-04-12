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

  var table = document.getElementById("#mytable");
  var row = table.insertRow(nrCrt + 2);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);

  cell1.innerHTML = ++nrCrt;
  cell1.style.border = "thin solid black";
  cell1.style.textAlign = "center";
  cell1.style.fontSize = "20px";

  var denumire = document.getElementById("produse-denumire").value;
  cell2.innerHTML = denumire;
  cell2.style.border = "thin solid black";
  cell2.colSpan = "2";
  cell2.style.textAlign = "center";
  cell2.style.fontSize = "20px";

  var um = document.getElementById("um").value;
  cell3.innerHTML = um;
  cell3.style.border = "thin solid black";
  cell3.style.textAlign = "center";
  cell3.style.fontSize = "20px";

  var cantitate = document.getElementById("produse-cantitate").value;
  cell4.innerHTML = cantitate;
  cell4.style.border = "thin solid black";
  cell4.style.textAlign = "center";
  cell4.style.fontSize = "20px";

  var pret_unitar = document.getElementById("produse-pret-unitar").value;
  cell5.innerHTML = pret_unitar;
  cell5.style.border = "thin solid black";
  cell5.style.textAlign = "center";
  cell5.style.fontSize = "20px";

  cell6.style.border = "thin solid black";
  cell6.style.textAlign = "center";
  cell6.classList.add("pret");
  cell6.style.fontSize = "20px";
  cell6.innerHTML = cantitate*pret_unitar;

  var valTVA =  0.1*cantitate*pret_unitar;
  cell7.style.border = "thin solid black";
  cell7.style.textAlign = "center";
  cell7.style.fontSize = "20px";
  cell7.innerHTML = valTVA.toFixed(2);

  // am creat butonul de stergere din dreapta fiecarei noi intrari pe care o adaugam cu ajutorul butonului "adauga"
  var button_stergere = document.createElement("button");
  button_stergere.innerHTML = "X";
  cell8.appendChild(button_stergere);
  cell8.style.border = "0px none white";
  button_stergere.style.backgroundColor = "#ff4d4d";
  button_stergere.style.color = "#ffffff";
  cell8.style.width = "10px";
  cell8.className = "adauga-elemente";
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