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
    youthPrice = 5;
    adultPrice = 5;
    seniorPrice = 5;
};

var setInitialPrices = function() {
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
var youthResult = 0;
var adultResult = 0;
var seniorResult = 0;
var totalPurchase = 0;
$("#purchased").hide();

$(".showTime").click(function(){
  console.log($(this));
  var time = parseInt($(this).val());
  console.log(time);
  if(isMatinee(time)){
    setMatineePrices();
  } else {
    setInitialPrices();
  }

  $(".youth").text(youthPrice);
  $(".adult").text(adultPrice);
  $(".senior").text(seniorPrice);
});

$( ".youth_ticket" ).keyup(function() {
  var numOfTickets = parseInt($("input.youth_ticket").val());
  youthResult = getTotal(numOfTickets, youthPrice);
  var youthResultText = "$ " + youthResult + ".00";

  $(".youth_price").text(youthResultText);
  totalPurchase = totalPrice(youthResult, adultResult, seniorResult);
  $(".total_price").text(totalPurchase);
  });

$( ".adult_ticket" ).keyup(function() {
  var numOfTickets = parseInt($("input.adult_ticket").val());
  adultResult = getTotal(numOfTickets, adultPrice);
  var adultResultText = "$ " + adultResult + ".00";

  $(".adult_price").text(adultResultText);
  totalPurchase = totalPrice(youthResult, adultResult, seniorResult);
  $(".total_price").text(totalPurchase);
  });

$( ".senior_ticket" ).keyup(function() {
  var numOfTickets = parseInt($("input.senior_ticket").val());
  seniorResult = getTotal(numOfTickets, seniorPrice);
  var seniorResultText = "$ " + seniorResult + ".00";

  $(".senior_price").text(seniorResultText);
  totalPurchase = totalPrice(youthResult, adultResult, seniorResult);
  $(".total_price").text(totalPurchase);
  });

  $("#purchase").click(function(){
    $("#buyTicket").hide();
    $("#purchased").show();
    $(".totalPurchase").text(totalPurchase);
  });

  $("#clear").click(function() {
    stopVideo();
    $("input.youth_ticket").val("");
    $("input.adult_ticket").val("");
    $("input.senior_ticket").val("");
     youthResult = 0;
     adultResult = 0;
     seniorResult = 0;
  });

}); // end of document
