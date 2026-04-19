let  ichimlik =document.getElementById("napitaData");
let container = document.getElementById("container")
let searchInput =document.getElementById("input")
let menyu = document.getElementById("Чикен Сладкий Чили")
let sushi = document.getElementById("Филадельфия кранч")


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


function rendernapitaData(dataList) {
     ichimlik.innerHTML = dataList.map(cat => `
        <button class="button" style="
            background: ${cat.color};
            border: none;
            color:  red; 
            width: 100px;
            height: 90px;
            flex-direction: column;
             padding: 15px ;
            margin: 5px;
            border-radius: 6px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 15px;
        ">
            <img class=
            'img' src="${cat.img}" width="20" style="margin-right: 8px;">
            ${cat.name}
        </button>
    `).join("");
}
rendernapitaData(napitaData);



searchInput.addEventListener("input", function(e) {
    let malumotlar= e.target.value.toLowerCase();

    const filterData = datas.filter(user => 
        user.name.toLowerCase().includes(malumotlar)
    );

    renderData(filterData); 
});




let quantities = {};
let basePrices = {};

// 3 dan 26 gacha hammasini 1 qilib boshlaymiz
for (let i = 3; i <= 26; i++) {
  quantities[i] = 1;
}

basePrices = {
  3: 399,
  4: 549,
  5: 249,
  6: 630,
  7: 630,
  8: 249,
  9: 399,
  10: 549,

  11: 475,
  12: 395,
  13: 249,
  14: 630,
  15: 630,
  16: 249,
  17: 475,
  18: 395,

  19: 475,
  20: 395,
  21: 425,
  22: 630,
  23: 630,
  24: 425,
  25: 425,
  26: 630
};

function updateUI(index) {
  let qty = document.getElementById("qty-" + index);
  let price = document.getElementById("price-" + index);

  if (!qty || !price) return;

  qty.innerText = quantities[index].toString().padStart(2, "0");

  price.innerText = basePrices[index] * quantities[index] + " ₽";
}

function increment(index) {
  quantities[index]++;
  updateUI(index);
}

function decrement(index) {
  if (quantities[index] > 1) {
    quantities[index]--;
    updateUI(index);
  }
}

function addToCart(index) {
  alert(
    quantities[index] +
    " dona | " +
    (quantities[index] * basePrices[index]) +
    " ₽"
  );
}