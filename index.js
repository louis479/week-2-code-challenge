// Get references to HTML elements
const itemInput = document.getElementById("itemInput");
const detailsInput = document.getElementById("detailsInput");
const imageInput = document.getElementById("imageInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const shoppingList = document.getElementById("shoppingList");

// Array to store shopping list items
let items = [];

// Function to render the shopping list
function renderList() {
    shoppingList.innerHTML = "";  // Clear existing list

    // Create list items based on the "items" array
    items.forEach((item, index) => {
        const li = document.createElement("li");

        const itemDetails = `
            <strong>${item.name}</strong><br>
            ${item.details || "No details provided."}<br>
            <img src="${item.image || "https://via.placeholder.com/150"}" alt="${item.name}" width="100"><br>
            <button class="toggleButton">${item.purchased ? "Unmark as purchased" : "Mark as purchased"}</button>
            <button class="deleteButton">Delete</button>
        `;
        
        li.innerHTML = itemDetails;
        
        // Add event listener for marking as purchased/unpurchased
        const toggleButton = li.querySelector(".toggleButton");
        toggleButton.addEventListener("click", () => togglePurchased(index));
        
        // Add event listener for deleting the item
        const deleteButton = li.querySelector(".deleteButton");
        deleteButton.addEventListener("click", () => deleteItem(index));
        
        // Append the list item to the shopping list
        shoppingList.appendChild(li);
    });
}

// Function to add an item to the shopping list
function addItem(event) {
    event.preventDefault();  // Prevent form submission or page reload

    const itemName = itemInput.value.trim();
    const itemDetails = detailsInput.value.trim();
    const itemImage = imageInput.value.trim();

    // Only add item if the name is not empty
    if (itemName) {
        const newItem = {
            name: itemName,
            details: itemDetails,
            image: itemImage,
            purchased: false
        };
        
        items.push(newItem);
        renderList();  // Re-render the list after adding the item

        // Clear the input fields
        itemInput.value = "";
        detailsInput.value = "";
        imageInput.value = "";

        // Redirect to confirmation page
        window.location.href = "confirmation.html";  // Redirect to the confirmation page
    } else {
        // Alert if the item name is empty
        alert("Please enter a valid item name.");
    }
}

// Function to toggle the purchased status of an item
function togglePurchased(index) {
    items[index].purchased = !items[index].purchased;
    renderList();  // Re-render the list after changing the purchased status
}

// Function to delete an item from the shopping list
function deleteItem(index) {
    items.splice(index, 1);  // Remove the item from the array
    renderList();  // Re-render the list after deleting the item
}

// Function to clear the entire shopping list
function clearList() {
    items = [];
    renderList();  // Re-render the list after clearing
}

// Event listener for the "Add" button
addButton.addEventListener("click", addItem);

// Event listener for the "Clear List" button
clearButton.addEventListener("click", clearList);
