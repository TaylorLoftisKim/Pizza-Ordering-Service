// Front End Logic
$(document).ready(function()  {
  $("button#placeOrder").submit(function(event) {

    var newSize = $('input:radio[name="size"]:checked').val();
    var newSauce = $('input:radio[name="sauce"]:checked').val();
    var newToppings = toppingAssembly();
    var thisSize = new Size(newSize);
    var thisSauce = new Sauce(newSauce);
    var thisToppings = new Toppings(newToppings);
  });
});
