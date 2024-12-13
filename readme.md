# Lucius Shopping Ltd

Welcome to the **Lucius Shopping Ltd** application! This web application is a simple and intuitive tool to manage shopping lists while showcasing various clothing items. It includes interactive features like adding and managing items and provides an elegant display of product categories such as shirts, shorts, and jeans.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [How to Use](#how-to-use)
- [Code Overview](#code-overview)
- [License](#license)

## Features

- Add items to a shopping list with details and optional images.
- Mark items as purchased or unpurchased.
- Delete individual items or clear the entire list.
- Display curated clothing categories with images and descriptions.
- Responsive design for accessibility on various devices.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling and layout.
- **JavaScript**: Interactive functionalities.

## File Structure

```plaintext
/
|-- index.html        # Main page with shopping list functionality
|-- about.html        # About page with application details
|-- contact.html      # Contact page with company information
|-- confirmation.html # Confirmation page for added items
|-- style.css         # Stylesheet for all pages
|-- index.js          # JavaScript for shopping list interactions
```

## How to Use

1. Clone the repository and open the project folder.

2. Launch `index.html` in a browser to access the main page.

3. Use the following pages for specific functionalities:

   - **`index.html`**: Create and manage your shopping list.
   - **`about.html`**: Learn more about the application.
   - **`contact.html`**: Find contact details for the company.
   - **`confirmation.html`**: View the confirmation after adding items.

## Code Overview

### index.html

This is the main page that:

- Displays a shopping list interface.
- Allows users to add items with a name, details, and optional image URL.
- Showcases curated categories (Shirts, Shorts, Jeans) with product images and descriptions.
- Includes navigation links to other pages.

### about.html

Provides information about the application's purpose and benefits.

### contact.html

Contains contact details, including email, phone, and address, for user inquiries.

### confirmation.html

Displays a confirmation message after an item is added to the shopping list.

### style.css

Defines the styling for all pages, including layout, fonts, colors, and responsive design.

### index.js

Handles interactive functionalities for the shopping list:

- **Adding Items**: Users can input item name, details, and image URL to create an entry.
- **Marking Items**: Items can be marked as purchased or unpurchased.
- **Deleting Items**: Individual items or the entire list can be cleared.
- **Dynamic Rendering**: Updates the shopping list display whenever changes occur.
- **Redirection**: Redirects users to the confirmation page upon successful item addition.

### Key JavaScript Functions

- `renderList()`: Updates the shopping list in real-time.
- `addItem(event)`: Adds a new item to the list.
- `togglePurchased(index)`: Toggles the purchased status of an item.
- `deleteItem(index)`: Deletes an item from the list.
- `clearList()`: Clears the entire shopping list.

## License

This project is licensed under the MIT License.

---

Enjoy using **Lucius Shopping Ltd** for an organized and stress-free shopping experience!
