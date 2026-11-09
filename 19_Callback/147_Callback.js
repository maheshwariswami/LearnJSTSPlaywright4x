function placeOrder(orderId, callback) {
    console.log(`Placing order with ID: ${orderId}`);
    callback(orderId);
}

placeOrder("100 Burger", function(orderId) {
    console.log(`Order with ID: ${orderId} has been placed successfully.`);
});

function printOrderDetails(orderId) {
    console.log(`Printing details for order ID: ${orderId}`);
}

placeOrder("200 Pizza", printOrderDetails);

