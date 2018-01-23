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
      console.log(filteredRestaurants);
    };
  };

  var paint = function(indiceRestaurant){
    // var $container = $("<div />", {"class": "row"});
    var $container = $("<div />");
    var $title = $("<p />", {"src":indiceRestaurant.title, "class": "style-first-restaurant"});
    var $img = $("<img />", {"src":indiceRestaurant.photo, "class": "style-img"});
    // var $modal = $("modal" {"class":"modal fade", "id":"ventana1"})

    $title.append(indiceRestaurant.title);
    $img.append(indiceRestaurant.photo);
    // $container.append($containerCol);
    $container.append($title);
    $container.append($img);
    // $container.append($containerCol);
    $("#food").prepend($container);
  }
