$(window).load(function() {
  //Animate loader off screen
  setInterval(function() {
    $(".se-pre-con").fadeOut("slow");
  }, 2000);
});
// getting data from local storage
var data = JSON.parse(localStorage.update);
//array to hold rules of Buy and Sell based on class name
var buySellRule=[];

function updatePlayerStats(){
  var fuel = document.getElementById('userFuelStat');
  var org = document.getElementById('userOrganicStat');
  var equ = document.getElementById('userEquimentStat');
  var cre = document.getElementById('userCreditStat');
  var turn = document.getElementById('userTurnStat');
  console.log(data.fuelHolds);
  fuel.value = data.fuelHolds;
  org.value = data.orgHolds;
  equ.value = data.equipHolds;
  cre.value = data.credits;
  turn.value = data.turnsleft;
}
//load sector's stat
function updateSectorStats(){
  var fuel = document.getElementById('sectorFuelStat');
  var org = document.getElementById('sectorOraganicStat');
  var equ = document.getElementById('sectorEquimentStat');
  var curSec = data.currentSector;

  fuel.value = allPorts[curSec].fuel;
  org.value = allPorts[curSec].organics;
  equ.value = allPorts[curSec].equipment;
}
//Buy and Sell stats
function buySellStats(){
  var fuel = document.getElementById('sectorFuel');
  var org = document.getElementById('sectorOrganic');
  var equ = document.getElementById('sectorEquipment');
  var index = 0;
  var curSec = data.currentSector;
  sectorRules(allPorts[curSec].portClass);
  fuel.innerHTML = buySellRule[index];
  index++;
  org.innerHTML = buySellRule[index];
  index++;
  equ.innerHTML = buySellRule[index];
}
// to fill the array of buySellRule rules
function sectorRules(className){
  //NO-PORT','Class1', 'Class2', 'Class3', 'Class4', 'Class5', 'Class6', 'Class7', 'Class8'
  if(className==='NO-PORT'){
    buySellRule=['0','0','0'];
  }
  else if(className==='Class1'){
    buySellRule=['Buy','Buy','Sell'];
  }
  else if(className==='Class2'){
    buySellRule=['Buy','Sell','Buy'];
  }
  else if(className==='Class3'){
    buySellRule=['Sell','Buy','Buy'];
  }
  else if(className==='Class4'){
    buySellRule=['Sell','Sell','Buy'];
  }
  else if(className==='Class5'){
    buySellRule=['Sell','Buy','Sell'];
  }
  else if(className==='Class6'){
    buySellRule=['Buy','Sell','Sell'];
  }
  else if(className==='Class7'){
    buySellRule=['Sell','Sell','Sell'];
  }
  else if(className==='Class8'){
    buySellRule=['Buy','Buy','Buy'];
  }
  else if(className==='Class8'){
    buySellRule=['Buy','Buy','Buy'];
  }
  else if(className==='Class9'){
    buySellRule=['','',''];
  }
}
//next quest logic
function updateNextQuest(){
  var sector1 = document.getElementById('sector1Name');
  var sector2 = document.getElementById('sector2Name');
  var sector3 = document.getElementById('sector3Name');
  var sector4 = document.getElementById('sector4Name');
  var sector5 = document.getElementById('sector5Name');
  // sector1.innerHTML = data.
  // sector1.innerHTML = data.
  // sector1.innerHTML = data.
  // sector1.innerHTML = data.
  // sector1.innerHTML = data.
}

updateSectorStats();
buySellStats();
updatePlayerStats();
