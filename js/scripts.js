var youthPrice;
var adultPrice;
var seniorPrice;

function Movie (filmName, rating, imgUrl, showTime, timeValue){
  this.filmName = filmName;
  this.rating = rating;
  this.imgUrl = imgUrl;
  this.showTime = showTime;
  this.timeValue = timeValue;
}

Movie.prototype.ratingCheck = function() {
  if(this.rating === "R") {
    return true;
  } else {
    return false;
  }
};

var appendMovie = function(movie) {
  debugger;
  var text = "<li class='col-md-4 thumbnail'><div><center><img src='" + movie.imgUrl + "' alt='" + movie.filmName + "'></center><div class='caption'><center><h3>" + movie.filmName + "</h3></center><button class='btn btn-primary btn-block btn-modal' data-toggle='modal' data-target='#videoModal'>Watch the trailer!</button><center>";
  for (var i in movie.showTime){
    text += "<button class='showTime btn btn-primary' value='" + movie.timeValue[i] + "' data-toggle='modal' data-target='#frontModal'>" + movie.showTime[i] + "</button>";
  }

  text += "</center></div></div></div></li>";
  $("ul#moiveList").append(text);
};

var setMatineePrices = function() {
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

var blackmass = new Movie ("Black Mass", "R", "img/blackmass.jpg", ["4:30p", "6:20p", "8:10p", "10:00p"], ["1630", "1820", "2010", "2200"]);
var everest = new Movie ("Everest iMax 3D", "PG-13", "img/everest_imax.jpg", ["1:00p", "4:05p", "7:05p", "10:05p"], ["1300", "1605", "1905", "2205"]);
var grandma = new Movie ("Grandma", "NR", "img/grandmaposter.jpg", ["2:00p", "4:10p", "6:50p", "9:00p"], ["1400", "1610", "1850", "2100"]);
var minions2 = new Movie ("Minions 2", "PG", "img/minionsposter2.jpg", ["2:30p", "4:20p", "6:10p", "9:00p"], ["1430", "1620", "1810", "2100"]);
var scorchtrials = new Movie ("Scorch Trials", "PG-13", "img/scorchtrialsposter.jpg", ["3:30p", "5:20p", "7:10p", "9:40p"], ["1530", "1720", "1910", "2140"]);

var movieList = [];
movieList.push(blackmass);
movieList.push(everest);
movieList.push(grandma);
movieList.push(minions2);
movieList.push(scorchtrials);

for (var i in movieList){
  appendMovie(movieList[i]);
}

$(".showTime").click(function(){
  var time = parseInt($(this).val());
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

  $("#stopVideo").click(function() {
    stopVideo();
  });

  $("#clear").click(function() {
    debugger;
    $(".youth_price").empty();
    $(".adult_price").empty();
    $(".senior_price").empty();
    $(".totalPurchase").empty();
    $("#buyTicket").show();
    $("#purchased").hide();
    $("input.youth_ticket").val("");
    $("input.adult_ticket").val("");
    $("input.senior_ticket").val("");
     youthResult = 0;
     adultResult = 0;
     seniorResult = 0;
  });

}); // end of document
