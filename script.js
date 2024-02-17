var products = [
  {
    name: "black chair",
    headline: "soft like cloud",
    price: "15000",
    image:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "blue chair",
    headline: "soft like cloud",
    price: "12000",
    image:
      "https://plus.unsplash.com/premium_photo-1691217596001-ef6cc82a5950?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "red chair",
    headline: "soft like cloud",
    price: "8000",
    image:
      "https://images.unsplash.com/photo-1587579803457-b02a5c72ba23?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkY2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
];

var popular = [
  {
    name: "Traditional Chair",
    headline: "just as old",
    price: "15000",
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "brown wooden chair",
    headline: "soft like cloud",
    price: "12000",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "white padded chair",
    headline: "soft like cloud",
    price: "8000",
    image:
      "https://images.unsplash.com/photo-1586158291800-2665f07bba79?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var cart = [];

function addToCart() {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        cart.push(products[details.target.dataset.index]);
        console.log(cart);
      }
    });
}

function showCart() {
  document.querySelector(".carticon").addEventListener("click", function () {
    document.querySelector(".cartexpnd").style.display = "block";

    var clutter = "";
    cart.forEach(function (product, index) {
      clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
          <div class="w-10 h-10 flex-shrink-0 rounded-lg  overflow-hidden">
          <img class = "w-full h-full object-cover " src = "${product.image}"/>
          </div>    
          <div>
            <h3 class="font-semibold">${product.name}</h3>
            <h5 class="text-sm font-semibold opacity-80">&#8377; ${product.price}</h5>
           </div>
          </div>`;
    });
    document.querySelector(".cartexpnd").innerHTML = clutter;
  });   
}

function addProduct() {
  var clutter = "";
  products.forEach(function (product, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
        <img class = "w-full h-full object-cover bg-zinc-200 rounded-xl overflow-hidden" src = "${product.image}"/>
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                    <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
                  data-index="${index}" class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`;
  });

  document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts() {
  var clutter = "";
  popular.forEach(function (product) {
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
         <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
             <img class="w-full h-full object-cover"
                 src="${product.image}"
                 alt="">
         </div>
         <div class="data py-2 w-full">
             <h1 class="leading-none font-semibold">${product.name}</h1>
             <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
             <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
         </div>
     </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}

showCart();
addToCart();
addPopularProducts();
addProduct();
