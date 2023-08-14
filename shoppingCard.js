import items from "./items.json";
import formatCurrency from "./utilities/formatCurrency.js";

const cartButton = document.querySelector("[data-cart-button]");
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");
let shoppingCart = [];
const IMG_SOURCE = "https://dummyimage.com/210x130";
const cartItemTemplate = document.querySelector("#cart-item-template");
const cartItemContainer = document.querySelector("[data-cart-items]");
const cartQuantity = document.querySelector("[data-cart-quantity]");
const cartTotal = document.querySelector("[data-cart-total]");
const cart = document.querySelector("[data-cart]");

export function setupShoppingCard() {
  renderCart();
}

// Remove items from cart
// Show/hide cart button when it has no items or when it goes from 0 to 1 item
// Persist multiple pages

// Show/hide cart when clicked
cartButton.addEventListener("click", () => {
  cartItemsWrapper.classList.toggle("invisible");
});

// Add items to cart
// Handle the click event for adding
// Handle multiple of the same item in the card
// Calculate an accurate total

export function addToCart(id) {
  const existingItem = shoppingCart.find((entry) => entry.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    shoppingCart.push({ id: id, quantity: 1 });
  }

  renderCart();
}

function renderCart() {
  if (shoppingCart.length === 0) {
    hideCart();
  } else {
    showCart();
    renderCartItems();
  }
}

function hideCart() {
  cart.classList.add("invisible");
  cartItemsWrapper.classList.add("invisible");
}

function showCart() {
  cart.classList.remove("invisible");
}

function renderCartItems() {
  cartQuantity.textContent = shoppingCart.length;

  const totalCents = shoppingCart.reduce((sum, entry) => {
    const item = items.find((i) => entry.id === i.id);
    return sum + item.priceCents * entry.quantity;
  }, 0);

  cartTotal.textContent = formatCurrency(totalCents / 100);

  cartItemContainer.innerHTML = "";
  shoppingCart.forEach((entry) => {
    const item = items.find((i) => entry.id === i.id);

    const cartItem = cartItemTemplate.content.cloneNode(true);

    const container = cartItem.querySelector("[data-item]");
    container.dataset.itemId = item.id;

    const name = cartItem.querySelector("[data-name]");
    name.textContent = item.name;

    const price = cartItem.querySelector("[data-price]");
    price.textContent = formatCurrency(
      (item.priceCents * entry.quantity) / 100
    );

    if (entry.quantity > 1) {
      const quantity = cartItem.querySelector("[data-quantity]");
      quantity.textContent = `x${entry.quantity}`;
    }

    const image = cartItem.querySelector("[data-image]");
    image.setAttribute(
      "src",
      `${IMG_SOURCE}/${item.imageColor}/${item.imageColor}`
    );

    cartItemContainer.append(container);
  });
}
