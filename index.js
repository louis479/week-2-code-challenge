document.addEventListener('DOMContentLoaded', () => {
    // Select important DOM elements
    const inputField = document.getElementById('itemInput');
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
        listItem.textContent = item.text;
        listItem.className = item.purchased ? 'purchased' : '';
  
        // Toggle purchased status on click
        listItem.addEventListener('click', () => {
          items[index].purchased = !items[index].purchased;
          renderList();
        });
  
        shoppingList.appendChild(listItem);
      });
    }
  
    // Event listener for adding items
    addButton.addEventListener('click', () => {
      const newItemText = inputField.value.trim();
      if (newItemText !== '') {
        items.push({ text: newItemText, purchased: false });
        inputField.value = ''; // Clear input field
        renderList();
      }
    });
  
    // Event listener for clearing the list
    clearButton.addEventListener('click', () => {
      items = []; // Clear the array
      renderList();
    });
  
    // Initial render
    renderList();
  });
  