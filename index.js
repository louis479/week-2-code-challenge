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
    shoppingList.innerHTML = ''; // Clear current list

    items.forEach((item, index) => {
        const listItem = document.createElement('li');

        // Add item name
        const itemName = document.createElement('strong');
        itemName.textContent = item.name;
        listItem.appendChild(itemName);

        // Add item details
        if (item.details) {
            const itemDetails = document.createElement('p');
            itemDetails.textContent = `Details: ${item.details}`;
            listItem.appendChild(itemDetails);
        }

        // Add item image
        if (item.image) {
            const itemImage = document.createElement('img');
            itemImage.src = item.image;
            itemImage.alt = `${item.name} image`;
            listItem.appendChild(itemImage);
        }

        // Toggle purchased status
        listItem.addEventListener('click', () => {
            items[index].purchased = !items[index].purchased;
            listItem.classList.toggle('purchased');
        });

        // Add purchased class if applicable
        if (item.purchased) {
            listItem.classList.add('purchased');
        }

        shoppingList.appendChild(listItem);
    });
}

// Event listener for adding items
addButton.addEventListener('click', () => {
    const name = itemInput.value.trim();
    const details = detailsInput.value.trim();
    const image = imageInput.value.trim();

    if (name !== '') {
        items.push({ name, details, image, purchased: false });
        itemInput.value = ''; // Clear inputs
        detailsInput.value = '';
        imageInput.value = '';
        renderList();
    } else {
        alert('Please enter an item name.');
    }
});

// Event listener for clearing the list
clearButton.addEventListener('click', () => {
    items = []; // Clear the array
    renderList();
});

// Initial render
renderList();