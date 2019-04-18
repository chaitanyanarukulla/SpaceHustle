let fuelMasterPrice = 100;
let orgMasterPrice = 350;
let equipMasterPrice = 800;
let holdsToBuy = 0;
let holdsToSell = 0;

let buy, sell, fuel, org, equip;

function product(){
  if (buy) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
    if (fuel) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
      if (data.emptyHolds < allPorts[data.currentSector].fuel) { // empty holds is less than fuel on the port
        if (data.credits > (fuelMasterPrice * data.emptyHolds * allPorts[data.currentSector].sellPercent)) {
          holdsToBuy = data.emptyHolds;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (data.credits / (fuelMasterPrice * allPorts[data.currentSector].sellPercent));
        }
      } else { // empty holds is greater than port fuel

        if (data.credits > (fuelMasterPrice * allPorts[data.currentSector].fuel * allPorts[data.currentSector].sellPercent)) {
          holdsToBuy = allPorts[data.currentSector].fuel;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (allPorts[data.currentSector].fuel - (data.credits * fuelMasterPrice * allPorts[data.currentSector].sellPercent));
        }
      }
      data.fuelHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
      data.credits -= (fuelMasterPrice * holdsToBuy * allSectors[data.currentSector].sellPercent);
      allPorts[data.currentSector].fuel -= holdsToBuy; // Reduce port product
      data.emptyHolds -= holdsToBuy;
    }

    if (org) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
      if (data.emptyHolds < allPorts[data.currentSector].organics) { // empty holds is less than fuel on the port
        if (data.credits > (orgMasterPrice * data.emptyHolds * allPorts[data.currentSector].sellPercent)) {
          holdsToBuy = data.emptyHolds;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (data.credits / (orgMasterPrice * allPorts[data.currentSector].sellPercent));
        }
      } else { // empty holds is greater than port fuel

        if (data.credits > (orgMasterPrice * allPorts[data.currentSector].organics * allPorts[data.currentSector].sellPercent)) {
          holdsToBuy = allPorts[data.currentSector].organics;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (allPorts[data.currentSector].organics - (data.credits * orgMasterPrice * allPorts[data.currentSector].sellPercent));
        }
      }
      data.orgHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
      data.credits -= (orgMasterPrice * holdsToBuy * allPorts[data.currentSector].sellPercent);
      allPorts[data.currentSector].organics -= holdsToBuy; // Reduce port product
      data.emptyHolds -= holdsToBuy;
    }

    if (equip) { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
      if (data.emptyHolds < allPorts[data.currentSector].equipment) { // empty holds is less than fuel on the port
        if (data.credits > (equipMasterPrice * data.emptyHolds * allPorts[data.currentSector].sellPercent)) {
          holdsToBuy = data.emptyHolds;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (data.credits / (equipMasterPrice * allPorts[data.currentSector].sellPercent));
        }
      } else { // empty holds is greater than port fuel

        if (data.credits > (equipMasterPrice * allPorts[data.currentSector].equipment * allPorts[data.currentSector].sellPercent)) {
          holdsToBuy = allPorts[data.currentSector].equipment;
        } else { // Only buying partial with credits on hand
          holdsToBuy = (allPorts[data.currentSector].equipment - (data.credits * equipMasterPrice * allports[data.currentSector].sellPercent));
        }
      }
      data.equipHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
      data.credits -= (equipMasterPrice * holdsToBuy * allPorts[data.currentSector].sellPercent);
      allPorts[data.currentSector].equipment -= holdsToBuy; // Reduce port product
      data.emptyHolds -= holdsToBuy;
    }
  }

  if (sell) { // THIS IS THE PORT PORT PORT Buying.  The data is selling
    if (fuel) { // THIS IS THE PORT PORT PORT Buying.  The data is selling
      if (data.fuelHolds < allPorts[data.currentSector].fuel) { // Fuel holds less than what the port is buying
        holdsToSell = data.fuelHolds;
      } else { // fuel holds is more than what the port is buying
        holdsToSell = allPorts[data.currentSector].fuel;
      }
      data.fuelHolds -= holdsToSell;
      data.credits += (holdsToSell * allPorts[data.currentSector].buyPercent * fuelMasterPrice);
      data.emptyHolds += holdsToSell;
    }
    if (org) { // THIS IS THE PORT PORT PORT Buying.  The data is selling
      if (data.orgHolds < allPorts[data.currentSector].organics) { // Fuel holds less than what the port is buying
        holdsToSell = data.orgHolds;
      } else { // fuel holds is more than what the port is buying
        holdsToSell = allPorts[data.currentSector].organics;
      }
      data.orgHolds -= holdsToSell;
      data.credits += (holdsToSell * allPorts[data.currentSector].buyPercent * orgMasterPrice);
      data.emptyHolds += holdsToSell;
    }
    if (equip){ // THIS IS THE PORT PORT PORT Buying.  The data is selling
      if (data.fuelHolds < allPorts[data.currentSector].equipment) { // Fuel holds less than what the port is buying
        holdsToSell = data.equipHolds;
      } else { // fuel holds is more than what the port is buying
        holdsToSell = allPorts[data.currentSector].equipment;
      }
      data.equipHolds -= holdsToSell;
      data.credits += (holdsToSell * allPorts[data.currentSector].buyPercent * equipMasterPrice);
      data.emptyHolds += holdsToSell;
    }
  }
  buy = false;
  sell = false;
  fuel = false;
  org = false;
  equip= false;
}


function tradeProduct(event){
  // sectorFuel sectorOrganic sectorEquipment
  event.preventDefault(event);
  document.getElementById('sectorFuel').addEventListener('click', checkProduct);
  // need fuel true
  // sell true
}

function checkProduct(){
  if (sectorFuel)
    fuel = true;
    if (buySellRule[0] === 'Buy'){
      buy = true;
    } else{
      sell = true;
    }
    if (sectorOrganics)
    org = true;
    if (buySellRule[1] === 'Buy'){
      buy = true;
    } else{
      buy = true;
    }
    if (sectorEquip)
    equip = true;
    if (buySellRule[2] === 'Buy'){
      buy = true;
    } else{
      buy = true;
    }
    product();
}


function display(){
  console.log('Current Credits: ', data.credits);
  console.log('BUY | SELL: ', buy, ' | ', sell);
  console.log('FUEL | ORG | EQUIP:', fuel, ' | ', org, ' | ', equip);
  console.log('Max Holds: | EMPTY HOLDS', data.maxHolds, ' | ', data.emptyHolds);
  console.log('Holds: Fuel | Org | Equip : ', data.fuelHolds, ' | ', data.orgHolds, ' | ', data.equipHolds);
  console.log('Port:  Fuel | Org | Equip: ',allPorts[data.currentSector].fuel, ' | ', allPorts[data.currentSector].organics, ' | ', allPorts[data.currentSector].equipment);
}
