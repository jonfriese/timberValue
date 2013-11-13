function TimberPatch(type, boardFeet, manhours, employees) = {
  this.type = type;
  this.boardFeet = boardFeet;
  this.manhours = manhours;
  this.employees = employees;

  var laborCost = (manhours * 30);
  var fuel      = (manhours/employees) * 20;
  var currentMarketRate;
  function getRate(type) {
    //scrape web for currentMarketRate using type
    //currentMarketRate = scrapeValue
  }

  this.value = function( currentMarketRate, boardFeet, laborCost, fuel) {
    return ((currentMarketRate * boardFeet) - (laborCost + fuel))
  };

  this.toString = function () {
    return "This timber patch has " this.boardFeet " board feet of " + this.type + " and will take " + this.manhours " man hours to harvest";
  };
}

