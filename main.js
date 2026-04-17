let  ichimlik =document.getElementById("napitaData");
let container = document.getElementById("container")


let napitaData = [
    {id: 1, img: "./img2/Fire.png", name: "Акции"},
    {id: 1, img: "./img2/Pizza.png", name: "Пицца"},
    {id: 1, img: "./img2/Sushi.png", name: "Суши"},
    {id: 1, img: "./img2/Group 99.png", name: "Напитки"},
    {id: 1, img: "./img2/Snacks.png", name: "Закуски"},
    {id: 1, img: "./img2/Combo.png", name: "Комбо"},
    {id: 1, img: "./img2/Dessert.png", name: "Десерты"},
    {id: 1, img: "./img2/Sauce.png", name: "Соусы"},

]


function rendernapitaData(napitaData) {
    napitaDataContainer.innerHTML = napitaData.map(cat => `
        <button class="button" style="
            background:${cat.color};
            border:none;
            color:blue;
            padding:10px 15px;
            border-radius:6px;
            cursor:pointer;
        ">
            ${cat.name}
        </button>
    `).join("");
}

rendernapitaData(napitaData);