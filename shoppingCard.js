const cartButton = document.querySelector("[data-cart-button]");
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");

export function setupShoppingCard() {}

// Add items to cart
// Remove items from cart
// Show/hide cart button when it has no items or when it goes from 0 to 1 item
// Persist multiple pages
// Calculate an accurate total
// Handle multiple of the same item in the card

// Show/hide cart when clicked
cartButton.addEventListener("click", () => {
  cartItemsWrapper.classList.toggle("invisible");
});
