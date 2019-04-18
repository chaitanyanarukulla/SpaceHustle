let fuelMasterPrice = 100;
let orgMasterPrice = 350;
let equipMasterPrice = 800;
let emptyHolds = 0;
let holdsToBuy = 0;
let holdsToSell = 0;

let buy = false;
let sell = false;
let fuel = false;
let org = false;
let equip= false;

function product(){
  if (buy) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
    console.log('Buy is True');
    if (fuel) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
      if (emptyHolds < allPorts[player.currentSector].fuel) { // empty holds is less than fuel on the port
        console.log('sell %: ', allSectors[player.currentSector].sellPercent);
        if (player.credits > (fuelMasterPrice * emptyHolds * allSectors[player.currentSector].sellPercent)) {
          holdsToBuy = emptyHolds;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (player.credits / (fuelMasterPrice * allSectors[player.currentSector].sellPercent));
        }
      } else { // empty holds is greater than port fuel

        if (player.credits > (fuelMasterPrice * allPorts[player.currentSector].fuel * allSectors[player.currentSector].sellPercent)) {
          holdsToBuy = allPorts[player.currentSector].fuel;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (allPorts[player.currentSector].fuel - (player.credits * fuelMasterPrice * allSectors[player.currentSector].sellPercent));
        }
      }
      player.fuelHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
      player.credits -= (fuelMasterPrice * holdsToBuy * allSectors[player.currentSector].sellPercent);
      allPorts[player.currentSector].fuel -= holdsToBuy; // Reduce port product
      emptyHolds -= holdsToBuy;
    }

    if (org) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
      if (emptyHolds < allPorts[player.currentSector].organics) { // empty holds is less than fuel on the port
        if (player.credits > (orgMasterPrice * emptyHolds * allSectors[player.currentSector].sellPercent)) {
          holdsToBuy = emptyHolds;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (player.credits / (orgMasterPrice * allSectors[player.currentSector].sellPercent));
        }
      } else { // empty holds is greater than port fuel

        if (player.credits > (orgMasterPrice * allPorts[player.currentSector].organics * allSectors[player.currentSector].sellPercent)) {
          holdsToBuy = allPorts[player.currentSector].organics;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (allPorts[player.currentSector].organics - (player.credits * orgMasterPrice * allSectors[player.currentSector].sellPercent));
        }
      }
      player.orgHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
      player.credits -= (orgMasterPrice * holdsToBuy * allSectors[player.currentSector].sellPercent);
      allPorts[player.currentSector].organics -= holdsToBuy; // Reduce port product
      emptyHolds -= holdsToBuy;
    }

    if (equip) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
      if (emptyHolds < allPorts[player.currentSector].equipment) { // empty holds is less than fuel on the port
        if (player.credits > (equipMasterPrice * emptyHolds * allSectors[player.currentSector].sellPercent)) {
          holdsToBuy = emptyHolds;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (player.credits / (equipMasterPrice * allSectors[player.currentSector].sellPercent));
        }
      } else { // empty holds is greater than port fuel

        if (player.credits > (equipMasterPrice * allPorts[player.currentSector].equipment * allSectors[player.currentSector].sellPercent)) {
          holdsToBuy = allPorts[player.currentSector].equipment;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (allPorts[player.currentSector].equipment - (player.credits * equipMasterPrice * allSectors[player.currentSector].sellPercent));
        }
      }
      player.equipHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
      player.credits -= (equipMasterPrice * holdsToBuy * allSectors[player.currentSector].sellPercent);
      allPorts[player.currentSector].equipment -= holdsToBuy; // Reduce port product
      emptyHolds -= holdsToBuy;
    }
  }

  if (sell) { // THIS IS THE PORT PORT PORT Buying.  The player is selling
    if (fuel) { // THIS IS THE PORT PORT PORT Buying.  The player is selling
      if (player.fuelHolds < allPorts[player.currentSector].fuel) { // Fuel holds less than what the port is buying
        holdsToSell = player.fuelHolds;
      } else { // fuel holds is more than what the port is buying
        holdsToSell = allPorts[player.currentSector].fuel;
      }
      player.fuelHolds -= holdsToSell;
      player.credits += (holdsToSell * allSectors[player.currentSector].buyPercent * fuelMasterPrice);
      emptyHolds += holdsToSell;
    }
    if (org) { // THIS IS THE PORT PORT PORT Buying.  The player is selling
      if (player.orgHolds < allPorts[player.currentSector].organics) { // Fuel holds less than what the port is buying
        holdsToSell = player.orgHolds;
      } else { // fuel holds is more than what the port is buying
        holdsToSell = allPorts[player.currentSector].organics;
      }
      player.orgHolds -= holdsToSell;
      player.credits += (holdsToSell * allSectors[player.currentSector].buyPercent * orgMasterPrice);
      emptyHolds += holdsToSell;
    }
    if (equip){ // THIS IS THE PORT PORT PORT Buying.  The player is selling
      if (player.fuelHolds < allPorts[player.currentSector].equipment) { // Fuel holds less than what the port is buying
        holdsToSell = player.equipHolds;
      } else { // fuel holds is more than what the port is buying
        holdsToSell = allPorts[player.currentSector].equipment;
      }
      player.equipHolds -= holdsToSell;
      player.credits += (holdsToSell * allSectors[player.currentSector].buyPercent * equipMasterPrice);
      emptyHolds += holdsToSell;
    }
  }
  display();
}

function display(){
  console.log('Current Credits: ', player.credits);
  console.log('BUY | SELL: ', buy, ' | ', sell);
  console.log('FUEL | ORG | EQUIP:', fuel, ' | ', org, ' | ', equip);
  console.log('Max Holds: | EMPTY HOLDS', player.maxHolds, ' | ', emptyHolds);
  console.log('Holds: Fuel | Org | Equip : ', player.fuelHolds, ' | ', player.orgHolds, ' | ', player.equipHolds);
  console.log('Port:  Fuel | Org | Equip: ',allPorts[player.currentSector].fuel, ' | ', allPorts[player.currentSector].organics, ' | ', allPorts[player.currentSector].equipment);
}

