function addPizza(price){
 var amount=document.getElementById("amount");
 var total=document.getElementById("total");
 amount.innerHTML=parseFloat(parseFloat(amount.innerHTML)+price).toFixed(2);
 total.innerHTML=parseInt(total.innerHTML)+1;
}