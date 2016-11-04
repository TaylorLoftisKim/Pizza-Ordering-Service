// Back End Logic

function Pizza(size, topping, price) {
  this.pizzaSize = [];
  this.pizzaToppings = [];
  this.pizzaPrice = 0;
}

Pizza.prototype.priceCalc = function() {






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

  event.preventDefault

  });
});
