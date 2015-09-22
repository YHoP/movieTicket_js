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


var calculateTicketPrice = function(time, age){
  if (isMatinee) {
    return 5;
  }else {
    if(age < 18){
      return 6;
    }else if (age >= 65){
      return 8;
    } else{
      return 10;
    }
  }
};

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

$( ".youth_ticket" ).keyup(function() {
  var numOfTickets = parseInt($("input.youth_ticket").val());
  youthResult = getTotal(numOfTickets, 7);
  var youthResultText = "$ " + getTotal(numOfTickets, 7) + ".00";
  $(".youth_price").text(youthResultText);
  $(".total_price").text(totalPrice(youthResult, adultResult, seniorResult));

  });

$( ".adult_ticket" ).keyup(function() {
  var numOfTickets = parseInt($("input.adult_ticket").val());
  adultResult = getTotal(numOfTickets, 10);
  var adultResultText = "$ " + getTotal(numOfTickets, 10) + ".00";

  $(".adult_price").text(adultResultText);
  $(".total_price").text(totalPrice(youthResult, adultResult, seniorResult));
  });

$( ".senior_ticket" ).keyup(function() {
  var numOfTickets = parseInt($("input.senior_ticket").val());
  seniorResult = getTotal(numOfTickets, 8)
  var seniorResultText = "$ " + getTotal(numOfTickets, 8) + ".00";

  $(".senior_price").text(seniorResultText);
  $(".total_price").text(totalPrice(youthResult, adultResult, seniorResult));
  });

  $("#clear").click(function() {
//fix this
    $("input.youth_ticket").val("");
    $("input.adult_ticket").val("");
    $("input.senior_ticket").val("");
     youthResult = 0;
     adultResult = 0;
     seniorResult = 0;

  });





}); // end of document
