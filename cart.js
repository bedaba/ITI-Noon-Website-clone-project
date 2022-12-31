/* cart page*/
let productInCart3 = localStorage.getItem("product1-in-cart");
productInCart3 = JSON.parse(productInCart3);

const ContainerEmptyCart1 = document.querySelector("#empty-cart1");
const ContainerProductsCart1 = document.querySelector("#cart-products1");
const ContainerProceduresCart1 = document.querySelector("#cart-procedures1");
const ContainerBuyCart1 = document.querySelector("#cart-buy1");
let buttonsDelete1 = document.querySelectorAll(".delete-product-cart1");
const buttonEmpty1 = document.querySelector("#cart-procedures-empty1");
const ContainerTotal1 = document.querySelector("#total1");
const buttonBuy1 = document.querySelector("#cart-procedures-buy1");


function loadProductsCart1() {
    if (productInCart3 && productInCart3.length > 0) {

        ContainerEmptyCart1.classList.add("disabled");
        ContainerProductsCart1.classList.remove("disabled");
        ContainerProceduresCart1.classList.remove("disabled");
        ContainerBuyCart1.classList.add("disabled");
    
        ContainerProductsCart1.innerHTML = "";
    
        productInCart3.forEach(product1 => {
    
            const div = document.createElement("div");
            div.classList.add("cart-product1");
            div.innerHTML = `
                <tr class="menu_card">
                  <th scope="row" class="border-0">
                    <div class="p-2 menu_image">
                      <img class="cart-product-image" src="${product1.image}" alt="${product1.title}"
                        width="70" class="img-fluid rounded shadow-sm">
                      <div class="ml-3 d-inline-block align-middle cart-product-title">
                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">${product1.title}</a></h5>
                        <span class="text-muted font-weight-normal font-italic d-block">Category: ${product1.category.number1}</span>
                      </div>
                    </div>
                  </th>
                  <td class="border-0 align-middle cart-product-price"><strong>$${product1.price}.00</strong></td>
                  <td class="border-0 align-middle cart-product-count"><strong>${product1.count1}</strong></td>
                  <td class="border-0 align-middle cart-product-subtotal">
                    <strong>$${product1.price * product1.count1}.00</strong>
                  </td>
                  <td class="border-0 align-middle">
                    <a href="#" class="text-danger delete-product-cart1" id="${product1.id}">
                      <i class="bi bi-trash-fill"></i>
                    </a>
                  </td>
                </tr>
            `;
    
            ContainerProductsCart1.append(div);
        })
    
    } else {
        ContainerEmptyCart1.classList.remove("disabled");
        ContainerProductsCart1.classList.add("disabled");
        ContainerProceduresCart1.classList.add("disabled");
        ContainerBuyCart1.classList.add("disabled");
    }

    updateDeleteButton1();
    updateTotal1();
}

loadProductsCart1();

function updateDeleteButton1() {
    buttonsDelete1 = document.querySelectorAll(".delete-product-cart1");

    buttonsDelete1.forEach(button1 => {
        button1.addEventListener("click", removeFromCart1);
    });
}

function removeFromCart1(e) {
    const idButton1 = e.currentTarget.id;
    const index1 = productInCart3.findIndex(product1 => product1.id === idButton1);
    
    productInCart3.splice(index1, 1);
    loadProductsCart1();

    localStorage.setItem("product1-in-cart", JSON.stringify(productInCart3));

}

buttonEmpty1.addEventListener("click", emptyCart1);
function emptyCart1() {
  productInCart3.length = 0;
    localStorage.setItem("product1-in-cart", JSON.stringify(productInCart3));
    loadProductsCart1();
}


function updateTotal1() {
    const totalCalculated1 = productInCart3.reduce((acc1, product1) => acc1 + (product1.price * product1.count1), 0);
    total1.innerText = `$${totalCalculated1}.00`;
}

buttonBuy1.addEventListener("click", buyCart1);
function buyCart1() {

  productInCart3.length = 0;
    localStorage.setItem("product1-in-cart", JSON.stringify(productInCart3));
    
    ContainerEmptyCart1.classList.add("disabled");
    ContainerProductsCart1.classList.add("disabled");
    ContainerProceduresCart1.classList.add("disabled");
    ContainerBuyCart1.classList.remove("disabled");
}