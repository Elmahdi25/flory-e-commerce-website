import {
  bag_cart,
  remove_from_card,
  calculate_bag_cart_quantity,
} from "../data/bag_cart.js";
import { products } from "../data/product.js";
import { format_current } from "./utils/money.js";
const js_checkout_items = document.querySelector(".js-checkout-items");
js_checkout_items.innerHTML = "";

bag_cart.forEach((bag_cart_item) => {
  const product_id = bag_cart_item.product_id;
  const product_quantity = bag_cart_item.quantity;
  let matchig_items;
  products.forEach((products_item) => {
    if (product_id === products_item.id) {
      matchig_items = products_item;
    }
  });
  js_checkout_items.innerHTML += `
    <article class="checkout-item checkout-item-container-${product_id}" data-product-id="${product_id}">
                    <p class="checkout-delivery-date">
                        Delivery date: <time datetime="2026-11-24">Tuesday, November 24</time>
                    </p>
    
                    <div class="checkout-item-content">
                        <img class="checkout-product-image" src="../${matchig_items.image}"
                            alt="${matchig_items.name}">
    
                        <div class="checkout-product-details">
                            <h3 class="checkout-product-name">${matchig_items.name}</h3>
                            <p class="checkout-product-price">€${format_current(matchig_items.priceCents)}</p>
    
                            <div class="checkout-product-actions">
                                <span>Quantity: <span class="js-item-quantity">${product_quantity}</span></span>
                                <button type="button" class="js-update-quantity">Update</button>
                                <button type="button" class="js-remove-item" data-product-id="${product_id}">Remove</button>
                            </div>
                        </div>
    
                        <fieldset class="checkout-delivery-options">
                            <legend>Choose a delivery option</legend>
    
                            <label class="checkout-delivery-option">
                                <input type="radio" name="delivery-${product_id}" value="standard" checked>
                                <span>Tuesday, November 24</span>
                                <span>Free shipping</span>
                            </label>
    
                            <label class="checkout-delivery-option">
                                <input type="radio" name="delivery-${product_id}" value="priority">
                                <span>Wednesday, November 18</span>
                                <span>€4.99 shipping</span>
                            </label>
    
                            <label class="checkout-delivery-option">
                                <input type="radio" name="delivery-${product_id}" value="express">
                                <span>Monday, November 16</span>
                                <span>€9.99 shipping</span>
                            </label>
                        </fieldset>
                    </div>
                </article>
    `;
});

const js_remove_item = document.querySelectorAll(".js-remove-item");

js_remove_item.forEach((button) => {
  button.addEventListener("click", () => {
    const product_id = button.dataset.productId;
    const checkout_item_container = document.querySelector(
      `.checkout-item-container-${product_id}`,
    );
    remove_from_card(product_id);
    checkout_item_container.remove();
    update_bag_cart();
  });
});
function update_bag_cart() {
  const js_checkout_item_count = document.querySelector(
    ".js-checkout-item-count",
  );
  const cart_quantity = calculate_bag_cart_quantity();
  js_checkout_item_count.innerHTML = `(${cart_quantity} item)`;
}
update_bag_cart();
