$(window).load(function() {
  //Animate loader off screen
  setInterval(function() {
    $(".se-pre-con").fadeOut("slow");
  }, 1800);
  setInterval(function() {
    $("#portImg").addClass("fadein");
  }, 2000);
});

$(document).ready(function() {
  $('.hyperdrive').hover(function() {
    $(this).html('HYPERDRIVE READY!!');
  }, function() {
    $(this).html('HYPERDRIVE');
  });
});

$(document).ready(function() {
  $('.home').hover(function() {
    $(this).html('Warning!');
  }, function() {
    $(this).html('Recall');
  });
});

// getting data from local storage
var data = JSON.parse(localStorage.update);
//array to hold rules of Buy and Sell based on class name
var buySellRule=[];
var sectorName = document.getElementById('planetName');

function updatePlayerStats(){
  var fuel = document.getElementById('userFuelStat');
  var org = document.getElementById('userOrganicStat');
  var equ = document.getElementById('userEquimentStat');
  var cre = document.getElementById('userCreditStat');
  var turn = document.getElementById('userTurnStat');
  console.log(data.fuelHolds);
  fuel.innerHTML = data.fuelHolds;
  org.innerHTML = data.orgHolds;
  equ.innerHTML = data.equipHolds;
  cre.innerHTML = data.credits;
  turn.innerHTML = data.turnsleft;
}
//load sector's stat
function updateSectorStats(){
  var fuel = document.getElementById('sectorFuelStat');
  var org = document.getElementById('sectorOraganicStat');
  var equ = document.getElementById('sectorEquimentStat');
  var curSec = data.currentSector;

  fuel.innerHTML = allPorts[curSec].fuel;
  org.innerHTML = allPorts[curSec].organics;
  equ.innerHTML = allPorts[curSec].equipment;
  sectorName.innerHTML = ': ' +allSectors[allPorts[curSec].portSector].sectorName;

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
    buySellRule=['No Stock','No Stock','No Stock'];
  }
}
//next quest logic
function updateNextQuest(){
  var sec1 = document.getElementById('sec1Nm');
  var sec2 = document.getElementById('sec2Nm');
  var sec3 = document.getElementById('sec3Nm');
  var sec4 = document.getElementById('sec4Nm');
  var sec5 = document.getElementById('sec5Nm');
  var curSec = data.currentSector;
  var outLet = allSectors[curSec].sectorsOut;

  sec1.innerHTML = outLet[0];
  sec2.innerHTML = outLet[1];
  sec3.innerHTML = outLet[2];
  sec4.innerHTML = outLet[3];
  sec5.innerHTML = outLet[4];

  var input1 = document.getElementById('sec1');
  var input2 = document.getElementById('sec2');
  var input3 = document.getElementById('sec3');
  var input4 = document.getElementById('sec4');
  var input5 = document.getElementById('sec5');
  input1.value = outLet[0];
  input2.value = outLet[1];
  input3.value = outLet[2];
  input4.value = outLet[3];
  input5.value = outLet[4];
}
function updateSectorVisted(){
  var sec1 = document.getElementById('sec1Nm');
  var sec2 = document.getElementById('sec2Nm');
  var sec3 = document.getElementById('sec3Nm');
  var sec4 = document.getElementById('sec4Nm');
  var sec5 = document.getElementById('sec5Nm');
  var curSec = data.currentSector;
  var outLet = allSectors[curSec].sectorsOut;
  for(var i = 0 ; i < 5; i++){
    
  }
}
updateSectorStats();
buySellStats();
updatePlayerStats();
updateNextQuest();
updateSectorVisted();
