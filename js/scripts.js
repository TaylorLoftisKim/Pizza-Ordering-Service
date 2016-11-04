// Back End Logic

function Pizza(size, topping, price) {
  this.pizzaSize = [];
  this.pizzaToppings = [];
  this.pizzaPrice = 0;
}

Pizza.prototype.details = function() {
  var orderDetails = this.pizzaSize + " pizza with" + this.pizzaToppings + " toppings"
  return orderDetails;
}

Pizza.prototype.priceCalc = function()  {
  var result = 0;
  if (this.Size === "small")  {
    return result = 4;
  }else if (this.Size === "medium") {
    return result = 6;
  }else if (this.Size === "large") {
    return result = 8;
  }else if (this.Size === "xl") {
    return result = 10;
  }
}




// Front End Logic

$(document).ready(function()  {
  $("button#placeOrder").submit(function(event) {

  var thisPizza = new Pizza;
  var newSize = $('input:radio[name="size"]:checked').val();
  var newSauce = $('input:radio[name="sauce"]:checked').val();
  var newMeat = $('input:radio[name="meat"]:checked').val();
  var newVeggie = $('input:radio[name="veggie"]:checked').val();
  var newSide = $('input:radio[name="side"]:checked').val();
  var thisSize = new Size(newSize);
  var thisSauce = new Sauce(newSauce);
  var thisTopping = new Topping(newTopping);

  thisPizza.baseAdd = baseAdd(thisSize);
  thisPizza.baseAdd = baseAdd(thisSauce);
  thisPizza.baseAdd = baseAdd(thisTopping);
  thisPizza.priceCalc();

  $("#total").show();
  $("total").append(orderDetails);

  event.preventDefault

  });
});
