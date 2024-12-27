
let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];


function makeVisual() {

    let title = document.createElement("h1");
    let text = document.createTextNode("-- Series --");
    title.appendChild(text);

    let divSelect = document.createElement("div");
    divSelect.id = "selectContainer";

    // crear un select
    let selectSeries = document.createElement("select");
    selectSeries.id = "selectSeries";

    // Agregar una opción inicial
    let defaultOption = document.createElement("option");
    defaultOption.value = "0";
    defaultOption.textContent = "Selecciona un día";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    selectSeries.appendChild(defaultOption);


    // Agregar los días de la semana al select
    days.forEach(day => {
        let option = document.createElement("option");
        option.value = day;
        option.textContent = day;
        selectSeries.appendChild(option);
    });

    divSelect.appendChild(selectSeries);




    let divGeneralContainer = document.createElement("div");
    divGeneralContainer.id = "generalContainer";
    divGeneralContainer.appendChild(title);
    divGeneralContainer.appendChild(divSelect);

    let seriesDisplayContainer = document.createElement("div");
    seriesDisplayContainer.id = "seriesDisplayContainer";





    divGeneralContainer.appendChild(seriesDisplayContainer);





    document.body.appendChild(divGeneralContainer);


    getSeries();


}
makeVisual();

function getSeries() {

    let select = document.getElementById("selectSeries");
    select.addEventListener("change", () => {
        let selectedDay = select.value;

        displaySeries(selectedDay);
    });

}

function seriesList() {

    let series = {
        "series": [
            {
                "id": 1,
                "name": "Mentes Criminales",
                "day": "Lunes",
                "image": "../Recursos/mentesCriminales.jpeg"
            },
            {
                "id": 2,
                "name": "911 T8",
                "day": "Lunes",
                "image": "../Recursos/911.jpg"
            },
            {
                "id": 3,
                "name": "Swat",
                "day": "Lunes",
                "image": "../Recursos/Swat.jpg"
            },
            {
                "id": 4,
                "name": "Traker T2",
                "day": "Martes",
                "image": "../Recursos/Tracker.jpg"
            },
            {
                "id": 5,
                "name": "FBI Internacional T4",
                "day": "Martes",
                "image": "../Recursos/fbi-internacional.jpg"
            },
            {
                "id": 6,
                "name": "FBI Most Wanted T6",
                "day": "Martes",
                "image": "../Recursos/fbi-mw.jpg"
            },
            {
                "id": 7,
                "name": "Chicago Fire T12",
                "day": "Miercoles",
                "image": "../Recursos/Chicago_Fire.jpg"

            },
            {
                "id": 8,
                "name": "Irrational T2",
                "day": "Miercoles",
                "image": "../Recursos/The_Irrational.jpg"
            },
            {
                "id": 9,
                "name": "Navy  T22",
                "day": "Jueves",
                "image": "../Recursos/NavyT22.jpeg"
            },
            {
                "id": 10,
                "name": "FBI T7",
                "day": "Jueves",
                "image": "../Recursos/FBI.jpg"
            },
            {
                "id": 11,
                "name": "Texas Metal T7",
                "day": "Jueves",
                "image": "../Recursos/descarga.jpeg"
            },
            {
                "id": 12,
                "name": "911 Lone Star T4",
                "day": "Lunes",
                "image": "../Recursos/LoneStart.jpeg"
            },
            { "id": 13,
                "name": "Chapa y Pintura",
                "day": "Jueves",
                "image": "../Recursos/chapa.jpeg"
            }
          




        ]


    }

    return series





}

function displaySeries(day) {

    let series = seriesList();
    let seriesContainer = document.getElementById("seriesDisplayContainer");
    seriesContainer.innerHTML = "";

    series.series.forEach(element => {
        if (element.day === day) {
            let seriesCard = document.createElement("div");
            seriesCard.classList.add("seriesCard");

            let seriesImage = document.createElement("img");
            seriesImage.src = element.image;
            seriesImage.alt = element.name;

            let seriesName = document.createElement("p");
            seriesName.textContent = element.name;

            seriesCard.appendChild(seriesImage);
            seriesCard.appendChild(seriesName);

            seriesContainer.appendChild(seriesCard);
        }
    });
    if (!seriesContainer.hasChildNodes()) {
        seriesContainer.textContent = "No hay series disponibles para este día.";
    }
}