// an array with all of our cart items
var cart = [];
var source = $('#cart-template').html();
var template = Handlebars.compile(source);

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $('.cart-list').empty();
  var cartTotal = 0;
  for (i = 0; i < cart.length; i++) {
    var newHTML = template({ item: cart[i].name, price: cart[i].price, tally: cart[i].tally, totalPrice: cart[i].totalPrice });
    //console.log(cart[i]);
    cartTotal += cart[i].totalPrice;
    $('.cart-list').append(newHTML);
  }
  $('.total').empty();
  $('.total').append(cartTotal)
}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display.
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)

  var itemExists = false;

  for (i = 0; i < cart.length; i++) {
    if (cart[i].name === item.name) {
      cart[i].tally += 1;
      cart[i].totalPrice = cart[i].price * cart[i].tally;
      itemExists = true;
    }
  }
    if (!itemExists) {
      cart.push(item);
      cart[cart.length-1].tally = 1;
      cart[cart.length-1].totalPrice = cart[cart.length-1].price;
    }
}

var removeItem = function(clicked) {
  console.log("remove was clicked");
  itemName = clicked.closest('p').attr("class");
  for (i = 0; i < cart.length; i++) {
    if(cart[i].name === itemName) {
      console.log("it matches" + itemName);
      cart[i].tally -= 1;
    }
  }
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  $('.cart-list').empty();
  cart = [];
  cartTotal = 0;
  updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');
});

$('.row').on('click', '.add-to-cart', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data();
  //console.log(item);
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

$('.shopping-cart').on('click', '.remove', function() {
  var clicked = $(this);
  removeItem(clicked);
  updateCart();
})

// update the cart as soon as the page loads!
updateCart();
