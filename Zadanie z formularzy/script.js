function WyswietlDane()
{
    let rodo = document.querySelector("#rodo").checked;
    if (rodo)
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
        let opinia = document.querySelector("#tekst").value;
        if (opinia == "Dodaj swoją opinię o stronie...")
        opinia = "Brak";
        let data = document.querySelector("#data").value;


        document.querySelector("#dane").innerHTML = `<b> Imię: </b> ${imie} <br>
        <b> Nazwisko: </b> ${nazwisko} <br>
        <b> Wiek: </b> ${wiek} <br>
        <b> Email: </b> ${email} <br>
        <b> Płeć: </b> ${plec} <br>
        <b> Najczęściej używana technologia: </b> ${technologia} <br>
        <b> Języki programowania, które umiesz w stopniu conajmniej podstawowym: </b> ${jezyki} <br>
        <b> Ocena: </b> ${ocena}/100 <br>
        <b> Opinia: </b> ${opinia} <br>
        <b> Data wypełnienia formularza: </b> ${data}`;
        
    }
    else
    {
        alert("Wysłanie formularza jest niemożliwe bez zgody na przetwarzanie danych osobowych");
    }
}






















