let cart = []; // Array to store cart items

// Simulated user credentials
const validUsername = "admin";
const validPassword = "password123";

// Handle login process
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        document.getElementById("loginContainer").style.display = "none"; // Hide login form
        document.getElementById("productSection").style.display = "block"; // Show product section
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password.");
        return false;
    }
}

// Add product to cart
function addToCart(productName, productPrice) {
    cart.push({ productName, productPrice }); // Add item to the cart array
    console.log(cart); // Log the cart for debugging
    alert(productName + " added to cart!");
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        // Calculate total price
        let totalAmount = cart.reduce((total, item) => total + item.productPrice, 0);
        // Display checkout details
        alert("Checkout successful! Total: $" + totalAmount.toFixed(2));
        
        // Clear cart after checkout
        cart = [];
        console.log(cart); // Log the empty cart to verify it's cleared
    }
}

