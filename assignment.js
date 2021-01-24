//https://github.com/shabbir420/assignment-js

//kilometerToMeter

function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  return meter;
}
var result = kilometerToMeter(27);

//hotelCostCalculator

function hotelCost(night) {
  var cost = 0;
  if (night <= 10) {
    cost = night * 100;
  } else if (night <= 20) {
    var firstPart = 10 * 100;
    var remaining = night - 10;
    var secondPart = remaining * 80;
    cost = firstPart + secondPart;
  }
  else {
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = night - 20;
    var thirdPart = remaining * 50;
    cost = firstPart + secondPart + thirdPart;
  }
  return cost;
}
var count = hotelCost(15);
console.log(count);

//budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
  var watchCost = watch * 50;
  var mobileCost = mobile * 100;
  var laptopCost = laptop * 500;
  var totalCost = watchCost + mobileCost + laptopCost;
  return totalCost;
}
var resultCost = budgetCalculator(4, 2, 2);

//megaFriend 

function megaFriend() {
  let myFriends = ["shabbir", "hasan", "rahim", "sihab"]
  let biggestFridend = myFriends[0];
  for (i = 0; i > myFriends.length; i++) {
    if (myFriends[i] > biggestFridend) {
      biggestFridend = myFriends[i];
    }
  }
  return biggestFridend
}

