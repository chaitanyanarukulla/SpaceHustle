'use strict';

function product(toDo, product){
  let fuelMasterPrice = 100;
  let orgMasterPrice = 350;
  let equipMasterPrice = 800;
  let holdsToBuy = 0;
  let holdsToSell = 0;
  let sell = allPorts[data.currentSector].sellPercent;
  if ((product === 'fuel') && (toDo === 'Buy')){
    calculateProductSell(toDo, allPorts[data.currentSector].fuel, fuelMasterPrice, data.fuelHolds);
    data.fuelHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
    data.credits -= Math.floor(fuelMasterPrice * holdsToBuy * sell);
    allPorts[data.currentSector].fuel -= holdsToBuy; // Reduce port product
    data.emptyHolds -= holdsToBuy;

  } else if ((product === 'fuel') && (toDo === 'Sell')){
    calculateProductSell(toDo, allPorts[data.currentSector].fuel, fuelMasterPrice, data.fuelHolds);
    data.fuelHolds -= holdsToSell;
    data.credits += Math.floor(holdsToSell * allPorts[data.currentSector].buyPercent * fuelMasterPrice);
    data.emptyHolds += holdsToSell;
    allPorts[data.currentSector].fuel -= holdsToSell;

  } else if ((product === 'org') && (toDo === 'Buy')){
   calculateProductSell(toDo, allPorts[data.currentSector].organics, orgMasterPrice, data.orgHolds)
    data.orgHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
    data.credits -= Math.floor(orgMasterPrice * holdsToBuy * sell);
    allPorts[data.currentSector].organics -= holdsToBuy; // Reduce port product
    data.emptyHolds -= holdsToBuy;

  } else if ((product === 'org') && (toDo === 'Sell')) {
    calculateProductSell(toDo, allPorts[data.currentSector].organics, orgMasterPrice, data.orgHolds);
    data.orgHolds -= holdsToSell;
    data.credits += Math.floor(holdsToSell * allPorts[data.currentSector].buyPercent * orgMasterPrice);
    data.emptyHolds += holdsToSell;
    allPorts[data.currentSector].organics -= holdsToSell;
  }

  else if ((product === 'equip')&& (toDo === 'Buy')) {
   calculateProductSell(toDo, allPorts[data.currentSector].equipment, equipMasterPrice, data.equipHolds);
    data.equipHolds += holdsToBuy; // Buying all empty hold.  Has enough credits
    data.credits -= Math.floor(equipMasterPrice * holdsToBuy * sell);
    allPorts[data.currentSector].equipment -= holdsToBuy; // Reduce port product
    data.emptyHolds -= holdsToBuy;

  } else if ((product === 'equip') && (toDo === 'Sell')) {
    calculateProductSell(toDo, allPorts[data.currentSector].equipment, equipMasterPrice, data.equipHolds);
    data.equipHolds -= holdsToSell;
    data.credits += Math.floor(holdsToSell * allPorts[data.currentSector].buyPercent * equipMasterPrice);
    data.emptyHolds += holdsToSell;
    allPorts[data.currentSector].equipment -= holdsToSell;

  }
  updatePlayerStats();
  updateSectorStats();

  function calculateProductSell(toDo, portProduct, productMasterPrice, shipProduct){
    if (toDo === 'Buy') { // THIS IS THE PORT PORT PORT Selling  (Player Buying)
      if (data.emptyHolds < portProduct) { // empty holds is less than port product
        if (data.credits > (productMasterPrice * data.emptyHolds * sell)) {
          holdsToBuy = data.emptyHolds;
        } else { // Only buying partial with credits on hand
          holdsToBuy = Math.floor(data.credits / (productMasterPrice * sell));
        }
      } else { // empty holds is greater than port product
        if (data.credits > (productMasterPrice * portProduct * sell)) {
          holdsToBuy = portProduct
        } else { // Only buying partial with credits on hand
          holdsToBuy = Math.floor(portProduct - (data.credits / (productMasterPrice * sell)));
        }
      }
    } else {
      if (shipProduct < portProduct) {
        holdsToSell = shipProduct;
      } else {
        holdsToSell = portProduct;
      }
    }
  }
}

