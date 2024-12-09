// Select DOM elements
const itemInput = document.getElementById('itemInput');
const detailsInput = document.getElementById('detailsInput');
const imageInput = document.getElementById('imageInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const shoppingList = document.getElementById('shoppingList');

// Array to store shopping list items
let items = [];


// Function to render the shopping list
function renderList() {
    shoppingList.innerHTML = '';

     // Add item name
     const itemName = document.createElement('strong');
     itemName.textContent = item.name;
     listItem.appendChild(itemName);
}

// Add item details
if (item.details) {
    const itemDetails = document.createElement('p');
    itemDetails.textContent = `Details: ${item.details}`;
    listItem.appendChild(itemDetails);
}