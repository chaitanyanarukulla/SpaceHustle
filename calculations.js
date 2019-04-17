let fuelMasterPrice = 1000;
let orgMasterPrice = 3500;
let equipMasterPrice = 8000;
let buyPercent = .5;
let sellPercent = .9;


let fuelHolds = 0;
let orgHolds = 0;
let equipHolds = 0;
let maxHolds = 0;
let emptyHolds = (maxHolds - (fuelHolds + orgHolds + equipHolds));
let credits = 1000;
let holdsToBuy = 0;
let holdsToSell = 0;

let portFuel = 3000;
let portOrg = 3000;
let portEquip = 3000;
let buy, sell, fuel, org, equip;

function productBuySell(){
  if (buy) {
    if (fuel) {
      if (emptyHolds < portFuel) { // empty holds is less than port fuel
        if (credits > (fuelMasterPrice * emptyHolds * sellPercent)) {
          holdsToBuy = emptyHolds;
        } else { // Only buying partial with credits on hand
            holdsToBuy = (emptyHolds - (credits * fuelMasterPrice * sellPercent));
        }
      } else { // empty holds is greater than port fuel

        if (credits > (fuelMasterPrice * portFuel * sellPercent)) {
          holdsToBuy = portFuel;
        } else { // Only buying partial with credits on hand
            holdsToBuy = (portFuel - (credits * fuelMasterPrice * sellPercent));
        }
      }
      fuelHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
      credits -= (fuelMasterPrice * holdsToBuy * sellPercent);
      portFuel -= holdsToBuy; // Reduce port product
    }


    if (org) {
      if (emptyHolds < portOrg) { // empty holds is less than port fuel
        if (credits > (orgMasterPrice * emptyHolds * sellPercent)) {
          holdsToBuy = emptyHolds;
        } else { // Only buying partial with credits on hand
            holdsToBuy = (emptyHolds - (credits * orgMasterPrice * sellPercent));
        }
      } else { // empty holds is greater than port fuel

        if (credits > (orgMasterPrice * portOrg * sellPercent)) {
          holdsToBuy = portOrg;
        } else { // Only buying partial with credits on hand
            holdsToBuy = (portOrg - (credits * orgMasterPrice * sellPercent));
        }
      }
      orgHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
      credits -= (orgMasterPrice * holdsToBuy * sellPercent);
      portOrg -= holdsToBuy; // Reduce port product
    }
    if (equip) {
      if (emptyHolds < portEquip) { // empty holds is less than port fuel
        if (credits > (equipMasterPrice * emptyHolds * sellPercent)) {
          holdsToBuy = emptyHolds;
        } else { // Only buying partial with credits on hand
            holdsToBuy = (emptyHolds - (credits * equipMasterPrice * sellPercent));
        }
      } else { // empty holds is greater than port fuel

        if (credits > (equipMasterPrice * equipFuel * sellPercent)) {
          holdsToBuy = portEquip;
        } else { // Only buying partial with credits on hand
            holdsToBuy = (portEquip - (credits * equipMasterPrice * sellPercent));
        }
      }
      equipHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
      credits -= (equipMasterPrice * holdsToBuy * sellPercent);
      portEquip -= holdsToBuy; // Reduce port product

    }
  }
  if (sell) {
      if (fuel) {
        if (fuelHolds < portFuel) { // Fuel holds less than what the port is buying
          holdsToSell = fuelHolds;
        } else { // fuel holds is more than what the port is buying
          holdsToSell = portFuel;
        }
        fuelHolds -= holdsToSell;
        credits += (holdsToSell * buyPercent * fuelMasterPrice);
      }
      if (org) {
        if (orgHolds < portFuel) { // Fuel holds less than what the port is buying
          holdsToSell = orgHolds;
        } else { // fuel holds is more than what the port is buying
          holdsToSell = portOrg;
        }
        orgHolds -= holdsToSell;
        credits += (holdsToSell * buyPercent * orgMasterPrice);
      }
      if (equip){
        if (fuelHolds < portEquip) { // Fuel holds less than what the port is buying
          holdsToSell = equipHolds;
        } else { // fuel holds is more than what the port is buying
          holdsToSell = portEquip;
        }
        equipHolds -= holdsToSell;
        credits += (holdsToSell * buyPercent * equipMasterPrice);
      }
  }
}





