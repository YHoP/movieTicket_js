var youthPrice;
var adultPrice;
var seniorPrice;

var movie = function(filmName, rating){
  this.filmName = filmName;
  this.rating = rating;
};

movie.prototype.ratingCheck = function() {
  if(this.rating === "R") {
    return true;
  } else {
    return false;
  }
};


var setMatineePrices = function(){
  debugger;
    youthPrice = 5;
    adultPrice = 5;
    seniorPrice = 5;
};

var setInitialPrices = function() {
  debugger;
  youthPrice = 7;
  adultPrice = 10;
  seniorPrice = 8;
}

var isMatinee = function(time) {
  if (time < 1600){
    return true;
  }else if(time === undefined){
    return "not working";
  } else{
    return false;
  }
};

var getTotal = function(number, price){
    return number * price;
};

var totalPrice = function(resultOne, resultTwo, resultThree) {
  return resultOne + resultTwo + resultThree;
};



$(document).ready(function() {
//debugger;
var youthResult = 0;
var adultResult = 0;
var seniorResult = 0;

$(".btn-time-early").click(function(){
  debugger;
  var time = parseInt($("button.btn-time-early").val());
  console.log(isMatinee(time));
  if(isMatinee(time)){
    setMatineePrices();
  } else {
    setInitialPrices();
  }
  console.log(isMatinee(time));

  $(".youth").text(youthPrice);
  $(".adult").text(adultPrice);
  $(".senior").text(seniorPrice);

});

$(".btn-time-late").click(function(){
  debugger;
  var time = parseInt($("button.btn-time-late").val());
  console.log(isMatinee(time));
  if(isMatinee(time)){
    setMatineePrices();
  } else {
    setInitialPrices();
  }
  console.log(isMatinee(time));

  $(".youth").text(youthPrice);
  $(".adult").text(adultPrice);
  $(".senior").text(seniorPrice);

});

$( ".youth_ticket" ).keyup(function() {
  var numOfTickets = parseInt($("input.youth_ticket").val());
  youthResult = getTotal(numOfTickets, youthPrice);
  var youthResultText = "$ " + youthResult + ".00";
  $(".youth_price").text(youthResultText);
  $(".total_price").text(totalPrice(youthResult, adultResult, seniorResult));

  });

$( ".adult_ticket" ).keyup(function() {
  var numOfTickets = parseInt($("input.adult_ticket").val());
  adultResult = getTotal(numOfTickets, adultPrice);
  var adultResultText = "$ " + adultResult + ".00";

  $(".adult_price").text(adultResultText);
  $(".total_price").text(totalPrice(youthResult, adultResult, seniorResult));
  });

$( ".senior_ticket" ).keyup(function() {
  var numOfTickets = parseInt($("input.senior_ticket").val());
  //change 8 to variable that can be changed in the isMatinee method
  seniorResult = getTotal(numOfTickets, seniorPrice);
  var seniorResultText = "$ " + seniorResult + ".00";

  $(".senior_price").text(seniorResultText);
  $(".total_price").text(totalPrice(youthResult, adultResult, seniorResult));
  });

  $("#clear").click(function() {
    stopVideo();
//fix this
    $("input.youth_ticket").val("");
    $("input.adult_ticket").val("");
    $("input.senior_ticket").val("");
     youthResult = 0;
     adultResult = 0;
     seniorResult = 0;

  });





}); // end of document
