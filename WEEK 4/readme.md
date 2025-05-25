# 🛍️ React Cashier Application - WEEK 4 Assignment

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

Welcome to the ReactJS Cashier Application project for the WEEK 4 assignment! This project transforms the functionality of a previous terminal-based cashier application into an interactive web user interface.

## ✨ Key Features

*   **Dynamic Product Listing:** Displays a list of available products with their names and prices.
*   **Interactive Cart Management:**
    *   Easily add products to the shopping cart.
    *   Update item quantities directly in the cart.
    *   Remove items from the cart.
*   **Automatic Total Calculation:** The shopping cart total is calculated in real-time.
*   **Printable Sales Receipt:** Generate a detailed sales receipt after the checkout process.
*   **Basic Responsive User Interface:** Designed with a fundamental responsive layout.

## 🚀 Technologies Used

This project is built using the following modern technologies:

*   **ReactJS:** A JavaScript library for building dynamic and component-centric user interfaces.
    *   **Functional Components & Hooks:** Utilizes `useState` for state management and `useEffect` (where applicable for side effects).
    *   **Props:** For passing data between components.
    *   **JSX:** For expressive UI syntax.
*   **JavaScript (ES6+):** The core programming language.
*   **CSS3:** For basic styling and interface layout.
*   **Node.js & npm:** For the development environment and package management (though the final application runs in the browser).

## ⚙️ How to Run the Project Locally

To run this application on your computer:

1.  **Prerequisites:**
    *   Ensure you have **Node.js** (which includes npm) installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
    *   Verify your installation by opening a terminal and running `node -v` and `npm -v`.

2.  **Clone the Repository (If you haven't already):**
    ```bash
    git clone "your_repository_link" 
    cd "your_repository_directory/Full-Stack-Web-Developer-/WEEK 4/aplikasi kasir react" 
    ```
    *(Note: Replace `"your_repository_link"` and `"your_repository_directory"` with your actual repository link and local path. Adjust the `cd` path to point directly to the `aplikasi kasir react` folder within your WEEK 4 directory.)*

3.  **Navigate to the Project Directory:**
    Ensure you are inside the React project directory:
    ```bash
    cd "aplikasi kasir react" 
    ```
    *(If your `README.md` is in the `WEEK 4` folder, and `aplikasi kasir react` is a subfolder, this step is crucial after cloning.)*

4.  **Install Dependencies:**
    Run the following command to install all necessary packages:
    ```bash
    npm install
    ```

5.  **Run the Application:**
    Once the installation is complete, start the development server:
    ```bash
    npm start
    ```
    This will automatically open the application in your default browser (usually at `http://localhost:3000`).

## 📸 Application Screenshots

Here are some glimpses of the React Cashier Application in action:

| Initial View / Product List                                        | Cart with Items                                                       | Sales Receipt                                                              |
| :------------------------------------------------------------------: | :--------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
| ![Product List](aplikasi%20kasir%20react/screenshots/daftar_produk.png) | ![Shopping Cart](aplikasi%20kasir%20react/screenshots/keranjang.png) | ![Sales Receipt](aplikasi%20kasir%20react/screenshots/struk_belanja.png) |

*(**Note:** Ensure the screenshot filenames above, like `daftar_produk.png`, `keranjang.png`, and `struk_belanja.png`, match your actual image files located in the `WEEK 4/aplikasi kasir react/screenshots/` folder. Remember to replace `aplikasi%20kasir%20react` with `aplikasi-kasir-react` or similar if you've renamed the folder to remove spaces.)*

## 💡 React Concepts Applied

*   **Components:** The application is broken down into reusable components (`ProductList`, `ProductItem`, `Cart`, `CartItem`, `Receipt`, `App`).
*   **State:** Used in the `App` component to manage `cartItems` and `receipt`.
*   **Props:** Used to pass data and functions from parent to child components.
*   **Event Handling:** Manages user interactions such as button clicks.
*   **Conditional Rendering:** Displays UI elements conditionally (e.g., "Cart is empty" message or the receipt view).
*   **Lists & Keys:** Renders lists of items using the `.map()` method with unique `key` props.

---

Enjoy trying it out! Feel free to explore the code. For questions or feedback, please refer to the project's issue tracker or contact the repository owner. :wink:
