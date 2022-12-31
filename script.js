const products1 = [
  {
      id: "prod1",
      title: "InfinIx Smart 6 Dual SIM 2GB RAM 32GB 4G LTE Polar Black.",
      image: "noon Scraping/N51993466A_1.webp",
      category: {
          number1: "electronics",
          id: "prod1"
      },
      price: 3099.00,
      rate: "4.3",
      numReview: "61"
  },
  {
      id: "prod2",
      title: "Sony PlayStation 5 Console (Disc Version) With Controller",
      image: "noon Scraping/N40633047A_1.webp",
      category: {
        number1: "electronics",
        id: "prod2"
      },
      price: 22940.00,
      rate: "4.7",
      numReview: "1.5K"
  },
  {
      id: "prod3",
      title: "De'Longhi Extra Chef Multicooker 1400 W FH 1394 Grey",
      image: "noon Scraping/N11079852A_1.webp",
      category: {
        number1: "electronics",
        id: "prod3"
      },
      price: 9200.00,
      rate: "5.0",
      numReview: "3"
  },
  {
      id: "prod4",
      title: "MSI Laptop Gf63 Thin 10Sc With 15.6 Inch Fhd Display. Intel Core 17-10750H...",
      image: "noon Scraping/N48087519A_2.webp",
      category: {
        number1: "electronics",
        id: "prod4"
      },
      price: 23999.00,
      rate: "4.8",
      numReview: "4"
  },
  {
    id: "prod5",
    title: "MSI Laptop Gf63 Thin 10Sc With 15.6 Inch Fhd Display. Intel Core 17-10750H...",
    image: "noon Scraping/N11411481A_1.webp",
    category: {
      number1: "electronics",
      id: "prod5"
    },
    price: 23999.00,
    rate: "4.5",
    numReview: "100"
},
{
  id: "prod6",
  title: "MSI Laptop Gf63 Thin 10Sc With 15.6 Inch Fhd Display. Intel Core 17-10750H...",
  image: "noon Scraping/N12901272A_1.webp",
  category: {
    number1: "electronics",
    id: "prod6"
  },
  price: 23999.00,
  rate: "2.8",
  numReview: "50"
}
];

const containerProduct1 = document.querySelector("#container-products1");
const buttonsCategories1 = document.querySelectorAll(".button-cart1");
const titleProduct1 = document.querySelector("#title-product1");
let menuBtn1 = document.querySelectorAll(".menu_btn1");
const number1 = document.querySelector("#number1");


function cartsProducts1(menuProducts1) {

  containerProduct1.innerHTML = "";

  menuProducts1.forEach(product1 => {

      const div = document.createElement("div");
      div.classList.add("product1");

      div.innerHTML = `
              <div class="col">
                <div class="card h-100 bg-light">
                  <div class="card-body">
                    <div class="text-center">
                      <img src="${product1.image}" class="card-img-top w-50" alt="${product1.title}">
                    </div>
                    <p class="card-text fw-bold" id="${product1.title}">${product1.title}</p>
                    <p>EGP <span class="fw-bold" style="font-size:x-large;">$${product1.price}.00</span></p>
                    <span class="text-decoration-line-through pe-2">${eval(product1.price + 200)}</span><span class="fw-bold text-success">6% OFF</span>
                  </div>
                  <div class="card-footer">
                    <button class="menu_btn1" id="${product1.id}">
                      <img src="noon Scraping/fulfilment_express_v2-en.svg" alt="order now">
                    </button>
                    <p class="text-muted text-end">
                      <small class="bg-success text-white rounded-pill px-2 me-2">${product1.rate} 
                        <i class="bi bi-star-fill"></i>
                      </small>
                      (${product1.numReview})
                    </p>
                  </div>
                </div>
              </div>
            
        `;

      containerProduct1.append(div);
  })

  updateMenuBtn1();
}

cartsProducts1(products1);

buttonsCategories1.forEach(button1 => {
  button1.addEventListener("click", (e) => {

    buttonsCategories1.forEach(button1 => button1.classList.remove("active"));
      e.currentTarget.classList.add("active");

      if (e.currentTarget.id != "all") 
      {
        const productCategory1 = products1.find(product1 => product1.category.id === e.currentTarget.id);
        titleProduct1.innerText = productCategory1.category.number1;
        const productsButton1 = products1.filter(product1 => product1.category.id === e.currentTarget.id);
        cartsProducts1(productsButton1);
      } 
      else {
        titleProduct1.innerText = "All the products";
        cartsProducts1(products1);
      }

  })
});

function updateMenuBtn1() {
  menuBtn1 = document.querySelectorAll(".menu_btn1");

  menuBtn1.forEach(button1 => {
      button1.addEventListener("click", addToCart1);
  });
}

let productInCart1;

let productInCartLs1 = localStorage.getItem("product1-in-cart");

if (productInCartLs1) {
  productInCart1 = JSON.parse(productInCartLs1);
  updateNumber1();
} else {
  productInCart1 = [];
}

function addToCart1(e) {
  const idButton1 = e.currentTarget.id;
  const productAdded1 = products1.find(product1 => product1.id === idButton1);
  if(productInCart1.some(product1 => product1.id === idButton1)) {
      const index1 = productInCart1.findIndex(product1 => product1.id === idButton1); 
      productInCart1[index1].count1++;
  } else {
    productAdded1.count1 = 1;
      productInCart1.push(productAdded1);
  }

  updateNumber1();

  localStorage.setItem("product1-in-cart", JSON.stringify(productInCart1));
}

function updateNumber1() {
  let newNumber1 = productInCart1.reduce((acc1, product1) => acc1 + product1.count1, 0);
  number1.innerText = newNumber1;
}
