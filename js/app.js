$(document).ready(function(loadPage){
  $("#searcher").keyup(getInput);

});

  function getInput(){
    var search = $("#searcher").val().toLowerCase();
    if($("#searcher").val().trim().length > 0){
      for(var i = 0; i > restaurants.length; i++){
        var indiceRestaurant = restaurants[i];
      };
      var filteredRestaurants = restaurants.filter(function(indiceRestaurant){
        return indiceRestaurant.food.toLowerCase().indexOf(search) >=0;
      });
      $("#food").empty();
        filteredRestaurants.forEach(function(indiceRestaurant) {
            paint(indiceRestaurant);
        });
    } else {
        $("#food").empty();
        filteredRestaurants.forEach(function(indiceRestaurant) {
            paint(indiceRestaurant);
        });
    };
  };

  var paint = function(indiceRestaurant){
    var $container = $("<div />");
    var $title = $("<p />", {"src":indiceRestaurant.title, "class": "style-first-restaurant"});
    var $img = $("<img />", {"src":indiceRestaurant.photo, "class": "style-img"});

    $title.append(indiceRestaurant.title);
    $img.append(indiceRestaurant.photo);
    $container.append($title);
    $container.append($img);
    $("#food").prepend($container);

  }

  // var clean = function(){
  //     $("#food").val("");
  // }
