var restaurants = ['Comida China',
                   'Comida Mexicana',
                   'Comida Italiana',
                   'Comida Mediterránea',
                   'Comida Japonesa']

$(document).ready(function() { //inicializas el documento html con jquery
  $("#searcher").keyup(filtered); //ivocas el id del input utilizando el metodo keyup y que se le aplique la sig funcion
  //código a ejecutar
  function filtered(){ // inicias la funcion para filtrar el input
    var search = $("#searcher").val().toLowerCase().trim(); // se declara una variable uqe sera igual a l input utilizando algunos metodos para obtner el valor, que sean siempre minusculas y no tome en cuneta espacios
    console.log(search); //te da el valor del input
    compare(search);
  };

  function compare(search) {
    var result = restaurants.filter(function(rest){
      return rest.restaurants == search;
    });
      console.log(result);
      paint(result);
    };

  function paint(result){
    if (compare == 'comida china'){
      return $("#chinese_food").css('display','block');
    };
  };
  console.log(paint);

});
  // function compare(search){
  //   var resultInput = restaurante.filter(function(rest){
  //     if (rest.restaurantes == search) {
  //       return $("#chinese_food").remove('display','none').add('display','block');
  //
  //     }
  //     console.log(rest.restaurantes == search);
  //     console.log(resultInput);
  //   }) //utilizas el metodo filter para filtrar el input
  //   //   return restaurant.restaurantes == search; //comparas el input con lo que hay en el objeto
  //   // });
  //   // console.log(resultInput);
  // };



// var restaurants = restaurante["restaurant"];
// console.log(restaurants);
//
// function loadPage() {
//   $("#searcher").keyup(filterRestaurants);
// }
//
// function filterRestaurants(){
//   var searchRestaurant = $("#searcher").val().toLowerCase();
//   console.log(searchRestaurant);
//   if($("#searcher").val().trim().length > 0) {
//     var resultSearch = restaurante.filter(function(food) {
//       return food.restaurant == searchRestaurant;
//       console.log(resultSearch);
//     });
//     $("#food").css("display", "block");
//   }
// }
//
