function addNewRow() {
    let index = 1;

    var table = document.getElementById('#mytable');
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = "1";
    cell1.style.border = "thin solid black";

    var denumire = document.getElementById("produse-denumire").value;
    cell2.innerHTML = denumire;
    cell2.style.border = "thin solid black";

    var um = document.getElementById("um").value;
    cell3.innerHTML = um;
    cell3.style.border = "thin solid black";

    var cantitate = document.getElementById("produse-cantitate").value;
    cell4.innerHTML = cantitate;
    cell4.style.border = "thin solid black";

    var pret_unitar = document.getElementById("produse-pret-unitar").value;
    cell5.innerHTML = pret_unitar;
    cell5.style.border = "thin solid black";

    cell6.style.border = "thin solid black";
    cell7.style.border = "thin solid black";
}