let  ichimlik =document.getElementById("napitaData");
let container = document.getElementById("container")
let searchInput =document.getElementById("input")
let menyu = document.getElementById("Чикен Сладкий Чили")
let sushi = document.getElementById("Филадельфия кранч")
let menyular = document.getElementById("zakuska")
let desert = document.getElementById("disert")

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
            border: none;
            color:  red; 
            width: 100px;
            height: 90px;
            flex-direction: column;
             padding: 15px ;
            margin: 5px;
            border-radius: 6px;
            cursor: pointer;
              transition: all 0.6s ease-in-out;
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



const input = document.getElementById("input");
const products = document.querySelectorAll(".card");

input.addEventListener("input", function () {
    const value = this.value.toLowerCase().trim();

    products.forEach(item => {
        const name = item.getAttribute("data-name").toLowerCase();

        if (name.includes(value)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});



const cart = {};

function getQty(id) {
  const el = document.getElementById(`qty-${id}`);
  return parseInt(el.innerText);
}

function setQty(id, value) {
  const el = document.getElementById(`qty-${id}`);
  el.innerText = value < 10 ? "0" + value : value;
}

function increment(id) {
  let qty = getQty(id);
  qty++;
  setQty(id, qty);
  updatePrice(id, qty);
}

function decrement(id) {
  let qty = getQty(id);
  if (qty > 1) {
    qty--;
    setQty(id, qty);
    updatePrice(id, qty);
  }
}

function updatePrice(id, qty) {
  const priceEl = document.getElementById(`price-${id}`);

   let text = priceEl.getAttribute("data-base");

  if (!text) {
    text = priceEl.innerText;
    priceEl.setAttribute("data-base", text);
  }

   let base = parseInt(text.replace(/[^\d]/g, ""));

  if (isNaN(base)) return;

  let total = base * qty;

  priceEl.innerText = total + " ₽";
}

function addToCart(id) {
  let qty = getQty(id);
  cart[id] = qty;
  alert("Savatchaga qo‘shildi: ID " + id + " - " + qty + " ta");
  console.log(cart);
}




