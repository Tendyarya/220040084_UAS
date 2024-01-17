const header = document.querySelector("header");

window.addEventListener (
    "scroll",function(){
        header.classList.toggle ("sticky",this.window.scrollY >0);
    }
)
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links');
  
    navbarToggle.addEventListener('click', function() {
      navbarLinks.classList.toggle('show');
    });
  });
  let cartItems = [];
let total = 0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartItemsElement.innerHTML = '';
  total = 0;

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = total.toFixed(2);
}
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navIcon = document.querySelector('.nav-icon');

    menuIcon.addEventListener('click', function () {
        navIcon.classList.toggle('responsive');
    });
});
