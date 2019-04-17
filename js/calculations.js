let fuelMasterPrice = 100;
let orgMasterPrice = 350;
let equipMasterPrice = 800;
let buyPercent = .9;
let sellPercent = .5;
let fuelHolds = 0;
let orgHolds = 0;
let equipHolds = 0;
let maxHolds = 300;
let emptyHolds = (maxHolds - (fuelHolds + orgHolds + equipHolds));
let credits = 1000000;
let holdsToBuy = 0;
let holdsToSell = 0;

let portFuel = 3000;
let portOrg = 3000;
let portEquip = 3000;
let buy = false;
let sell = false;
let fuel = false;
let org = false;
let equip= false;

function product(){
  if (buy) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
    console.log('Buy is True');
    if (fuel) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
      console.log('fuel is true for buy');
      console.log('empty holds: ', emptyHolds);
      console.log('port fuel: ', portFuel);
      if (emptyHolds < portFuel) { // empty holds is less than fuel on the port
        console.log('credits: ', credits);
        console.log('fuelmasterprice: ', fuelMasterPrice);
        console.log('sell %: ', sellPercent);
        if (credits > (fuelMasterPrice * emptyHolds * sellPercent)) {
          console.log('Credits available is more than the cost of the fuel');
          console.log('credits: ', credits);
          console.log('cost of product: ', (fuelMasterPrice * emptyHolds * sellPercent));
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
      emptyHolds -= holdsToBuy;
    }

    if (org) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
      console.log('org is true for buy');
      console.log('empty holds: ', emptyHolds);
      console.log('port org: ', portOrg);
      if (emptyHolds < portOrg) { // empty holds is less than fuel on the port
        console.log('credits: ', credits);
        console.log('orgmasterprice: ', orgMasterPrice);
        console.log('sell %: ', sellPercent);
        if (credits > (orgMasterPrice * emptyHolds * sellPercent)) {
          console.log('Credits available is more than the cost of the org');
          console.log('credits: ', credits);
          console.log('cost of product: ', (orgMasterPrice * emptyHolds * sellPercent));
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
      emptyHolds -= holdsToBuy;
    }

    if (equip) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
      console.log('equip is true for buy');
      console.log('empty holds: ', emptyHolds);
      console.log('port equip: ', portEquip);
      if (emptyHolds < portEquip) { // empty holds is less than fuel on the port
        console.log('credits: ', credits);
        console.log('equipmasterprice: ', equipMasterPrice);
        console.log('sell %: ', sellPercent);
        if (credits > (equipMasterPrice * emptyHolds * sellPercent)) {
          console.log('Credits available is more than the cost of the equip');
          console.log('credits: ', credits);
          console.log('cost of product: ', (equipMasterPrice * emptyHolds * sellPercent));
          holdsToBuy = emptyHolds;
        } else { // Only buying partial with credits on hand
            holdsToBuy = (emptyHolds - (credits * equipMasterPrice * sellPercent));
        }
      } else { // empty holds is greater than port fuel

        if (credits > (equipMasterPrice * portEquip * sellPercent)) {
          holdsToBuy = portEquip;
        } else { // Only buying partial with credits on hand
            holdsToBuy = (portEquip - (credits * equipMasterPrice * sellPercent));
        }
      }
      equipHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
      credits -= (equipMasterPrice * holdsToBuy * sellPercent);
      portEquip -= holdsToBuy; // Reduce port product
      emptyHolds -= holdsToBuy;
    }
  }

  if (sell) { // THIS IS THE PORT PORT PORT Buying.  The player is selling
    console.log('sell is true');
      if (fuel) { // THIS IS THE PORT PORT PORT Buying.  The player is selling
        console.log('fuel is true for sell');
        if (fuelHolds < portFuel) { // Fuel holds less than what the port is buying
          holdsToSell = fuelHolds;
        } else { // fuel holds is more than what the port is buying
          holdsToSell = portFuel;
        }
        fuelHolds -= holdsToSell;
        credits += (holdsToSell * buyPercent * fuelMasterPrice);
        emptyHolds += holdsToSell;
      }
      if (org) { // THIS IS THE PORT PORT PORT Buying.  The player is selling
        console.log('org is true for sell');
        if (orgHolds < portFuel) { // Fuel holds less than what the port is buying
          holdsToSell = orgHolds;
        } else { // fuel holds is more than what the port is buying
          holdsToSell = portOrg;
        }
        orgHolds -= holdsToSell;
        credits += (holdsToSell * buyPercent * orgMasterPrice);
        emptyHolds += holdsToSell;
      }
      if (equip){ // THIS IS THE PORT PORT PORT Buying.  The player is selling
        console.log('equip is true for sell');
        if (fuelHolds < portEquip) { // Fuel holds less than what the port is buying
          holdsToSell = equipHolds;
        } else { // fuel holds is more than what the port is buying
          holdsToSell = portEquip;
        }
        equipHolds -= holdsToSell;
        credits += (holdsToSell * buyPercent * equipMasterPrice);
        emptyHolds += holdsToSell;
      }
  }
  // displayData();
}

function display(){
  console.log('Current Credits: ', credits);
  console.log('BUY | SELL: ', buy, ' | ', sell);
  console.log('FUEL | ORG | EQUIP:', fuel, ' | ', org, ' | ', equip);
  console.log('Max Holds: | EMPTY HOLDS', maxHolds, ' | ', emptyHolds);
  console.log('Holds: Fuel | Org | Equip : ', fuelHolds, ' | ', orgHolds, ' | ', equipHolds);
  console.log('Port:  Fuel | Org | Equip: ',portFuel, ' | ', portOrg, ' | ', portEquip);
}

