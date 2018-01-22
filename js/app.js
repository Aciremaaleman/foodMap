$(document).ready(function(loadPage){
  $(".form-control").keyup(getInput);
});
  
  function getInput(){
    var search = $(".form-control").val().toLowerCase();
   
    if($(".form-control").val().trim().lenght > 0){
      for(var i = 0; i > restaurants.length; i++){
        var indiceRestaurant = restaurants[i];
        console.log(indiceRestaurant);
      };
      var filteredRestaurants = restaurants.filter(function(indiceRestaurant){
        return indiceRestaurant.food.toLowerCase().indexOf(search) >= 0;
        console.log(filteredRestaurants);
      });
    };
  };



    //te consolea el valor del input
  
//     compare(search);
//   };
//   // Se inicializa función compare para comparar el resultado de la función anterior con la data
//   function compare(search) {
//     var result = restaurants.filter(function(rest){
//       for()
//       // if (rest.food == search) {
//       //    return restaurants.food.toLowerCase().indexOf(search) >= 0;
//       // }
//       // paint(result);
//     });
//     console.log(result);
//  };

 // function paint(result){
 //   if (result ==  ) {
 //       return contact.name.toLowerCase().indexOf(searchContact) >= 0;
 //
 //   }
 // }

  // function rest(result){
  //   if (compare == 'comida china'){
  //     return $("#chinese_food").css('display','block');
  //   };
  // };
  // console.log(rest());

//cosas que ya hice y no me funcionaron las comento para que no se me olvide
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

//inicializas el documento html con jquery
