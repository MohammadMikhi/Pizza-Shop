function addPizza(price, pizzaType) {
    var amount = document.getElementById("amount");
    var total = document.getElementById("total");
    amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) + price).toFixed(2);
    total.innerHTML = parseInt(total.innerHTML) + 1;
    if (pizzaType == 'Classic') {
        document.getElementById("pizza1").className = "cart-modal-item d-flex align-items-center";
        document.getElementById("amount1").value = parseInt(document.getElementById("amount1").value) + 1;
    }
    if (pizzaType == 'Margherita') {
        document.getElementById("pizza2").className = "cart-modal-item d-flex align-items-center";
        document.getElementById("amount2").value = parseInt(document.getElementById("amount2").value) + 1;
    }
    if (pizzaType == 'Pesto') {
        document.getElementById("pizza3").className = "cart-modal-item d-flex align-items-center";
        document.getElementById("amount3").value = parseInt(document.getElementById("amount3").value) + 1;
    }
    document.getElementById("modalTotal").innerHTML = "$" + document.getElementById("amount").innerHTML;
}
function buttonMinus(price, pizzaType) {
    var amount = document.getElementById("amount");
    var total = document.getElementById("total");
    if (pizzaType == 'Classic') {
        if (parseInt(document.getElementById('amount1').value) > 1) {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            document.getElementById("amount1").value = parseInt(document.getElementById("amount1").value) - 1;
        }
        else {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            document.getElementById("amount1").value = parseInt(document.getElementById("amount1").value) - 1;
            document.getElementById("pizza1").className = "cart-modal-item d-flex align-items-center visually-hidden";
        }
    }
    if (pizzaType == 'Margherita') {
        if (parseInt(document.getElementById('amount2').value) > 1) {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            document.getElementById("amount2").value = parseInt(document.getElementById("amount2").value) - 1;
        }
        else {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            document.getElementById("amount2").value = parseInt(document.getElementById("amount2").value) - 1;
            document.getElementById("pizza2").className = "cart-modal-item d-flex align-items-center visually-hidden";
        }
    }
    if (pizzaType == 'Pesto') {
        if (parseInt(document.getElementById('amount3').value) > 1) {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            document.getElementById("amount3").value = parseInt(document.getElementById("amount3").value) - 1;
        }
        else {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            document.getElementById("amount3").value = parseInt(document.getElementById("amount3").value) - 1;
            document.getElementById("pizza3").className = "cart-modal-item d-flex align-items-center visually-hidden";
        }
    }
    document.getElementById("modalTotal").innerHTML = "$" + document.getElementById("amount").innerHTML;
}