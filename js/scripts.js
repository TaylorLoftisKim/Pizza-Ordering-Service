// Back End Logic //
function Pizza(size, sauce, meat, veggie, side) {
  this.sizePrice = size;
  this.saucePrice = sauce;
  this.meatPrice = meat;
  this.veggiePrice = veggie;
  this.sidePrice = side;
};
Pizza.prototype.price = function() {
  var pizzaDetails = this.pizzaSize + " pizza with" + this.pizzaToppings + " toppings"
  return pizzaDetails;
};
Pizza.prototype.priceCalc = function()  {
  return this.sizePrice + this.saucePrice + this.meatPrice + this.veggiePrice + this.sidePrice;
};

// Front End Logic //

$(document).ready(function()  {
  $("button#placeOrder").click(function(event) {

  var newSize = parseInt($('input:radio[name="size"]:checked').val());
  var newSauce = parseInt($('input:radio[name="sauce"]:checked').val());
  var newMeat = parseInt($('input:radio[name="meat"]:checked').val());
  var newVeggie = parseInt($('input:radio[name="veggie"]:checked').val());
  var newSide = parseInt($('input:radio[name="side"]:checked').val());

  var pizzaOrder = new Pizza(newSize, newSauce, newMeat, newVeggie, newSide);

  var orderPrice = pizzaOrder.priceCalc();

    $("#total").append(orderPrice);
    $("#total").show();

  event.preventDefault();
  });
});
