function TimberPatch(type, boardFeet, manhours, employees) = {
  this.type = type;
  this.boardFeet = boardFeet;
  this.manhours = time;
  this.employeers = employees;

  //scrape web for currentMarketRate
  var typeValue = type * currentMarketRate;
  var laborCost = (manhours * 30);
  var fuel      = (manhours/employees) * 20;

  this.value = function( typeValue, boardFeet, laborCost, fuel) {
    return ((typeValue * boardFeet) - (laborCost + fuel))
  };

  this.toString = function () {
    return "This timber patch has " this.boardFeet " board feet of " + this.type + " and will take " + this.time " hours to harvest";
  };
}

