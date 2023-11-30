function WyswietlDane()
{
    let imie = document.querySelector("#imie").value;
    let nazwisko = document.querySelector("#nazwisko").value;
    let wiek = document.querySelector("#wiek").value;
    let email = document.querySelector("#email").value;
    let plec = document.querySelector('input[name="plec"]:checked').id;
    let technologia = document.querySelector("#technologia").value;
    let jezyki = "";
    let checkboxes = document.querySelectorAll('input[name="jezyk"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
        jezyki += checkboxes[i].value + ", ";
    }

    let ocena = document.querySelector("#ocena").value;
    let plik = document.querySelector("#plik")[0].value;
    let opinia = document.querySelector("#tekst").value;
    let data = document.querySelector("#data").value;


    document.querySelector("#dane").innerHTML = `Imię: ${imie} <br>
    Nazwisko: ${nazwisko} <br>
    Wiek: ${wiek} <br>
    Email: ${email} <br>
    Płeć: ${plec} <br>
    Najczęściej używana technologia: ${technologia} <br>
    Języki programowania, które umiesz w stopniu conajmniej podstawowym: ${jezyki} <br>
    Ocena: ${ocena} <br>
    Plik: ${plik} <br>
    Opinia: ${opinia} <br>
    Data: ${data}`;
}























