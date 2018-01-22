var restaurants = [{food:'Comida China'},
                   {food:'Comida Mexicana'},
                   {food:'Comida Italiana'},
                   {food:'Mediterranea'},
                   {food:'japonesa'}]

//inicializas el documento html con jquery
$(document).ready(function(){
  //invocas el id del input utilizando el metodo keyup y que se le aplique la funcion
  $("#searcher").keyup(getInput);
  //código a ejecutar
  // inicias la funcion para filtrar el input
  function getInput(){
    // se declara una variable que sera igual al input
    // utilizando metodos para obtner el valor, que sean siempre minusculas y no tome en cuneta espacios
    var search = $("#searcher").val().toLowerCase().trim();
    //te consolea el valor del input
    console.log(search);
    compare(search);
  };
  // Se inicializa función compare para comparar el resultado de la función anterior con la data
  function compare(search) {
    var result = restaurants.filter(function(rest){
      if (rest.food == search) {
         return restaurants.food.toLowerCase().indexOf(search) >= 0;
      }
      // paint(result);
    });
    console.log(result);
 };

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
});




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
