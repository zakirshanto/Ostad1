let usedPromoCode = null;  // Prevent multiple uses of the same promo code

// Apply Promo Code function
function applyPromoCode() {
    const promoCodeInput = document.getElementById("promo-code").value;
    const subtotal = calculateSubtotal();  // Function to calculate the current subtotal
    let discount = 0;

    // Prevent multiple uses of the same promo code
    if (usedPromoCode === promoCodeInput) {
        displayMessage("You have already used this promo code.");
        return;
    }

    // Validate promo code and apply discount
    switch (promoCodeInput) {
        case "ostad10":
            discount = subtotal * 0.10;  // 10% discount
            usedPromoCode = promoCodeInput;
            break;
        case "ostad5":
            discount = subtotal * 0.05;  // 5% discount
            usedPromoCode = promoCodeInput;
            break;
        default:
            displayMessage("Invalid promo code. Please try again.");
            return;
    }

    // Calculate final total after discount
    const finalTotal = subtotal - discount;

    // Update the cart summary
    updateCartSummary(subtotal, discount, finalTotal);

    // Display success message
    displayMessage(`Promo code applied! Discount: $${discount.toFixed(2)}`);
}

// Display success or error message
function displayMessage(message) {
    alert(message);  // You can use a custom modal instead of alert for a better user experience
}

// Update Cart Summary
function updateCartSummary(subtotal, discount, finalTotal) {
    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("discount").innerText = discount.toFixed(2);
    document.getElementById("final-total").innerText = finalTotal.toFixed(2);
}

// Calculate the Subtotal (this function will change depending on your cart items)
function calculateSubtotal() {
    // For demo purposes, assume a fixed subtotal of $100.00.
    // You should replace this with the actual calculation based on your cart items.
    return 100.00;
}
