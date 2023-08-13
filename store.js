import items from "./items.json";

const heading2Arr = Array.from(document.querySelectorAll("h2"));
const heading3Arr = Array.from(document.querySelectorAll("h3"));
const priceArr = Array.from(document.querySelectorAll("p"));
const image = Array.from(document.querySelectorAll("img"));

export function setupStore() {
  items.forEach((item, index) => {
    // Render category
    heading3Arr.forEach((heading, idx) =>
      idx === index ? (heading.textContent = item.category) : null
    );

    // Render color
    heading2Arr.forEach((heading, idx) =>
      idx === index ? (heading.textContent = item.name) : null
    );

    // Render price
    priceArr.forEach((price, idx) =>
      idx === index
        ? (price.textContent = `$${(item.priceCents / 100).toFixed(2)}`)
        : null
    );

    // Image color
    image.forEach((img, idx) =>
      idx === index ? (img.style.backgroundColor = `#${item.imageColor}`) : null
    );
  });
}
