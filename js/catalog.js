/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
state.cart = new Cart([]);
state.cart.items = [];
// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in state.allProducts) {
const newOption = state.allProducts[i];
const optionElem = document.createElement('option');
optionElem.setAttribute('value', newOption.name);
optionElem.innerText = newOption.name;
selectElement.appendChild(optionElem);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
   const selectElementValue = document.getElementById('items').value;
  
  // TODO: get the quantity
  const itemQunatity = document.getElementById('quantity').value;
  
  // TODO: using those, add one item to the Cart
  state.cart.items.push({
    name: selectElementValue, 
    quantity: itemQunatity,
    
  });
  console.log(state.cart);
}
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() { 
  const cartCount = document.getElementById('itemCount');
  cartCount.innerText = state.cart.items.length;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  
  const itemName = document.getElementById('items').value;
  
   const itemQunatity = document.getElementById('quantity').value;
  
  // TODO: Add a new element to the cartContents div with that information
  const cartContentsElem = document.getElementById('cartContents');
  const cartItem = document.createElement('p');
  cartItem.innerText = `${itemName}, ${itemQunatity}`;
  cartContentsElem.appendChild(cartItem);

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
