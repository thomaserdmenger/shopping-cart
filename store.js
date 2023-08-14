import items from "./items.json";
import formatCurrency from "./utilities/formatCurrency.js";
import { addToCart } from "./shoppingCard.js";
import addGobalEventListener from "./utilities/addGlobalEventListener.js";

const storeItemTemplate = document.querySelector("#store-item-template");
const storeContainer = document.querySelector("[data-store-container]");
const addToCartButton = document.querySelectorAll("[data-add-to-cart-button]");

const IMG_SOURCE = "https://dummyimage.com/420x260";

// REFACTORED SOLUTION
export function setupStore() {
  addGobalEventListener("click", "[data-add-to-cart-button]", (e) => {
    const id = e.target.closest("[data-store-item]").dataset.itemId;
    addToCart(parseInt(id));
  });

  // items.forEach(renderStoreItem); Same as:
  items.forEach((item) => renderStoreItem(item));
}

function renderStoreItem(item) {
  const storeItem = storeItemTemplate.content.cloneNode(true);

  const container = storeItem.querySelector("[data-store-item]");
  container.dataset.itemId = item.id;

  const name = storeItem.querySelector("[data-name]");
  name.textContent = item.name;

  const category = storeItem.querySelector("[data-category]");
  category.textContent = item.category;

  const price = storeItem.querySelector("[data-price]");
  price.textContent = formatCurrency(item.priceCents / 100);

  const image = storeItem.querySelector("[data-image]");
  image.setAttribute(
    "src",
    `${IMG_SOURCE}/${item.imageColor}/${item.imageColor}`
  );

  storeContainer.append(container);
}

// OWN SOlUTION
// const heading2Arr = Array.from(document.querySelectorAll("h2"));
// const heading3Arr = Array.from(document.querySelectorAll("h3"));
// const priceArr = Array.from(document.querySelectorAll("p"));
// const image = Array.from(document.querySelectorAll("img"));

// export function setupStore() {
//   items.forEach((item, index) => {
//     // Render category
//     heading3Arr.forEach((heading, idx) =>
//       idx === index ? (heading.textContent = item.category) : null
//     );

//     // Render color
//     heading2Arr.forEach((heading, idx) =>
//       idx === index ? (heading.textContent = item.name) : null
//     );

//     // Render price
//     priceArr.forEach((price, idx) =>
//       idx === index
//         ? (price.textContent = `$${(item.priceCents / 100).toFixed(2)}`)
//         : null
//     );

//     // Image color
//     image.forEach((img, idx) =>
//       idx === index ? (img.style.backgroundColor = `#${item.imageColor}`) : null
//     );
//   });
// }
