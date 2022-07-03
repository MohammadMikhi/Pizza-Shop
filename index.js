var amount = document.getElementById("amount");
var total = document.getElementById("total");
var modalTotal = document.getElementById("modalTotal");
var classicAmount = document.getElementById('amount1')
    , margheritaAmount = document.getElementById('amount2')
    , pestoAmount = document.getElementById('amount3');
var classicName = document.getElementById('pizza1'),
    margheritaName = document.getElementById('pizza2'),
    pestoName = document.getElementById('pizza3');
function addPizza(price, pizzaType) {
    amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) + price).toFixed(2);
    total.innerHTML = parseInt(total.innerHTML) + 1;
    if (pizzaType == 'Classic') {
        classicName.classList.remove("visually-hidden");
        classicAmount.value = parseInt(classicAmount.value) + 1;
    }
    if (pizzaType == 'Margherita') {
        margheritaName.classList.remove("visually-hidden");
        margheritaAmount.value = parseInt(margheritaAmount.value) + 1;
    }
    if (pizzaType == 'Pesto') {
        pestoName.classList.remove("visually-hidden");
        pestoAmount.value = parseInt(pestoAmount.value) + 1;
    }
    modalTotal.innerHTML = "$" + amount.innerHTML;
}
function buttonMinus(price, pizzaType) {
    if (pizzaType == 'Classic') {
        if (parseInt(classicAmount.value) > 1) {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            classicAmount.value = parseInt(classicAmount.value) - 1;
        }
        else {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            classicAmount.value = parseInt(classicAmount.value) - 1;
            classicName.classList.add("visually-hidden");
        }
    }
    if (pizzaType == 'Margherita') {
        if (parseInt(margheritaAmount.value) > 1) {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            margheritaAmount.value = parseInt(margheritaAmount.value) - 1;
        }
        else {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            margheritaAmount.value = parseInt(margheritaAmount.value) - 1;
            margheritaName.classList.add("visually-hidden");
        }
    }
    if (pizzaType == 'Pesto') {
        if (parseInt(pestoAmount.value) > 1) {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            pestoAmount.value = parseInt(pestoAmount.value) - 1;
        }
        else {
            amount.innerHTML = parseFloat(parseFloat(amount.innerHTML) - price).toFixed(2);
            total.innerHTML = parseInt(total.innerHTML) - 1;
            pestoAmount.value = parseInt(pestoAmount.value) - 1;
            pestoName.classList.add("visually-hidden");
        }
    }
    modalTotal.innerHTML = "$" + amount.innerHTML;
}