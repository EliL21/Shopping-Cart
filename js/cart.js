/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tbodyElem = document.getElementsByTagName('tbody')[0];
  tbodyElem.innerHTML = ''
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  const tbodyElem = document.getElementsByTagName('tbody')[0];
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  for(let i = 0; i < state.cart.items.length;i++){
    const newItem = state.cart.items[i];
    const trElem = document.createElement('tr');
    const tdItemElem = document.createElement('td');
    const tdDeleteElem = document.createElement('td');
    const tdQuantityElem = document.createElement('td');
    tdItemElem.innerText = newItem.name;
    tdQuantityElem.innerText = newItem.quantity;
    tdDeleteElem.innerText = 'delete';
    trElem.append(tdDeleteElem, tdItemElem, tdQuantityElem);
    tbodyElem.appendChild(trElem);
  }
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
