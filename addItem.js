var newItem = function () {
  var otherSource = $('#add-item-template').html();
  var template = Handlebars.compile(otherSource);
  var newHTML = template({ 
    name: $(".item-name").val(), 
    price: $(".item-price").val(), 
    url: $(".item-url").val()
  });
    $('.last').append(newHTML)
}

$(".submit-button").on("click", function () {
  newItem();
  $(".item-name").val("");
  $(".item-price").val(null);
  $(".item-url").val("");
})