// Back End Logic
function Pizza(size, topping, price) {
  this.pizzaSize = [];
  this.pizzaTopping = [];
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
  } else if (this.Size === "medium") {
    return result = 6;
  } else if (this.Size === "large") {
    return result = 8;
  } else if (this.Size === "xl") {
    return result = 10;
  }

  if (this.Meat === "pepperoni") {
    return result = 1;
  } else if (this.Meat === "sausage") {
    return result = 1;
  } else if (this.Meat === "bacon") {
    return result = 2;
  } else if (this.Meat === "canadian")  {
    return result = 2;
  } else if (this.Meat === "none")  {
    return result = 0;
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
  var thisMeat = new Meat(newMeat);
  var thisVeggie = new Veggie(newVeggie);
  var thisSide = new Side(newVeggie);

  thisPizza.baseAdd = baseAdd(thisSize);
  thisPizza.baseAdd = baseAdd(thisSauce);
  thisPizza.baseAdd = baseAdd(thisMeat);
  thisPizza.baseAdd = baseAdd(thisVeggie)
  thisPizza.baseAdd = baseAdd(thisSide)
  thisPizza.priceCalc();

  $("#total").show();
  $("total").append(orderDetails);

  event.preventDefault

  });
});
