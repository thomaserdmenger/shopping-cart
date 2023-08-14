import items from "./items.json";
import formatCurrency from "./utilities/formatCurrency.js";

const cartButton = document.querySelector("[data-cart-button]");
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");
let shoppingCart = [];
const IMG_SOURCE = "https://dummyimage.com/210x130";
const cartItemTemplate = document.querySelector("#cart-item-template");
const cartItemContainer = document.querySelector("[data-cart-items]");

export function setupShoppingCard() {}

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
  shoppingCart.push({ id: id, quantity: 1 });
  renderCart();
}

function renderCart() {
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

    const quantity = cartItem.querySelector("[data-quantity]");
    quantity.textContent = `x${entry.quantity}`;

    const image = cartItem.querySelector("[data-image]");
    image.setAttribute(
      "src",
      `${IMG_SOURCE}/${item.imageColor}/${item.imageColor}`
    );

    cartItemContainer.append(container);
  });
}
